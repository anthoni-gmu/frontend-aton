import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon, SearchIcon, TrashIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment, FunctionComponent } from 'react'
import DropFilter from './DropFilter'
import MoreFilters from './filter/MoreFilters'
import FilterPrice from './FilterPrice'
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]

const ShopMovile: FunctionComponent<{
    categories:any;
    brands:any;
    mobileFiltersOpen: boolean;
    setMobileFiltersOpen: (valor: boolean) => void;
    onSubmit: (e: React.SyntheticEvent) => void;
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    brandsform: number[];
    categoriesform: number[];
    order: string;
    price_range: string;
    sort_by: string;


}> = ({
    categories,
    brands,
    mobileFiltersOpen,
    setMobileFiltersOpen,
    onSubmit,
    onChange,
    brandsform,
    categoriesform,
    order,
    price_range,
    sort_by

}) => {
        return (
            <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                            <div className="px-4 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-gray-900">Filtros</h2>
                                <button
                                    type="button"
                                    className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                    onClick={() => setMobileFiltersOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            <form onSubmit={e => onSubmit(e)} className="mt-4 border-t mx-4 border-gray-200">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href} className="block px-2 py-3">
                                                {category.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {
                                    categories && categories !== null && categories !== undefined && categories.map((item: any) => (

                                        <DropFilter list={item.sub_categories} name={item.title} key={item.id} formdata={categoriesform} />

                                    ))
                                }
                                {
                                    brands && brands !== null && brands !== undefined && (
                                        <DropFilter list={brands} name={"marcas"} formdata={brandsform} />
                                    )
                                }

                                <MoreFilters sort_by={sort_by} order={order} onChange={onChange} />
                                <FilterPrice price_range={price_range} onChange={onChange} />
                                <div className='flex space-x-2'>
                                    <button className="flex ml-auto mt-3  text-day-600 bg-day-100 border-2 border-day-700 hover:bg-day-600 hover:text-day-100      dark:text-day-100 dark:bg-dark-200 dark:border-2 dark:border-day-700 dark:hover:bg-day-600 dark:hover:text-day-100 w-full h-10 items-center justify-around  ">
                                        <span>Limpiar</span>
                                        <TrashIcon className='w-6 h-6' />
                                    </button>
                                    <button type="submit" className="flex ml-auto mt-3  text-day-100 bg-day-600 border-2 border-day-600 hover:bg-day-700  dark:text-day-100 dark:bg-day-600 dark:border-2 dark:border-day-700 dark:hover:bg-day-700 dark:hover:text-day-100 w-full h-10 items-center justify-around  ">
                                        <span>Filtrar</span>
                                        <SearchIcon className='w-6 h-6' />
                                    </button>

                                </div>
                            </form>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        )
    }

export default ShopMovile