"use client"
import Modal from '@/components/core/Modal'
import { getData } from '@/services/products'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const DetailProductPage = (props: any) => {
    const { params } = props
    // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`)

    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
        fetcher,
    )
    const product = {
        data: data?.data
    }

    // console.log(product.data);

    return (
        <Modal>
            <Image width={500} height={500} src={product.data?.image} alt="" className='w-full object-cover aspect-square col-span-2' />
            <div className='w-full p-4 px-6'>
                <h3>{product.data?.name}</h3>
                <p>Price : ${product.data?.price}</p>
            </div>
        </Modal>
    )
}

export default DetailProductPage