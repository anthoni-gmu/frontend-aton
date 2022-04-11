import React from 'react'

const CouponApply = () => {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200 mt-3 ">
    <div className="-mx-2 flex items-end justify-end">
        <div className="flex-grow px-2 lg:max-w-xs">
            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Cuopon de Descuento</label>
            <div>
                <input
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="XXXXXX"
                    type="text"
                    value={"coupon_code"}
                    name='coupon_code'
                />
            </div>
        </div>
        <div className="px-2">
            <button  className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">VALIDAR</button>
        </div>
    </div>


    {/* {
        coupon !== null && coupon !== undefined && coupon.can_use &&
        <div className="inline-block rounded-sm text-white mt-3 bg-green-400 duration-300 text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 opacity-90 hover:opacity-100">
            Coupon activado!
        </div>
    } */}


</div>
  )
}

export default CouponApply