import { MinusCircleIcon, HeartIcon } from '@heroicons/react/outline';
import React, { FunctionComponent } from 'react'
import { ICartItem } from '../../../types/interface';
import { useDispatch } from 'react-redux';
import { remove_item } from '../../redux/actions/cart';
import { setAlert } from '../../redux/actions/alert';
import Image from 'next/image';

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
            <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div className="flex w-full space-x-2 sm:space-x-4">
                    <div>
                        <Image
                            className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-coolGray-500"
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
                            alt={product.slug}
                            width={500}
                            height={300}
                            priority

                        />
                    </div>

                    <div className="flex flex-col justify-between w-full pb-4">
                        <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1">
                                <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title.substring(0, 11) + "..."}</h3>
                                <p className="text-sm dark:text-coolGray-400 lowercase">{product.get_category}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-lg font-semibold">S/{parseFloat(product.price) * count}</p>
                                <p className="text-sm  dark:text-coolGray-600">{count}</p>
                            </div>
                        </div>
                        <div className="flex text-sm divide-x">
                            <button type="button" onClick={removeItemHandler} className="flex items-center px-2 py-1 pl-0 space-x-1">
                                <MinusCircleIcon className='w-6 h-6' />
                            </button>
                            <button type="button" className="flex items-center px-2 py-1 space-x-1">
                                <HeartIcon className='w-6 h-6' />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        )
    }

export default DropCartProduct