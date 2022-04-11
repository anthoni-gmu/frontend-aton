import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICartItem } from '../../types/interface'
import CartItem from '../components/cart/CartItem'
import ConfirmationOrden from '../components/checkout/ConfirmationOrden'
import FormDataCheckout from '../components/checkout/FormDataCheckout'
import ShippingCost from '../components/checkout/ShippingCost'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../redux/actions/shipping'

const checkout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_shipping_options());

    }, [dispatch]);


    const [step, setStep] = useState(2);




    const nextStep: any = async () => {
        setStep(step + 1)
    }
    const previusStep: any = async () => {
        setStep(step - 1)
    }

    const amout = useSelector((state: any) => state.Cart.amount)
    const items = useSelector((state: any) => state.Cart.items)
    const total_items = useSelector((state: any) => state.Cart.total_items)
    const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated)


    const showItems = () => {

        return (
            <div>
                {
                    items &&
                    items !== null &&
                    items !== undefined &&
                    items.length !== 0 &&
                    items.map((item: ICartItem, index: number) => {
                        return (
                            <div key={index}>
                                <CartItem
                                    item={item}
                                />
                            </div>
                        );
                    })
                }
            </div>
        )
    }
    const showSteps = () => {

        return (
            <ul className="steps w-full text-dark-700 my-2">

            </ul>
        )
    }

    return (
        <Layout title="Pedido | aton" content='pasarela de pagos aton'>
            <div className='bg-day-300 dark:bg-dark-300' >
                <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <ul className="steps w-full text-dark-700 my-2">
                        <li className={`step ${step >= 1 && "step-info"}`}>
                            <span className='dark:text-cyan-600 font-semibold'>
                                Carrito
                            </span>
                        </li>
                        <li className={`step ${step >= 2 && "step-info"}`}>
                            <span className='dark:text-cyan-600 font-semibold'>
                                Coste de envio
                            </span>
                        </li>
                        <li className={`step ${step >= 3 && "step-info"}`}>
                            <span className='dark:text-cyan-600 font-semibold'>
                                Datos de envio
                            </span>
                        </li>
                        <li className={`step ${step >= 4 && "step-info"}`}>
                            <span className='dark:text-cyan-600 font-semibold'>
                                Confirmar Compra
                            </span></li>
                    </ul>


                    <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            {total_items > 0 ? showItems() : <>No products</>}
                        </section>

                        {
                            step === 2 && (
                                <ShippingCost nextStep={nextStep}
                                    sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                                />
                            )
                        }
                        {
                            step === 3 && (
                                <FormDataCheckout nextStep={nextStep}
                                    sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                                />
                            )
                        }
                        {
                            step === 4 && (
                                <ConfirmationOrden nextStep={nextStep}
                                    sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                                />
                            )
                        }





                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default checkout