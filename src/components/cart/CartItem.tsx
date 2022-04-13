import { CheckIcon, ClockIcon, RefreshIcon, XIcon, TrashIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICartItem } from '../../../types/interface';
import { setAlert } from '../../redux/actions/alert';
import { update_item, remove_item } from '../../redux/actions/cart'


const CartItem: FunctionComponent<{
    item: ICartItem;
}> = ({
    item: {
        id,
        count,
        product,
    }
}) => {
        const dispatch = useDispatch();
        const { pathname } = useRouter();

        const [formData, setFormData] = useState({
            item_count: 1
        });

        const { item_count } = formData;

        useEffect(() => {
            if (count)
                setFormData({ ...formData, item_count: count });
        }, [count]);

        const onChange = (e: React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

        const onSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault();

            if (dispatch && dispatch !== null && dispatch !== undefined) {
                try {
                    if (product.quantity >= item_count) {
                        dispatch(update_item(product, item_count));
                        dispatch(setAlert('Carrito actualizado', 'green'));
                    }
                    else {
                        dispatch(setAlert('Not enough in stock', 'red'));
                    }
                } catch (err) {

                }
            }

        };

        const removeItemHandler = () => {
            if (dispatch && dispatch !== null && dispatch !== undefined)
                dispatch(remove_item(product));
            dispatch(setAlert('Producto Eliminado', 'red'));
        };

        return (
            <li className="flex flex-col sm:flex-row py-6 sm:py-10 bg-day-400 dark:bg-dark-100  m-2  rounded-lg">
                <div className="flex-shrink-0 mx-4">
                    <Image
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
                        alt={product.slug}
                        layout="intrinsic"
                        height="150"
                        width="150"
                    />

                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6 mx-4">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                        <div>
                            <div className="flex justify-between">
                                <h3 className="text-sm">
                                    <Link href={`/product/${product.slug}`} >
                                        <a className="font-medium text-gray-700 hover:text-gray-800 dark:text-gray-100">{product.title}</a>
                                    </Link>
                                </h3>
                            </div>
                            <div className="my-3 flex text-sm text-gray-500 dark:text-white">
                                <p className="">Marca:</p>
                                <p className="ml-3 ">{product.get_brand}</p>
                            </div>
                            {
                                pathname !== '/checkout' ? (<form onSubmit={e => onSubmit(e)}>
                                    <div className='flex justify-start items-center space-x-3 my-3'>
                                        <select
                                            name='item_count'
                                            onChange={(e) => onChange(e)}
                                            value={item_count}
                                            className="my-2 font-sofiapro-light dark:bg-dark-100 dark:border-dark-500 dark:text-day-100  inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                        </select>
                                        <button
                                            type="submit"
                                            className="-m-2 p-2 inline-flex text-gray-700 hover:text-gray-500 dark:text-day-400 dark:hover:text-sky-600 ">
                                            <RefreshIcon className='h-6 w-6' />
                                            <span className="mx-2 ">Actualizar</span>
                                        </button>

                                    </div>

                                </form>) : (
                                    <div className="my-3 flex text-sm text-gray-500 dark:text-white">
                                        <p className="">Cantidad:</p>
                                        <p className="ml-3 ">{item_count}</p>
                                    </div>
                                )
                            }

                        </div>


                        <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-sky-600">$ {product.price}</p>
                        {
                            pathname !== '/checkout' ? (<div className="mt-4 sm:mt-0 sm:pr-9">

                                <div className="absolute top-0 right-0">
                                    <button
                                        onClick={removeItemHandler}
                                        className="-m-2 p-2 inline-flex text-red-400 hover:text-red-500 ">
                                        <span className="sr-only">Remove</span>
                                        <TrashIcon className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>) : ''
                        }

                    </div>

                    <p className="mt-4 flex text-sm text-gray-700 space-x-2">
                        {
                            product &&
                                product !== null &&
                                product !== undefined &&
                                product.quantity > 0 ?
                                (
                                    <>
                                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                        <span className='text-green-700'>Disponible</span>
                                    </>
                                )
                                : (
                                    <>
                                        <ClockIcon className="flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                                        <span className='text-red-500'>Sin stock</span>
                                    </>
                                )}
                    </p>
                </div>
            </li>
        )
    }

export default CartItem