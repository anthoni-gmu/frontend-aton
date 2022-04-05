import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/actions/auth';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';


const DropAuth = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.Profile.profile)
    const user = useSelector((state: any) => state.Auth.user)

    const logoutHandler = () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(logout());
    };

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(' ')
    }

    const userNavigation = [
        { name: 'Panel de control', to: '/dashboard/main' },
        { name: 'Settings', to: '#' },
    ]

    return (
        <div className="block">
            <div className="ml-4 flex items-center md:ml-6">


                {
                    user && user !== null && user !== undefined && profile && profile !== null && profile !== undefined &&
                    <Menu as="div" className="ml-3 relative z-auto">
                        <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">Open user menu</span>


                                <Image
                                    alt={user.get_full_name}
                                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${profile.photo}`}
                                    className="h-8 w-8 rounded-full "
                                    layout="fixed"
                                    height="38"
                                    width="38"
                                />
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
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-day-400 dark:bg-dark-200 ring-1 ring-black ring-opacity-5 focus:outline-none p-2">
                                {userNavigation.map((item) => (
                                    <Menu.Item key={item.name}>
                                        {({ active }) => (
                                            <Link href={item.to} >
                                                <a className={classNames(
                                                    active ? 'bg-dark-700' : '',
                                                    'block px-4 py-2 text-lg text-slate-800 dark:text-white w-full hover:bg-day-500 hover:dark:bg-dark-700 rounded-lg hover:text-day-600'
                                                )}>  {item.name}</a>

                                            </Link>
                                        )}
                                    </Menu.Item>

                                ))}
                                <Menu.Item key="logout">
                                    {({ active }) => (
                                        <button
                                            onClick={logoutHandler}
                                            className={classNames(
                                                active ? 'bg-dark-700' : '',
                                                'block px-4 py-2 text-lg text-left text-slate-800 dark:text-white w-full hover:bg-day-500 hover:dark:bg-dark-700 rounded-lg hover:text-day-600'
                                            )}
                                        >
                                            Salir
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                }


            </div>
        </div>
    )
}

export default DropAuth