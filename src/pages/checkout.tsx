import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ICartItem, IFormCheckout } from '../../types/interface'
import CartItem from '../components/cart/CartItem'
import ConfirmationOrden from '../components/checkout/ConfirmationOrden'
import FormDataCheckout from '../components/checkout/FormDataCheckout'
import ShippingCost from '../components/checkout/ShippingCost'
import Layout from '../components/layout/Layout'
import { get_shipping_options } from '../redux/actions/shipping'
import { get_payment_total } from '../redux/actions/payment'
import PaymentAmout from '../components/checkout/PaymentAmout'
import { useRouter } from 'next/router'

const checkout = () => {
    const dispatch = useDispatch();
    const { push } = useRouter();

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
        console.log()

    }
    if (step === 1 && typeof window !== 'undefined') {
        push('/cart/cartinfo')
    }
    const amout = useSelector((state: any) => state.Cart.amount)
    const items = useSelector((state: any) => state.Cart.items)
    const total_items = useSelector((state: any) => state.Cart.total_items)
    const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated)
    const total_amount: string = useSelector((state: any) => state.Payment.total_amount)
    const original_price: string = useSelector((state: any) => state.Payment.original_price)
    const total_after_coupon: string = useSelector((state: any) => state.Payment.total_after_coupon)
    const estimated_tax: string = useSelector((state: any) => state.Payment.estimated_tax)
    const shipping_cost: string = useSelector((state: any) => state.Payment.shipping_cost)

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
    const [formData, setFormData] = useState<IFormCheckout>({
        full_name: '',
        address_line_1: '',
        address_line_2: '',
        city: '',
        district: 'string',
        zipcode: 'string',
        phone: 'string',
        coupon_code: '',
        shipping_id: 0,
    });
    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("good")
    };
    const [codeCoupon, setCoupon] = useState('')

    useEffect(() => {
        dispatch(get_payment_total(formData.shipping_id, codeCoupon));
    }, [formData.shipping_id, codeCoupon]);

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
                        <section
                            aria-labelledby="summary-heading"
                            className="mt-16 bg-gray-50 dark:bg-dark-500 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
                        >
                            {
                                step === 2 && (
                                    <ShippingCost
                                        setCoupon={setCoupon}
                                        nextStep={nextStep}
                                        onChange={onChange}
                                        onSubmit={onSubmit}
                                        sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
                                        coupon_code={formData.coupon_code}
                                        shipping_id={formData.shipping_id}
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


                            <PaymentAmout
                                total_amount={total_amount}
                                original_price={original_price}
                                total_after_coupon={total_after_coupon}
                                estimated_tax={estimated_tax}
                                shipping_cost={shipping_cost}
                            />
                            <div className='mt-5'>
                                <button onClick={previusStep} className='bg-day-600  hover:bg-day-700 px-3 py-1 rounded-sm text-day-100'>
                                    <span  >Atras</span>
                                </button>
                            </div>

                        </section>


                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default checkout