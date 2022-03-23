import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

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
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

import Image from 'next/image'

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
const company = [
  { name: 'About', href: '#', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Webinars', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]


const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <>


      <Popover className="relative bg-black">
        <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <a href="#" className="flex">
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
                <a href="#" className="text-lg font-medium text-white hover:text-indigo-500">
                  Productos
                </a>
                <a href="#" className="text-lg font-medium text-white hover:text-indigo-500">
                  Nosotros
                </a>

              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <a href="#" className="text-base font-medium text-white hover:text-indigo-500">
                  Ingresar
                </a>
                <a
                  href="#"
                  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Registrarse
                </a>
              </div>
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