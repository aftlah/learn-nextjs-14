"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = ({ searchParams }: any) => {
	// console.log(searchParams);

	const router = useRouter();
	const [error, setError] = useState<string>("");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	// mengecek jika searchParams tidak bisa, makan akan di redirect ke "/"
	const callbackUrl = searchParams?.callbackUrl || "/";

	const handleLogin = async (e: any) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);
		try {
			// login with NextAuth
			const res = await signIn("credentials", {
				redirect: false,
				email: e.target.email.value,
				password: e.target.password.value,
				// ini mengambil callback url dari searchParams
				callbackUrl
			});

			if (!res?.error) {
				e.target.reset();
				router.push(callbackUrl);
				setIsLoading(false);
			} else {
				setIsLoading(false);
				// console.log(res);
				if (res.status === 401) {
					setError("Email or Password is Incorrect");
				}
			}
		} catch (error) {
			console.log(error);
		}

		// fetch('/api/auth/login', {
		//     method: 'POST',
		//     body: JSON.stringify({
		//             username: e.currentTarget.username.value,
		//             password: e.currentTarget.password.value
		//         })
		// })
	};
	return (
		<section className="grid min-h-screen place-items-center  p-16">
			<div className="w-72 rounded-md bg-gray-100 p-4 pt-0 shadow-lg">
				{error !== "" && (
					<div className="text-center text-red-500 font-bold py-3">{error}</div>
				)}
				<header className="flex h-16 items-center justify-between font-bold text-gray-950">
					<span>Login</span>
					<svg
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</header>
				<form className="grid gap-3" onSubmit={(e) => handleLogin(e)}>
					<input
						id="email"
						name="email"
						className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400"
						type="email"
						placeholder="Enter your email"
					/>
					<input
						id="password"
						name="password"
						className="h-10 rounded-sm bg-gray-100/50 px-2 text-gray-950 placeholder:text-gray-600/80 focus:outline-none focus:ring focus:ring-gray-400"
						type="password"
						placeholder="Enter your password"
					/>
					<button
						className="flex h-10 items-center justify-between rounded-sm bg-gray-700 px-2 text-gray-100 transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400"
						type="submit"
					>
						{isLoading ? <span>Loading...</span> : <span>Sign Up</span>}
						{/* <span>Sign In</span> */}
						<span>
							<svg
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
						</span>
					</button>
					<hr className="my-2 font-bold" />

					{/* button login with google */}
					<button
						type="button"
						onClick={() => signIn('google', {  redirect: true, callbackUrl })}
						className="flex h-10 items-center justify-between rounded-sm bg-gray-700 px-2 text-gray-100 transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400"
					>
						Login With Google
					</button>
				</form>
				<div className="flex justify-center mt-4 text-sm">
					Not registered?
					<Link href="/register" className="ml-1 text-blue-700 font-bold">
						Creat account
					</Link>
				</div>
			</div>
		</section>
	);
};

export default LoginPage;
