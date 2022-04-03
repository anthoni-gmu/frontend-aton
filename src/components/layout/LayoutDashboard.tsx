import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Head from "next/head";

import Alert from "../notification/Alert";
import { Props } from '../../../types/type';

import { check_authenticated, load_user, refresh } from '../../redux/actions/auth';
import {
    get_items,
} from '../../redux/actions/cart';
import {
    get_wishlist_items
} from '../../redux/actions/wishlist';

import { get_account } from '../../redux/actions/profile';
import SidebarDashboard from '../navigation/SidebarDashboard';
import SidebarOpen from '../navigation/SidebarOpen';

import {
    MenuIcon
} from '@heroicons/react/solid'
import DropAuth from '../auth/DropAuth';
import CartNav from '../navigation/CartNav';
import MovileNav from '../navigation/MovileNav';
import CartDropNav from '../navigation/CartDropNav';

const Layout: React.FC<Props> = ({ title, content, children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {

            dispatch(check_authenticated());
            dispatch(load_user());
            dispatch(refresh());
            dispatch(get_account());
            dispatch(get_items());
            dispatch(get_wishlist_items());

        }

    }, [dispatch]);
    let [isOpen, setIsOpen] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />
            </Head>

            <SidebarDashboard />
            <div className="md:pl-64 flex flex-col flex-1 min-h-screen">
                <div className="sticky top-0 z-10 flex-shrink-0 flex h-16  bg-white dark:bg-gray-800 shadow">
                    <button
                        type="button"
                        className="px-4 border-gray-200 text-gray-500 focus:outline-none hover:text-white  md:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <MenuIcon className='h-8 w-8' />
                        <span className="sr-only">Open sidebar</span>
                    </button>
                    <div className=" hidden md:flex-1 md:flex md:items-center md:justify-end mr-24 mt-3 space-x-2">
                        <CartDropNav />
                        <DropAuth />
                    </div>

                </div>

                <main className="flex-1 bg-slate-400 dark:bg-gray-700 ">
                    {children}

                </main>
            </div>
            <Alert />
            <SidebarOpen sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        </>
    )
}
Layout.defaultProps = {
    title: 'Surf',
    content: 'Surf'
}


export default Layout