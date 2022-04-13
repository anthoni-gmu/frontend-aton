import React, { FunctionComponent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { check_coupon } from '../../redux/actions/coupon';

const CouponApply: FunctionComponent<{
    setCoupon: (value: string) => void;
    onChange: (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>) => void;
    coupon_code: string;
}> = ({ onChange,
    coupon_code, setCoupon
}) => {
        const dispatch = useDispatch();
        const coupon = useSelector((state: any) => state.Coupon.coupon)

        const applyCoupon = async (e: React.SyntheticEvent) => {
            e.preventDefault();
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                dispatch(check_coupon(coupon_code))
                setCoupon(coupon_code)
            }
        }

        return (
            <div className="mb-6 pb-6  mt-3 ">
                <div className="-mx-2 flex items-end justify-end">
                    <div className="flex-grow px-2 lg:max-w-xs">
                        <label className="text-gray-600 dark:text-cyan-200  font-semibold text-sm mb-2 ml-1">Cuopon de Descuento</label>
                        <div>
                            <input
                                className="w-full px-3 py-2 mt-2 bg-day-400 dark:text-day-100 border dark:bg-dark-100  border-gray-200 dark:border-cyan-600 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="XXXX"
                                type="text"
                                value={coupon_code}
                                name='coupon_code'
                                onChange={e => onChange(e)}
                            />
                        </div>
                    </div>
                    <div className="px-2">
                        <button
                            onClick={e => applyCoupon(e)}
                            className=" block w-full max-w-xs mx-auto dark:bg-cyan-600 bg-indigo-600 border border-transparent rounded-md shadow-sm py-1 px-4 text-base font-medium text-white hover:bg-indigo-700 dark:hover:bg-cyan-700 focus:outline-none  ">VALIDAR</button>
                    </div>
                </div>


                {
                    coupon !== null && coupon !== undefined && coupon.can_use &&
                    <div className="inline-block rounded-sm text-dark-200 mt-3 bg-green-400 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">
                        Coupon activado!
                    </div>
                }


            </div>
        )
    }

export default CouponApply