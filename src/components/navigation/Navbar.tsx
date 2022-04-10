import React, { Fragment, useState } from 'react'
import { Popover } from '@headlessui/react'

import {

  MenuIcon,
  SearchIcon,
  UserAddIcon,
} from '@heroicons/react/outline'
import { LoginIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import DropAuth from '../auth/DropAuth'
import CartDropNav from './CartDropNav'
import Themes from './Themes'
import SidebarOpen from './SidebarOpen'
import { ListNavbar } from '../../helpers/data'
import { useRouter } from 'next/router'



const Navbar = () => {
  const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useRouter()
  const noSelect = ' dark:text-gray-400  '
  const select = 'border-b-2 border-day-600 dark:border-day-200 dark:text-gray-100 '

  const guestLinks = () => {
    return (

      <Fragment>
        <div className="flex items-center  justify-end md:w-96 space-x-2 ">
          <Link href="/auth/login">
            <a className="text-base font-medium flex space-x-1 text-dark dark:text-gray-400  hover:text-indigo-500">
              <LoginIcon className='w-6 h-6 ' />
              <span>Ingresar</span>
            </a>
          </Link>
          <Link href="/auth/signup">
            <a

              className="  inline-flex items-center justify-center space-x-1 text-base font-medium text-day-700 dark:text-day-200 "
            >
              <UserAddIcon className='w-6 h-6 ' />
              <span>Registrate</span>

            </a>
          </Link>
        </div>

      </Fragment>

    )
  }

  return (
    <div className="sticky top-0 z-40 ">
      <SidebarOpen sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} page={"shop"} />

      <Popover className="relative dark:bg-dark-500 bg-day-700">
        <div className="absolute inset-0 shadow  pointer-events-none" aria-hidden="true" />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-start  px-4 pt-3 pb-2 sm:px-6  lg:px-8 md:justify-start  ">

            <div className="md:flex  items-center md:space-x-2 lg:space-x-56 ">
              <div className='flex'>
                <button
                  type="button"
                  className="px-4  border-gray-200 text-gray-500 focus:outline-none hover:text-white  md:hidden"
                  onClick={() => setSidebarOpen(true)}
                >
                  <MenuIcon className='h-8 w-8' />
                  <span className="sr-only">Open sidebar</span>
                </button>
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

              <div className="relative text-gray-600  ">


                <input type="search" name="serch" placeholder="Search" className="bg-white   h-10 px-5 md:w-96  w-52 rounded-lg text-sm focus:outline-none" />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                  <SearchIcon className='h-6 w-6' />
                </button>
              </div>


            </div>


            <div className="  flex items-start justify-start sm:justify-end md:w-48 lg:w-60">
              <CartDropNav />
              {isAuthenticated ? <DropAuth /> : <div className='w-10'></div>}
            </div>



          </div>
        </div>

      </Popover>

      <div className="bg-day-200 dark:bg-dark-200 overflow-x-auto hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
          {ListNavbar.map((item) => (
            <div key={item.name} className={`text-dark-300 font-semibold flow-root hover:border-b-2 border-b-2 border-transparent pb-1 dark:hover:text-day-200 hover:text-day-600 hover:border-day-600 dark:hover:border-day-200${pathname === item.to ? select : noSelect}`} >
              <Link href={item.to}>
                <a className={`-m-3 p-3  flex items-center rounded-md text-base   `} >
                  <item.HeartIcon className="flex-shrink-0 h-6 w-6 " aria-hidden="true" />
                  <span className="ml-3">{item.name}</span>
                </a>
              </Link>
            </div>
          ))}
          {!isAuthenticated && guestLinks()}
          <Themes />

        </div>
      </div>
      {!isAuthenticated && <div className="bg-day-400 dark:bg-dark-200 md:hidden ">
        <div className="max-w-7xl mx-auto px-4 py-3 flex">
          {guestLinks()}
        </div>
      </div>}
    </div>
  )
}

export default Navbar