import { NextResponse,NextRequest } from "next/server";

export const POST = async (request:NextRequest)=>{
    // kerna ini promise jadi tidak bisa langsung di console
    // console.log(req.json());

    // harus dibuat seperti ini dlu
    const req  = await request.json();
    // console.log(req);

    // value di dalam req bisa di destructuring seperti ini
    // const {username, password} = req
    // console.log(username, password);
    
    
    
    return NextResponse.json({
        status: 200,
        message: "Succes",
        data:req
    })

}