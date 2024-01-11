'use client'
import { getData } from '@/services/products'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const DetailProductPage =  (props: any) => {
    const { params } = props
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`)

    // console.log(product.data);
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}api/product/?id=${params.id}`,
    fetcher,
)
const product = {
    data: data?.data
}

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 place-items-center'>
            <Image width={500} height={500} className="p-8 rounded-t-lg object-contain h-96 w-full" src={product.data?.image} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.data?.name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white mt-3">${product.data?.price}</span>
                </div>
            </div>
        </div>
    )
}

export default DetailProductPage