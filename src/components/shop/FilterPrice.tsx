import { Disclosure } from "@headlessui/react"
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid"
import React, { FunctionComponent } from "react"
import { prices } from "../../helpers/Prices"
const FilterPrice: FunctionComponent<{
    price_range: string,
    onChange: (e:React.FormEvent<HTMLInputElement>) => void,

}> = ({ price_range, onChange }) => {
    const select = "text-day-600 "
    const noselect = "text-gray-900 dark:text-day-200"
    return (
        <Disclosure as="div" className="border-b border-gray-200 py-6">
            {({ open }) => (
                <>
                    <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="px-2  rounded-lg  w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-sofiapro-regular  text-gray-900 dark:text-day-100">Precios</span>
                            <span className="ml-6 flex items-center">
                                {open ? (
                                    <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pt-2">
                            <div className="grid md:grid-cols-2 bg-day-100 rounded-sm dark:bg-dark-700  p-3">
                                {
                                    prices && prices.map((price, index) => {
                                        return (
                                            <div key={index} className='form-check my-3'>
                                                <input
                                                    onChange={e => onChange(e)}
                                                    value={price.name}
                                                    name='price_range'
                                                    type='radio'
                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                />
                                                <label className={`ml-3 min-w-0 flex-1  font-sofiapro-light ${price.name === price_range ? select : noselect}  `} >{price.name}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </Disclosure.Panel>
                    </h3>
                </>
            )}
        </Disclosure>
    )
}

export default FilterPrice