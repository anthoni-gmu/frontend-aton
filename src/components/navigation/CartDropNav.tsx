import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
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
    <Popover className="relative z-auto ">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
    ${open ? '' : 'text-opacity-90'}
    text-white group bg-day-500 dark:bg-dark-700 p-2 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <ShoppingCartIcon className="h-6 w-6 text-day-700 dark:text-day-200" aria-hidden="true" />
            <div className="absolute -top-3 -right-3 px-2 py-0.5 dark:bg-dark-300 rounded-full bg-day-200 text-day-700 dark:text-white text-sm font-bold">{total_items}</div>

          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel 
            className="z-auto bg-day-400  absolute lg:right-0 -right-10   w-auto mt-3 origin-top rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="">
                <div className="flex flex-col max-w-3xl px-6  dark:bg-dark-300 dark:text-coolGray-100 max-h-96 overflow-auto scrollbar scrollbar-thin scrollbar-thumb-day-600 scrollbar-track-day-100 dark:scrollbar-track-dark-100">
                  <ul className="flex flex-col divide-y divide-coolGray-700 ">
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
                  </ul>

                </div>
                <div>
                  {
                    items !== null && items.length !== 0 && items ?
                      <div className="px-6 p-4 max-w-3xl dark:bg-dark-300 ">
                        <div className="flex flex-wrap border-b-2 my-2">
                          <h1 className="flex-auto text-base font-semibold ">
                            Total a pagar
                          </h1>
                          <div className="text-xl font-semibold text-dark-700 dark:text-gray-200 ">
                            ${amount}
                          </div>
                        </div>

                        <button type="button" className="py-2 px-4 hover:dark:bg-dark-300 bg-day-600 hover:bg-day-700 dark:bg-dark-700 focus:ring-day-500 focus:ring-offset-day-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                          Realizar Pago
                        </button>
                        <div className='w-full flex justify-center mt-2'>
                          <Link href="/cart/cartinfo" >
                            <a className='font-semibold hover:text-blue-700 hover:dark:text-dark' >Ver carrito</a>
                          </Link>
                        </div>

                      </div> :

                      <div className="p-4 bg-gray-50 w-full ">
                        <div className='w-full flex justify-center mt-2'>
                          <Link href="/products" >
                            <a
                              className='py-2 px-4  bg-indigo-600 hover:dark:bg-dark-500 hover:bg-indigo-700  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg'
                            > Ver Productos</a>
                          </Link>
                        </div>

                      </div>
                  }
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

export default CartDropNav