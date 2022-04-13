import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import React, { FunctionComponent } from 'react'

const PaymentAmout: FunctionComponent<{
    total_amount: string
    original_price: string
    total_after_coupon: string
    estimated_tax: string
    shipping_cost: string
}> = ({
    total_amount,
    original_price,
    total_after_coupon,
    estimated_tax,
    shipping_cost,
}) => {
        return (
            <div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600 dark:text-day-100">
                        <span>Precio base</span>
                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Learn more about how tax is calculated</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-day-100">{original_price}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600 dark:text-day-100">
                        <span>Costo de envio</span>
                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Learn more about how tax is calculated</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-day-100">{shipping_cost!=='0.00'?shipping_cost:"Seleccione un servicio"}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600 dark:text-day-100">
                        <span>Precio previo al coupon</span>
                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Learn more about how tax is calculated</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-day-100">{total_after_coupon!=='0.00'?total_after_coupon:"Sin coupon"}</dd>
                </div>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex text-sm text-gray-600 dark:text-day-100">
                        <span>IGV</span>
                        <a href="#" className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Learn more about how tax is calculated</span>
                            <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
                        </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900 dark:text-day-100">S/{estimated_tax}</dd>
                </div>
               
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900 dark:text-day-100">Order total</dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-day-100">{total_amount}</dd>
                </div>
            </div>
        )
    }

export default PaymentAmout