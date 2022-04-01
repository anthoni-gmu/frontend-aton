import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, FunctionComponent } from 'react'
import { useDispatch } from 'react-redux'

const ModalAddProduct:FunctionComponent<{
    isOpen: boolean,
    closeModal: ()=>void,
    photo: string,
    title: string,
    price: string,
    total_items: number,
    amount: number,
}> = ({isOpen,closeModal,photo,title,price,total_items,amount}) => {

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
            >
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <div className='flex'>
                                <div className="flex-none w-24 md:w-48  relative">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                                        alt={title}
                                        className="absolute rounded-lg inset-0 w-full h-full object-cover"
                                        width={300}
                                        height={300}
                                        layout="responsive"

                                    />
                                </div>
                                <div className="flex-auto p-6">
                                    <div className="flex flex-wrap border-b-2 my-4">
                                        <h1 className="flex-auto text-xl font-semibold ">
                                            {title}
                                        </h1>
                                        <div className="text-xl font-semibold text-gray-500 ">
                                            ${price}
                                        </div>

                                    </div>
                                    <div className="flex flex-wrap border-b-2 my-2">
                                        <h1 className="flex-auto text-base font-semibold ">
                                            Cantidad de productos en el carrito
                                        </h1>
                                        <div className="text-xl font-semibold text-gray-500 ">
                                            {total_items}
                                        </div>

                                    </div>

                                    <div className="flex flex-wrap border-b-2 my-2">
                                        <h1 className="flex-auto text-base font-semibold ">
                                            Total a pagar
                                        </h1>
                                        <div className="text-xl font-semibold text-gray-500 ">
                                            ${amount}
                                        </div>

                                    </div>

                                    <div className="flex mb-4 text-sm font-medium">
                                        <button onClick={closeModal}
                                            className="px-4 py-2  text-base  rounded-lg  text-indigo-500 border border-indigo-500 ease-in duration-200 text-center  font-semibold shadow-md w-full hover:bg-slate-600 hover:text-white transition"
                                        >
                                            Continuar Comprando
                                        </button>
                                    </div>
                                    <div className="flex mb-4 text-sm font-medium">
                                        <Link href='/cart/cartinfo' >
                                            <a className=" px-4 py-2  text-base  rounded-lg  text-indigo-500 border border-indigo-500 ease-in duration-200 text-center  font-semibold shadow-md w-full hover:bg-slate-600 hover:text-white transition">
                                                Ver Carrito
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="flex mb-4 text-sm font-medium">
                                        <Link href={'/checkout'}  >
                                            <a className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Pagar Ahora
                                            </a>

                                        </Link>
                                    </div>
                                    <p className="text-sm text-gray-600 ">
                                        El precio de envio no esta incluido.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default ModalAddProduct