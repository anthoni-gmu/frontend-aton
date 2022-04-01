import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, FunctionComponent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../../types/interface'
import { setAlert } from '../../redux/actions/alert';
import { add_item } from '../../redux/actions/cart';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Oval } from 'react-loader-spinner';
import ModalAddProduct from '../cart/ModalAddProduct';
const ProductCart: FunctionComponent<{
    product: IProduct;
}> = ({
    product: {
        id,
        get_category,
        title,
        price,
        compare_price,
        photo,
        slug,
        quantity
    } }) => {

        const dispatch = useDispatch();
        const [loading, setLoading] = useState(false);

        const amount = useSelector((state: any) => state.Cart.amount)
        const items = useSelector((state: any) => state.Cart.items)
        const total_items = useSelector((state: any) => state.Cart.total_items)
        const products = useSelector((state: any) => state.Product.products)

        let [isOpen, setIsOpen] = useState(false)
        function closeModal() {
            setIsOpen(false)
        }
        function openModal() {
            setIsOpen(true)
        }

        const addToCart = async () => {
            if (quantity > 0) {
                setLoading(true)
                const productAdd = products && products !== null && products !== undefined && products.find((element: any) => element.id === id)
                const MoreThatOne = items && items !== null && items !== undefined && items.find((element: any) => element.product.id === id);
                MoreThatOne === undefined ?
                    openModal() :
                    quantity !== 1 ?
                        MoreThatOne.count - quantity === 0 ?
                            dispatch(setAlert('No hay stock', 'yellow')) :
                            dispatch(setAlert('Producto actualizadoasd', 'green')) :
                        MoreThatOne.count - quantity !== 0 ?
                            dispatch(setAlert('Producto actualizado', 'green')) :
                            dispatch(setAlert('No hay stock', 'red'))

                dispatch(add_item(productAdd));

                setLoading(false)


            }else{
                dispatch(setAlert('No hay stock', 'red'))
            }
        }


        return (


            <div key={id} className="relative max-w-sm  bg-white shadow-md rounded-3xl p-2 mx-3 my-3 cursor-pointer">
                <div className="overflow-x-hidden rounded-2xl relative">
                    <Image
                        className=" rounded-2xl w-full object-cover"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                        layout="responsive"
                        height="300"
                        width="300"
                        alt={slug}
                    />
                    <p className="absolute right-2 top-2 bg-indigo-300 rounded-full p-2 cursor-pointer group">
                        {loading ? <button
                            className="flex ml-auto text-white bg-indigo-500 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-indigo-700 rounded-full">
                            <Oval
                                color="#fff"
                                width={20}
                                height={20} />
                        </button> :
                            <button onClick={addToCart} className="flex ml-auto text-white bg-indigo-500 border-0 w-10 h-10 items-center justify-center focus:outline-none hover:bg-indigo-700 rounded-full">
                                <ShoppingCartIcon className='w-6 h-6' />
                            </button>}
                    </p>
                </div>
                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                    <div>
                        <Link href={{
                            pathname: '/product/[slug]',
                            query: { slug: slug },
                        }}>
                            <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
                        </Link>

                        <div className='flex '>
                            <p className="text-md text-gray-800 mt-0 mx-2 line-through">S/{compare_price}</p>
                            <p className="text-lg font-semibold text-gray-800 mt-0 mx-2">S/{price}</p>
                        </div>

                    </div>
                    <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                </div>
                <ModalAddProduct isOpen={isOpen} closeModal={closeModal} photo={photo} title={title} price={price} total_items={total_items} amount={amount}/>

            </div>

        )
    }

export default ProductCart