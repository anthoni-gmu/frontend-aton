import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, ShoppingCartIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { ICartItem } from '../../../types/interface'
import DropCartProduct from '../cart/DropCartProduct'

const CartDropNav = () => {
  const amount = useSelector((state: any) => state.Cart.amount)
  let items = useSelector((state: any) => state.Cart.items)
  const total_items = useSelector((state: any) => state.Cart.total_items)

  return (
    <Popover className="relative mx-2">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
    ${open ? '' : 'text-opacity-90'}
    text-white group bg-indigo-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-slate-400 rounded-full text-white text-xs">{total_items}</div>
            <ChevronDownIcon
              className={`${open ? '' : 'text-opacity-70'}
    ml-2 h-5 w-5 text-indigo-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
              aria-hidden="true"
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className=" absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative  bg-white p-7">
                  {

                    items !== null && items.length !== 0 && items ? items.map((item: ICartItem) => (
                      <div key={item.product.id} className="flex flex-col  sm:flex-row sm:justify-between">
                        <DropCartProduct item={item} />

                      </div>


                    )) :

                      <div className="w-full h-full text-center">
                        <div className="flex h-full flex-col justify-between">

                          <ShoppingCartIcon className="mt-4 w-16 h-w-16 m-auto text-gray-600" aria-hidden="true" />


                          <p className="text-gray-900 text-lg font-medium mt-4">
                            ¡No hay productos en el carrito!
                          </p>

                        </div>
                      </div>
                  }

                </div>
                {
                  items !== null && items.length !== 0 && items ?
                    <div className="p-4 bg-gray-50 w-full ">
                      <div className="flex flex-wrap border-b-2 my-2">
                        <h1 className="flex-auto text-base font-semibold ">
                          Total a pagar
                        </h1>
                        <div className="text-xl font-semibold text-gray-500 ">
                          ${amount}
                        </div>

                      </div>

                      <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Realizar Pago
                      </button>
                      <div className='w-full flex justify-center mt-2'>
                        <Link href="/cart/cartinfo" >
                          <a className='font-semibold hover:text-blue-700' >Ver carrito</a>
                        </Link>
                      </div>

                    </div> :

                    <div className="p-4 bg-gray-50 w-full ">
                      <div className='w-full flex justify-center mt-2'>
                        <Link href="/products" >
                          <a
                            className='py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
                          > Ver Productos</a>
                        </Link>
                      </div>

                    </div>
                }

              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default CartDropNav