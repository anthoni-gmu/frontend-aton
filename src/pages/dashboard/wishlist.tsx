import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/layout/LayoutDashboard'
import ProductCart from '../../components/product/ProductCart'

const wishlist = () => {

    const wishlist = useSelector((state: any) => state.Wishlist.items)
    console.log(wishlist)
    return (
        <Layout title='Lista de Deseos| ATON' content='Lista de deseos de ATON'>
            <div>
                <div className="max-w-2xl mx-auto mb-12 text-center">
                    <span className="font-bold tracking-wider uppercase dark:text-violet-400 ">Lista de deseos</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Añade tus deseos al carrito</h2>
                </div>
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
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  gap-2' >
                    <div className="max-w-xs rounded-md shadow-md dark:bg-coolGray-900 dark:text-coolGray-100 m-3">
                        <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500" />
                        <div className="flex flex-col justify-between p-6 space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                <p className="dark:text-coolGray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                            </div>
                            <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-coolGray-900">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default wishlist