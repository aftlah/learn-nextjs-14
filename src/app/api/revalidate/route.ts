import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextResponse, NextRequest } from "next/server";

const data = [
    {
        id: 1,
        title: "Nike Air Force 1 High '07",
        price:  1648000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/655f871a-5bdf-47be-ba7c-2020ffc15c3f/air-force-1-07-shoes-cg0zlX.png"
    },
    {
        id: 2,
        title: "Nike Air Force 1 Mid Evo",
        price:  2379000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/03a98a49-c91c-49fc-b5a2-2e6b0815621a/air-force-1-mid-evo-shoes-1HPsJQ.png"
    },
    {
        id: 3,
        title: "Nike Air Force 1 Low Retro",
        price: 237900,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d777e1e5-1fd1-4ed7-8010-ec4051bec078/air-force-1-low-retro-shoes-gkT3ck.png"
    },
    {
        id: 4,
        title: "Nike Air Force 1 High '07 LX NBHD",
        price: 2018000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/de6f1ae2-796e-4b5e-9021-eb8c3d767fc3/air-force-1-high-07-lx-nbhd-shoes-tLmZrC.png"
    },
    
 
   
];

export const GET = async (request: NextRequest) => {
    // cara untuk resquest melalui URL
    // misalkan api/product?id=1 , nah cara mendapatkan idnya itu bisa dengan searchParams
    // console.log(request);
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    // console.log(id);

    // untuk menentukan data yg dicari dari id
    if (id) {
        // ini ngambil data dari data yg ada di atas
        // const detailProduct = data.find((item) => item.id == Number(id));

        // ngambil data detail produk dari firebase
        const detailProduct = await retrieveDataById("products",id)
        // jika detailProduct ada 
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                response: "Success",
                data: detailProduct,
            });
        }

        // jika detailProduct tidak ada 
        return NextResponse.json({
            status: 404,
            response: "Not Found",
            data: {},
        });
        
    }

    // ini dari firebase
    const products = await retrieveData('products')

    // menampilkan seluru data
    return NextResponse.json({ status: 200, response: "Succes", data: products });
};
