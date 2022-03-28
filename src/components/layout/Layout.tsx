import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Head from "next/head";

import Navbar from "../navigation/Navbar"
import Footer from "../navigation/Footer"
import Alert from "../notification/Alert";
import { Props } from '../../../types/type';

import { check_authenticated, load_user, refresh } from '../../redux/actions/auth';
import {
  get_items,
} from '../../redux/actions/cart';


const Layout: React.FC<Props> = ({ title, content, children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => state.Auth.isAuthenticated)

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(check_authenticated());
      dispatch(load_user());
      dispatch(refresh());
      dispatch(get_items());

    }

  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={content} />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Alert />
      <Footer />
    </>
  )
}
Layout.defaultProps = {
  title: 'Surf',
  content: 'Surf'
}


export default Layout