import React from 'react'
import Layout from '../../components/layout/Layout'

import OrderSumary from '../../components/cart/OrderSumary'
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/cart/CartItem';
import { ICartItem } from '../../../types/interface';

const cartinfo = () => {
    const dispatch = useDispatch();

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
              items.map((item:ICartItem, index:number) => {
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
        <Layout title='Carrito | ATON' content="carrito de compras de ATON">
            <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
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

            {/* Order summary */}
            <OrderSumary
             sumary={{"amount":amout,"isAuthenticated":isAuthenticated}}
            />


          </div>
        </div>
        </Layout>
    )
}

export default cartinfo