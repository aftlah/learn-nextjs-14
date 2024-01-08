import { register } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // mengambil data register dari body
    const req = await request.json()
    // console.log(req);

    const res = await register(req)

    return NextResponse.json({ status: res.status, message: res.message },{ status: res.statusCode })

}