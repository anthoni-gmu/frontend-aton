import { MinusCircleIcon } from '@heroicons/react/outline';
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
            <div className="flex w-full space-x-2 sm:space-x-1">
                <div className="flex-shrink-0">
                    <Image
                        className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${product.photo}`}
                        alt={product.slug}
                        layout="intrinsic"
                        height="100"
                        width="100"
                    />

                </div>

                <div className="flex flex-col justify-between w-full pb-4">

                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold leading-snug sm:pr-8">{product.title}</h3>
                            {/* <p className="text-sm dark:text-coolGray-400">Classic</p> */}
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold text-gray-500">{count}</p>

                            <p className="text-lg font-semibold text-gray-500">${product.price}</p>
                            {/* <p className="text-sm line-through dark:text-coolGray-600">75.50€</p> */}
                        </div>
                    </div>
                    <div className="flex flex-wrap border-b-2 my-2">
                        <h1 className="flex-auto text-base font-semibold ">
                            Total
                        </h1>
                        <div className="text-xl font-semibold  ">
                            ${parseFloat(product.price) * count}
                        </div>

                    </div>
                    <div className="flex text-sm divide-x">
                        <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1 hover:text-deep-orange-accent-400" onClick={removeItemHandler}>
                            <MinusCircleIcon className='w-5 h-5' />
                            <span>Eliminar</span>
                        </button>

                    </div>
                </div>
            </div>
        )
    }

export default DropCartProduct