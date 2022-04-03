import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/LayoutDashboard'
import ProductCart from '../../components/product/ProductCart'

const wishlist = () => {

    const wishlist = useSelector((state: any) => state.Wishlist.items)
    return (
        <Layout title='Lista de Deseos| ATON' content='Lista de deseos de ATON'>
            <div>
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <span className="font-bold tracking-wider uppercase dark:text-violet-400 ">Lista de deseos</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Añade tus deseos al carrito</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-2' >
                {
                    wishlist &&
                    wishlist !== null &&
                    wishlist !== undefined &&
                    wishlist.map((item: any) => (
                        <div key={item.id}>
                            <ProductCart product={item.product} />
                        </div>
                    ))
                }
               
                </div>
            </div>
        </Layout>
    )
}

export default wishlist