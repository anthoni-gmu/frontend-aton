import React, { Fragment, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Menu, Popover, Transition } from '@headlessui/react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { ICartItem, IProduct } from '../../../types/interface';
import DropCartProduct from '../cart/DropCartProduct';

const DropAuth = () => {
    const dispatch = useDispatch();

    const amount = useSelector((state: any) => state.Cart.amount)
    const items = useSelector((state: any) => state.Cart.items)
    const total_items = useSelector((state: any) => state.Cart.total_items)

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout());
    };
    const [render, setRender] = useState(false);
    const [redirect, setRedirect] = useState(false);


    const usertest = {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    const userNavigation = [
        { name: 'Panel de control', to: '#' },
        { name: 'Settings', to: '#' },
        { name: 'Sign out', to: '#' },
    ]

    return (
        <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">

                


                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative z-10">
                    <div>
                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={usertest.imageUrl} alt="" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {/* {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({ active }) => (
                                        <Link href="#" >
                                            <a className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}>  {item.name}</a>

                                        </Link>
                                    )}
                                </Menu.Item>

                            ))} */}
                            <Menu.Item key="logout">
                                {({ active }) => (
                                    <button
                                        onClick={logoutHandler}
                                        className={classNames(
                                            active ? 'bg-gray-100' : '',
                                            'block px-4 py-2 text-sm text-gray-700 w-full'
                                        )}
                                    >
                                        Salir
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}

export default DropAuth