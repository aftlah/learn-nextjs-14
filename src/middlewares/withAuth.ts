import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";


const onlyAdminPage = ['/dashboard']
const authPage = ["/login", "/register"]


export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = []
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    // jika didalan parameter requireAuth ada pathanme
    if (requireAuth.includes(pathname)) {

      // getToken diambil dari next-auth/jwt
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // jika token tidak ada / false dan dia tidak di authPage
      if (!token && !authPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set('callbackUrl', encodeURI(req.url))
        return NextResponse.redirect(url);
      }

      // jika token ada / sudah login
      if (token) {
        // tetapi dia ada di halaman login atau resister
        // maka di redirect ke halaman home "/"
        if (authPage.includes(pathname)) {
          return NextResponse.redirect(new URL('/', req.url))
        }

        // mengecek jika role !== Admin dan onlyAdminPage ada pathname/dashboard
        if (token.role !== "admin" && onlyAdminPage.includes(pathname)) {
          // maka di redirect ke "/"
          return NextResponse.redirect(new URL('/', req.url))
        }
      }
    }

    return middleware(req, next);
  };
}
