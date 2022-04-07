import React from 'react'
import Layout from '../../components/layout/Layout'
import ShopComponent from '../../components/shop/ShopComponent'

const categories = () => {
    return (
        <Layout title='Categorias | Aton' content='categorias principales de aton'>
            <ShopComponent />
        </Layout>
    )
}

export default categories