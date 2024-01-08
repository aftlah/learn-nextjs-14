import { login, loginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// Setup NextAuth
const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // Login With From / Manual
        CredentialsProvider({
            type: "credentials",
            name: "credentials",
            // menentukan inputnya apa saja yg digunakan
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials as {
                    email: string;
                    password: string;
                };
                const user: any = await login({ email });

                if (user) {
                    // mengecek password, apakah password yg di input dengan yg di database sama atau tidak
                    const passwordConfirm = await compare(password, user.password);
                    if (passwordConfirm) {
                        return user;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }

                // if (email === "altaf@gmail.com" && password === "12345") {
                //     return user;
                // } else {
                //     return null;
                // }
            },
        }),

        // Login with Google account
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            
        }),
    ],
    callbacks: {
        async jwt({ token, account, user }: any) {
            if (account?.provider === "credentials") {
                token.fullname = user.fullname;
                token.username = user.username;
                token.email = user.email;
                token.role = user.role;
            }

            // mengecek login dari google
            if (account?.provider === "google") {
                const data = {
                    fullname: user.fullname,
                    email: user.email,
                    type: "google",
                };
                await loginWithGoogle(
                    data, (result: { status: boolean; data: any }) => {
                        if (result.status) {
                            token.email = result.data.email;
                            token.fullname = result.data.fullname;
                            token.role = result.data.role;
                        }
                    }
                );
            }
            return token;
        },

        // generate Session
        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("username" in token) {
                session.user.username = token.username;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    // berfungsi untuk mengganti halaman pages milik kita
    pages: {
        signIn: "/login",
    },
};

// mengimport authOptions nya
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
