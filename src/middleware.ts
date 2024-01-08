import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth  from "./middlewares/withAuth";

export const MainMiddleware = (request: NextRequest) => {
    // setiap kita mengakses sebuah URL makan yg akan diakses terlebih dahulu adalah middleware nya dulu
    // jadi dieksekusi dulu middleware nya lalu di cek ini akan diarahkan kemana

    // if (request.nextUrl.pathname.startsWith("/")) {
    //     return NextResponse.redirect(new URL('/home', request.url))
    //     // return NextResponse.rewrite(new URL('/', request.url))
    // }

    // if(request.nextUrl.pathname.startsWith("/dashboard")){
    //     return NextResponse.redirect(new URL("/product",request.url))
    // }

    // contoh penggunaan middleware
    // case nya Login : ketika kita belum login, halaman mana saja yg tidak bisa dia acces 
    // const isLogin = true;
    // if (!isLogin) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }\


    // mengecek middleware withAuth
    const res = NextResponse.next()
    return res;

}
// Matcher : fungsinya memungkinkan kita untuk memfilter middleware itu berjalan pada path yang spesifik
// export const config = {
//     // matcher: "/dashboard/product",

//     // atau kalau nested URL bisa ditulis seperti ini 
//     // matcher:"/dashboard/:path*"

//     // kalau banyak page bisa menggunakan seperti ini
//     matcher: ["/dashboard/:path*", "/about/:path*"],
// }

// ini middleware dari middlewares/withAuth
// dia akan mengecek apakah user sudah login atau belum
// jika user belum login, dia akan di lempar ke halaman login
        //  wihtAuth(mainMiddleware,[url mana saja yg mau dibatasi dengan authentication]) 
export default withAuth(MainMiddleware, ["/dashboard",'/profile','/login']);
