import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICartItem } from '../../types/interface'
import CartItem from '../components/cart/CartItem'
import OrderSumary from '../components/cart/OrderSumary'
import ShippingCost from '../components/checkout/ShippingCost'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../redux/actions/shipping'

const checkout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_shipping_options());

    }, [dispatch]);
    const [step, setStep] = useState<string>("shipping cost")

    const nextStep = () => {
        setStep("form data")
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

    return (
        <Layout title="Pedido | aton" content='pasarela de pagos aton'>
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <ul className="steps w-full">
                    <li className="step step-primary">Register</li>
                    <li className="step step-primary">Choose plan</li>
                    <li className="step">Purchase</li>
                    <li className="step">Receive Product</li>
                </ul>
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Carrito de Compras </h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
                            {total_items > 0 ? showItems() : <>No products</>}
                        </div>
                    </section>

                    {
                        step === "shipping cost" ? <ShippingCost nextStep={nextStep}
                            sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                        /> : <OrderSumary
                            sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                        />
                    }




                </div>
            </div>
        </Layout>
    )
}

export default checkout