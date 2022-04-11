import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React, { FunctionComponent } from 'react'
import { useSelector } from 'react-redux';
import { IOrdenSumary } from '../../../types/interface';
import CouponApply from './CouponApply';

const ShippingCost: FunctionComponent<{
    sumary: IOrdenSumary;
    nextStep: () => void;
    onSubmit: (e: React.SyntheticEvent) => void;
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    coupon_code: string;
    shipping_id: number;

}> = ({
    sumary: {
        amount,
        isAuthenticated,
    },
    nextStep,
    onChange,
    coupon_code,
    shipping_id
}) => {
        const shipping = useSelector((state: any) => state.Shipping.shipping)

        const showButton = () => {
            if (isAuthenticated) {
                return (
                    <div>
                        <div className="mt-6">
                            <button
                                onClick={nextStep}
                                className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                            >
                                Checkout
                            </button>
                        </div>

                    </div>
                )
            } else {
                return (

                    <Link href='/login' >
                        <button
                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                            Login
                        </button>
                    </Link>
                )


            }
        }

        return (
            <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 dark:bg-dark-500 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
            >

                <>
                    <h2 id="summary-heading" className="text-lg font-medium text-gray-900 dark:text-day-100">
                        Coste de Envio
                    </h2>

                    <dl className="mt-6 space-y-4">
                        <div>
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1 dark:text-cyan-200">Servicio de Entrega</label>

                            {shipping && shipping !== null && shipping !== undefined &&
                                shipping.map((shipping_option: any, index: any) => (
                                    <div className="mt-2" key={index}>
                                        <div className="flex items-center justify-between w-full bg-day-200 dark:bg-dark-200 dark:border-cyan-600 rounded-md border-2  p-4 focus:outline-none">
                                            <label className="flex items-center">
                                                <input
                                                    type="radio"
                                                    className="form-radio h-5 w-5  radio dark:checked:bg-cyan-600 checked:bg-day-100"

                                                    value={shipping_option.id}
                                                    name='shipping_id'
                                                    required
                                                />

                                                <span className="ml-2 text-sm text-gray-700 dark:text-day-100">{shipping_option.name} ({shipping_option.time_to_delivery})</span>
                                            </label>

                                            <span className="text-gray-600 text-sm dark:text-day-100">${shipping_option.price}</span>

                                        </div>
                                    </div>
                                ))
                            }
                            <CouponApply onChange={onChange}
                                coupon_code={coupon_code} />

                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="flex text-sm text-gray-600 dark:text-day-100">
                                <span>Tax estimate</span>
                                <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                                    <span className="sr-only">Learn more about how tax is calculated</span>
                                    <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                                </a>
                            </dt>
                            <dd className="text-sm font-medium text-gray-900 dark:text-day-100">$8.32</dd>
                        </div>
                        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                            <dt className="text-base font-medium text-gray-900 dark:text-day-100">Order total</dt>
                            <dd className="text-base font-medium text-gray-900 dark:text-day-100">${amount.toFixed(2)}</dd>
                        </div>
                    </dl>
                </>

                {showButton()}

            </section>
        )
    }

export default ShippingCost