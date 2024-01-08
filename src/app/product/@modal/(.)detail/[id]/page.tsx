import Modal from '@/components/core/Modal'
import { getData } from '@/services/products'
import Image from 'next/image'
import React from 'react'

const DetailProductPage = async (props: any) => {
    const { params } = props
    const product = await getData(`http://localhost:3000/api/product/?id=${params.id}`)

    // console.log(product.data);

    return (
        <Modal>
            <Image width={500} height={500} src={product.data.image} alt="" className='w-full object-cover aspect-square col-span-2' />
            <div className='w-full p-4 px-6'>
                <h3>{product.data.name}</h3>
                <p>Price : ${product.data.price}</p>
            </div>
        </Modal>
    )
}

export default DetailProductPage