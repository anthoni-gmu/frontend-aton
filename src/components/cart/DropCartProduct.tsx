import { MinusCircleIcon, HeartIcon, TrashIcon } from '@heroicons/react/outline';
import React, { FunctionComponent } from 'react'
import { ICartItem } from '../../../types/interface';
import { useDispatch } from 'react-redux';
import { remove_item } from '../../redux/actions/cart';
import { setAlert } from '../../redux/actions/alert';
import Image from 'next/image';
import Link from 'next/link';

const DropCartProduct: FunctionComponent<{
    item: ICartItem;
}> = ({
    item: {
        id,
        count,
        product,
    }
}) => {
        const dispatch = useDispatch();

        const removeItemHandler = () => {
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                dispatch(remove_item(product));
                dispatch(setAlert('Producto Eliminado del Carrito de Compras', 'yellow'));
            }

        };
        return (
            <li className=" bg-zinc-100 dark:bg-dark-100 my-1 rounded-sm">
                <div className="flex w-full space-x-2 sm:space-x-4 my-2 ">
                    <div className='w-32 '>
                        <Image
                            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-coolGray-500"
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
                            alt={product.slug}
                            layout={"intrinsic"}
                            width={500}
                            height={300}
                            priority

                        />
                    </div>

                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2 text-dark dark:text-white">
                            <div className="space-y-1 ">
                                <Link href={`/product/${product.slug}`}>
                                    <a className=" text-lg hover:text-day-700 hover:dark:text-sky-600  font-semibold leading-snug sm:pr-8">{product.title.substring(0, 11) + "..."}</a>
                                </Link>
                                <p className="text-sm dark:text-coolGray-400 lowercase hidden md:block">{product.get_category}</p>
                            </div>
                            <button type="button" onClick={removeItemHandler} className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <TrashIcon className='w-6 h-6 hover:text-red-500' />
                            </button>
                        </div>

                        <div className="flex text-sm divide-x">
                            <div className=" flex space-x-8 text-day-700 font-semibold text-lg dark:text-sky-600 ">
                                <p>S/{parseFloat(product.price) * count}</p>
                                <div className="divider  lg:divider-horizontal"></div>
                                <p>{count}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

export default DropCartProduct