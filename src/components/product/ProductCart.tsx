import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment, FunctionComponent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../../../types/interface'
import { setAlert } from '../../redux/actions/alert';
import { add_item } from '../../redux/actions/cart';
import { HeartIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline';
import ModalAddProduct from '../cart/ModalAddProduct';
import { useRouter } from 'next/router';
import { add_wishlist_item, remove_wishlist_item } from '../../redux/actions/wishlist';
import WishlistHeart from './WishlistHeart';
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
        const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated)
        const wishlist = useSelector((state: any) => state.Wishlist.items)

        const router = useRouter()
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

                dispatch(add_item(id));

                setLoading(false)


            } else {
                dispatch(setAlert('No hay stock', 'red'))
            }
        }


        const addToWishlist = async () => {
            if (isAuthenticated) {
                let isPresent = false;
                if (
                    wishlist &&
                    wishlist !== null &&
                    wishlist !== undefined

                ) {
                    wishlist.map((item: any) => {
                        if (item.product.id.toString() === id.toString()) {
                            isPresent = true;
                        }
                    });
                }

                if (isPresent) {
                    dispatch(remove_wishlist_item(id));
                    dispatch(setAlert('Se elimino el producto de la lista de deseos', 'yellow'))
                } else {

                    dispatch(add_wishlist_item(id));
                    dispatch(setAlert('Se agrego el producto a la lista de deseos', 'green'))

                }

                isPresent = false;

            }
        };

        const WhisList = (
            <div className="max-w-xs rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100 m-3">
                <button onClick={addToWishlist} className="absolute z-20 mx-3 mt-3  flex text-white bg-red-700 border-0 w-8 h-8 items-center justify-center focus:outline-none hover:bg-red-400 rounded-full">
                    <XIcon className=' w-6 h-6' />
                </button>
                <Image
                    className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                    layout="responsive"
                    height="300"
                    width="300"
                    alt={slug}
                />


                <div className="flex flex-col justify-between p-6 space-y-8">

                    <div className="space-y-2">
                        <Link href={{
                            pathname: '/product/[slug]',
                            query: { slug: slug },
                        }}>
                            <p className="text-3xl font-semibold tracking-wide">{title.substring(0, 10) + "..."}</p>
                        </Link>
                        <div className='flex '>
                            <p className="text-md text-gray-800 mt-0 mx-2 line-through">S/{compare_price}</p>
                            <p className="text-lg font-semibold text-gray-800 mt-0 mx-2">S/{price}</p>
                        </div>
                    </div>

                    {loading ? <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button> :
                        <button onClick={addToCart} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-indigo-400 dark:text-coolGray-900 hover:bg-indigo-600">Añadir al carrito</button>
                    }

                </div>
            </div>
        )
        const productList = (
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
                            xd
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
                    <WishlistHeart
                        id={id}
                        wishlist={wishlist}
                        addToWishlist={addToWishlist}
                    />
                </div>


            </div>
        )

        return (
            <div>
                {
                    router.pathname === "/dashboard/wishlist" ? WhisList : productList
                }
                <ModalAddProduct isOpen={isOpen} closeModal={closeModal} photo={photo} title={title} price={price} total_items={total_items} amount={amount} />
            </div>
        )
    }

export default ProductCart