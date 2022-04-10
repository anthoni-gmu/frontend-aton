import { Disclosure } from '@headlessui/react'
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent } from 'react'

const MoreFilters: FunctionComponent<{
    order: string,
    sort_by: string,
    onChange: (e: React.FormEvent<HTMLSelectElement>) => void,

}> = ({ order, sort_by, onChange }) => {
    return (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
                <>
                    <h3 className="-mx-2 -my-3 flow-root ">
                        <Disclosure.Button className="px-2   w-full flex items-center justify-between text-gray-400 hover:text-gray-500  focus:outline-none">
                            <span className="font-medium text-base  text-gray-900 dark:text-day-100 capitalize ">Mas Filtros</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-6 ">
                            <div className="space-y-6 bg-day-100 rounded-sm dark:bg-dark-700  p-3">
                                <div className='form-group  '>
                                    <label htmlFor='sort_by' className='mr-3 min-w-0 flex-1 text-gray-500'
                                    >Ver por</label>
                                    <select
                                        className='my-2 font-sofiapro-light dark:bg-dark-100 dark:border-dark-500 dark:text-day-100  inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
                                        id='sort_by'
                                        name='sort_by'
                                        value={sort_by}
                                        onChange={e => onChange(e)}
                                    >
                                        <option value='date_created'>Fecha</option>
                                        <option value='price'>Precio</option>
                                        <option value='sold'>Sold</option>
                                        <option value='title'>Nombre</option>

                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='order' className='mr-3 min-w-0 flex-1 text-gray-500'
                                    >Orden</label>
                                    <select
                                        className='my-2 font-sofiapro-light dark:bg-dark-100 dark:border-dark-500 dark:text-day-100  inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none '
                                        id='order'
                                        name='order'
                                        value={order}
                                        onChange={e => onChange(e)}
                                    >
                                        <option value='asc'>A - Z</option>
                                        <option value='desc'>Z - A</option>
                                    </select>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </h3>
                </>
            )}
        </Disclosure>
    )
}

export default MoreFilters