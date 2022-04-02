import Link from 'next/link'
import React from 'react'

import ListNavDashboard from './ListNavDashboard';
import { ListSidebar } from '../../helpers/data';
const SidebarDashboard = () => {
    return (
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex flex-col flex-grow  border-gray-200 bg-white overflow-y-auto">

                <div className=" flex-grow flex flex-col">
                    <div className="relative bg-white dark:bg-gray-800">
                        <div className="flex flex-col sm:flex-row sm:justify-around">
                            <div className="w-72 h-screen">
                                <div className="flex items-center justify-start mx-6 mt-10">
                                    <span className="text-gray-600 dark:text-gray-300 ml-4 text-2xl font-bold border-b-2 ">
                                        ATON
                                    </span>
                                </div>
                                <nav className="mt-10 px-6 ">
                                    {
                                        ListSidebar.map(item => (
                                            <div key={item.name}>
                                                <ListNavDashboard list={item} />
                                            </div>
                                        ))
                                    }

                                </nav>
                                <div className="absolute bottom-0 my-10">
                                    <a className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center py-2 px-8" href="#">

                                        <span className="mx-4 font-medium">
                                            Support
                                        </span>
                                    </a>
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