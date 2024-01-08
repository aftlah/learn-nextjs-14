import { getData } from '@/services/products'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

// type ProductPageProps = { params: { slug: String } }

// const getData = async () => {
//     // const res = await fetch('https://fakestoreapi.com/products',{
//     //     cache: 'no-store'
//     // })
//     // const data = await res.json()

//     // fetching dari API yg ada di folder /api
//     const res = await fetch('http://localhost:3000/api/product',{
//         // cache = Cache merujuk pada penyimpanan sementara data sehingga tidak perlu mengambilnya setiap kali ada permintaan
//         // secara default cache: 'force-cache'
//         cache: 'no-store',
//         // revalidate =  mengontrol seberapa sering halaman harus diperbarui. 
//         // Revalidate dibagi menjadi 2, yaitu : Time-based Revalidation(secara otomatis menggunakan waktu) dan On-demand Revalidation (secara manual) 
//         // Jika pengguna mengakses halaman setelah revalidate waktu (dalam detik) berlalu
//         next:{
//             // Time-based Revalidation
//             // revalidate: 10

//             // On-demand Revalidation
//             // ini harus di trigger secara manual, bisa menggunakan button atau postman, thunderclient dan lainnya 
//             // contohnya seperti di dashbord/product
//             tags:['product']
//         }
//     })
//     const datas = await res.json()
//     const result = datas.data


//     if (!res.ok) {
//         throw new Error("Failed to fetch data")
//     }

//     return result

// }

const DetailProductPage = async () => {
    // const { params } = props
    // console.log(props);

    const data = await getData("http://localhost:3000/api/product")
    const products = data.data
    // console.log(data)
 


    return (
        <>
            {/* <div>
                <h1>Detail product Page : </h1>
            </div> */}

            {/* satu param */}
            {/* <p>1 Param {params.slug}</p> */}

            {/* lebih dari satu param */}
            {/* <p>Category : {params.slug[0]}</p>
            <p>Gender : {params.slug[1]}</p>
            <p>Id : {params.slug[2]}</p> */}

            {/* optional param */}
            {/* <h1>{params.slug ? " Detail Product Page " : "Product Page"}</h1> */}
            {/* {params.slug && (
                <div>
                    <p>Category : {params.slug[0]}</p>
                    <p>Gender : {params.slug[1]}</p>
                    <p>Id : {params.slug[2]}</p>
                </div>
            )} */}

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 place-items-center'>
                {products?.length > 0 && products.map((product: any) => (
                    <Link href={`/product/detail/${product.id}`} key={product.id} className="w-[90%]  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-4">
                    <Image width={500} height={500} className="p-8 rounded-t-lg object-contain h-96 w-full" src={product.image} alt="product image" />
                    <div className="px-5 pb-5">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.name}</h5>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-gray-900 dark:text-white mt-3">${product.price}</span>
                            <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </>
    )
}

export default DetailProductPage