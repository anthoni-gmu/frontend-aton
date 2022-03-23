import React from 'react'
import { useDispatch } from 'react-redux';
import Head from "next/head";

import Navbar from "../navigation/Navbar"
import Footer from "../navigation/Footer"
import Alert from "../notification/Alert";
import { Props } from '../../../types/type';

const Layout: React.FC<Props> = ({ title, content, children }) => {
    const dispatch = useDispatch();


    return (
        <>
        <Head>
          <title>{title}</title>
          <meta name='description' content={content} />
        </Head>
        <Navbar/>
        <main>{children}</main>
        <Alert/>
        <Footer/>
      </>
    )
}
Layout.defaultProps = {
    title: 'Surf',
    content: 'Surf'
}


export default Layout