import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import DropAuth from '../auth/DropAuth'
import CartNav from './CartNav'
import MovileNav from './MovileNav'
import CartDropNav from './CartDropNav'

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
  const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated);


  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const guestLinks = () => {
    return (

      <Fragment>
        <div className="flex items-center mx-2 ">
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

  return (
    <div className="sticky top-0 z-50">
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
            <div className="-mr-2 -my-2 md:hidden  ">
              <Popover.Button className=" mx-3 bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-indigo-500 hover:bg-dark-100 focus:outline-none ">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
              <button onClick={openModal} className=" mx-3 bg-dark-700 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-indigo-500 hover:bg-dark-100 focus:outline-none ">
                <span className="sr-only">Open Cart</span>
                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
              </button>

            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-2 lg:space-x-10">
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
              <div className="flex">
                <CartDropNav />
                {isAuthenticated ? <DropAuth /> : guestLinks()}
              </div>
            </div>
          </div>
        </div>
        <CartNav closeModal={closeModal} isOpen={isOpen} />
        <MovileNav />

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
      </div>
    </div>
  )
}

export default Navbar