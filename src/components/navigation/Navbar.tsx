import React, { Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'

import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { logout } from '../../redux/actions/auth'
import DropAuth from '../auth/DropAuth'
import DropCartProduct from '../cart/DropCartProduct'
import { ICartItem } from '../../../types/interface';

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]



const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated);

  const amount = useSelector((state: any) => state.Cart.amount)
  let items = useSelector((state: any) => state.Cart.items)
  const total_items = useSelector((state: any) => state.Cart.total_items)

  // if (!isAuthenticated){
  //   items=JSON.parse(items);
  // };

  const guestLinks = () => {
    return (
      <Fragment>
        <div className="flex items-center md:ml-12">
          <Link href="/auth/login">
            <a className="text-base font-medium text-white hover:text-indigo-500">
              Ingresar
            </a>
          </Link>
          <Link href="/auth/signup">
            <a

              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Registrarse
            </a>
          </Link>
        </div>

      </Fragment>

    )
  }

  const userLinks = () => {
    return (
      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="./dashboard/main"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Dashboard
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={logoutHandler}
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                >
                  Sign out
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  }

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };
  return (
    <>
      <Popover className="relative bg-black">
        <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <Link href="/">

                <a className="flex">
                  <span className="sr-only">Workflow</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src={"/assets/cropped-logo-1.jpg"}
                    height="45px"
                    width="128px"
                    layout="intrinsic"
                    alt='logo aton'
                    quality={100}
                  />
                </a>
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-indigo-500 hover:bg-dark-100 focus:outline-none ">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-indigo-500' : 'text-white',
                          'group bg-black rounded-md inline-flex items-center text-lg font-medium hover:text-indigo-500 focus:outline-none'
                        )}
                      >
                        <span>Categorias</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-indigo-500' : 'text-white',
                            'ml-2 h-5 w-5 group-hover:text-indigo-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-dark-700">
                          <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-indigo-300 hover:text-dark text-white"
                              >
                                <div className="flex md:h-full lg:flex-col">
                                  <div className="flex-shrink-0">
                                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                                      <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                    <div>
                                      <p className="text-base font-medium ">{item.name}</p>
                                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>

                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>

                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
                <Link href="/products">
                  <a className="text-lg font-medium text-white hover:text-indigo-500">
                    Productos
                  </a>
                </Link>

                <a href="#" className="text-lg font-medium text-white hover:text-indigo-500">
                  Nosotros
                </a>

              </Popover.Group>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={`
                  ${open ? '' : 'text-opacity-90'}
                  text-white group bg-indigo-700 px-3 py-2 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                      <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-slate-400 rounded-full text-white text-xs">{total_items}</div>
                      <ChevronDownIcon
                        className={`${open ? '' : 'text-opacity-70'}
                    ml-2 h-5 w-5 text-indigo-300 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className=" absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 ">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative  bg-white p-7">
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
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {isAuthenticated ? <DropAuth /> : guestLinks()}
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
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
                    <Popover.Button className="bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-indigo-500 hover:bg-dark-100 focus:outline-none">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center p-3 rounded-lg hover:bg-indigo-200  hover:text-dark-300 text-white"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium ">{item.name}</div>
                        </a>
                      ))}
                    </div>
                    <div className="mt-8 text-base">
                      <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        {' '}
                        Ver Productos <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Productos
                  </a>

                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Docs
                  </a>

                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Company
                  </a>

                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Resources
                  </a>

                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Blog
                  </a>

                  <a href="#" className="rounded-md text-base font-medium text-white hover:text-indigo-700">
                    Contact Sales
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Registrarse
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Ya estas registrado?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Ingresar
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
          {callsToAction.map((item) => (
            <div key={item.name} className="flow-root">
              <a
                href={item.href}
                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              >
                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span className="ml-3">{item.name}</span>
              </a>
            </div>
          ))}
        </div>
      </div></>
  )
}

export default Navbar