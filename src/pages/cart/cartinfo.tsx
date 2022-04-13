import React from 'react'
import Layout from '../../components/layout/Layout'

import OrderSumary from '../../components/cart/OrderSumary'
import { useSelector } from 'react-redux';
import CartItem from '../../components/cart/CartItem';
import { ICartItem } from '../../../types/interface';
const cartinfo = () => {
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
    <Layout title='Carrito | ATON' content="carrito de compras de ATON">
      <div className='bg-day-300 dark:bg-dark-300' >

        <div className="max-w-2xl mx-auto pt-4 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

          <ul className="steps w-full text-dark-700 my-2">
            <li className="step step-info">Carrito</li>
            <li className="step  ">Coste de envio</li>
            <li className="step ">Datos de envio</li>
            <li className="step">Confirmar Compra</li>
          </ul>

          <div className="mt-8 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              {total_items > 0 ? showItems() : <>No products</>}
            </section>

            <OrderSumary
              sumary={{ "amount": amout, "isAuthenticated": isAuthenticated }}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default cartinfo