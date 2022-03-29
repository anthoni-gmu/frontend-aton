import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, FunctionComponent } from 'react'
import { useSelector } from 'react-redux'
import { ICartItem } from '../../../types/interface'
import DropCartProduct from '../cart/DropCartProduct'

const CartNav: FunctionComponent<{ closeModal: any, isOpen: boolean }> = ({ isOpen, closeModal }) => {
  const amount = useSelector((state: any) => state.Cart.amount)
  let items = useSelector((state: any) => state.Cart.items)
  const total_items = useSelector((state: any) => state.Cart.total_items)

  return (
    <Transition
      as={Fragment}
      show={isOpen}
      appear
      enter="duration-200 ease-out"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <Popover.Panel
        focus


        className="absolute z-30 top-0 inset-x-0 p-1transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-black divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5 sm:pb-8">
            <div className="flex items-center justify-between">
              <div>
                <Image
                  className="h-8 w-auto"
                  src={"/assets/cropped-logo-1.jpg"}
                  height="35px"
                  width="100px"
                  layout="intrinsic"
                  alt='logo aton'
                  quality={100}
                />
              </div>
              <div className="-mr-2">
                <button onClick={closeModal} className="bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-indigo-500 hover:bg-dark-100 focus:outline-none">
                  <span className="sr-only">Close Cart</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

            </div>
            <div className="mt-6 sm:mt-8">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative  bg-white p-7 pb-0">
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
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  )
}

export default CartNav