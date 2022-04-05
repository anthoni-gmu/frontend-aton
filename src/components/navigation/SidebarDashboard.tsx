import React from 'react'

import ListNavDashboard from './ListNavDashboard';
import { ListSidebar } from '../../helpers/data';
import Themes from './Themes';
import Link from 'next/link';
import Image from 'next/image';

const SidebarDashboard = () => {

    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow  border-gray-200  overflow-y-auto">

                <div className=" flex-grow flex flex-col">
                    <div className="relative bg-day-400 dark:bg-dark-500">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <div className="flex items-center justify-start mx-6 mt-10">
                                    <div className="dark:hidden  flex-shrink-0 flex items-center px-4">
                                        <Link href={'/'}>
                                            <a >
                                                <Image
                                                    className="h-8 w-auto sm:h-10"
                                                    src={"/assets/lightLogo.png"}
                                                    height="45px"
                                                    width="128px"
                                                    layout="intrinsic"
                                                    alt='logo aton'
                                                    quality={100}
                                                />
                                            </a>

                                        </Link>
                                    </div>
                                    <div className="hidden cursor-pointer dark:flex flex-shrink-0  items-center px-4">
                                        <Link href={'/'}>
                                            <a >
                                                <Image
                                                    className="h-8 w-auto sm:h-10"
                                                    src={"/assets/darkLogo.png"}
                                                    height="45px"
                                                    width="128px"
                                                    layout="intrinsic"
                                                    alt='logo aton'
                                                    quality={100}
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <nav className="mt-10 px-6  ">
                                    {
                                        ListSidebar.map(item => (
                                            <div key={item.name}>
                                                <ListNavDashboard list={item} />
                                            </div>
                                        ))
                                    }

                                </nav>
                                <div className="absolute bottom-0 my-10 mx-10">
                                    <Themes />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidebarDashboard