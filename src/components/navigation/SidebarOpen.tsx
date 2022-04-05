import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, FunctionComponent } from 'react'
import { INavbarDashboard } from '../../../types/interface'
import { ListSidebar,ListNavbar } from '../../helpers/data'
import ListNavDashboard from './ListNavDashboard'
import SidebarDashboard from './SidebarDashboard'
import Themes from './Themes'

const SidebarOpen: FunctionComponent<{
    sidebarOpen: boolean,
    setSidebarOpen: (id: boolean) => void,
    page:string

}> = ({ sidebarOpen, setSidebarOpen ,page}) => {
    let items:any=[]

    if(page==="dashboard"){
        items=ListSidebar
    }else if(page==="shop"){
        items=ListNavbar

    }else{
        items=ListSidebar

    }

    return (
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden " onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                </Transition.Child>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-day-300 dark:bg-dark-500">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-in-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in-out duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="absolute top-0 right-0 -mr-12 pt-2">
                                <button
                                    type="button"
                                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                    onClick={() => setSidebarOpen(false)}
                                >
                                    <span className="sr-only">Close sidebar</span>
                                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </button>
                            </div>
                        </Transition.Child>
                        <div className="dark:hidden flex-shrink-0 flex items-center px-4">
                            <Image
                                className="h-8 w-auto sm:h-10"
                                src={"/assets/lightLogo.png"}
                                height="45px"
                                width="128px"
                                layout="intrinsic"
                                alt='logo aton'
                                quality={100}
                            />
                        </div>
                        <div className="hidden dark:flex flex-shrink-0  items-center px-4">
                            <Image
                                className="h-8 w-auto sm:h-10"
                                src={"/assets/darkLogo.png"}
                                height="45px"
                                width="128px"
                                layout="intrinsic"
                                alt='logo aton'
                                quality={100}
                            />
                        </div>
                        <div className="mt-5 flex-1 h-0 overflow-y-auto">
                            <nav className="mt-10 px-6 ">
                                {
                                    items.map((item:any) => (
                                        <div key={item.name}>
                                            <ListNavDashboard list={item} />
                                        </div>
                                    ))
                                }

                            </nav>
                        </div>
                        <div className="absolute bottom-0 my-10 mx-10">
                            <Themes />
                        </div>
                    </div>
                </Transition.Child>
                <div className="flex-shrink-0 w-14" aria-hidden="true">
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default SidebarOpen