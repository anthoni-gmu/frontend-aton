import { Popover, Transition } from '@headlessui/react'
import { ChartBarIcon, CursorClickIcon, ShieldCheckIcon, ViewGridIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { Fragment } from 'react'
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
const MovileNav = () => {
  return (
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
  )
}

export default MovileNav