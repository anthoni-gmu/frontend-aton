import { Disclosure } from '@headlessui/react'
import { MinusSmIcon } from '@heroicons/react/outline'
import React, { FunctionComponent, useState } from 'react'
import { PlusSmIcon } from '@heroicons/react/solid';
import ItemDropFilter from './ItemDropFilter';

const DropFilter: FunctionComponent<{
    list: any
    name: string
    formdata: number[]
}> = ({ list, name, formdata }) => {

    return (
        <Disclosure as="div" key={name} className="border-b border-gray-200 py-6">
            {({ open, close }) => (
                <>
                    <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-1 w-full flex items-center justify-between text-sm text-gray-400  hover:text-gray-500 focus:outline-none">
                            <span className="font-medium text-base  text-gray-900 dark:text-day-100 capitalize">{name}</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6"   >
                        <div className="space-y-4 bg-day-100 rounded-sm dark:bg-dark-700  p-3">
                            {list.map((option: any, index: any) => (
                                <div key={index}>
                                    <ItemDropFilter option={option} formdata={formdata} />
                                </div>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default DropFilter