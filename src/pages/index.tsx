import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { products_home } from '../redux/actions/product';
import ProductCart from '../components/product/ProductCart';
import Themes from '../components/navigation/Themes';
const Home: NextPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(products_home());
  }, [dispatch]);
  const products = useSelector((state: any) => state.Product.products)

  return (
    <Layout title='Home' content="test">
      <div className="relative  bg-gray-50 dark:bg-dark-300 overflow-hidden">
        <div className="max-w-7xl container mx-auto px-6 flex relative py-16 lg:space-x-20 ">
          <div className="sm:w-1/3 lg:w-3/12 flex flex-col relative z-20 ">

            <span className="w-20 h-2 bg-dark-700 dark:bg-day-700 mb-12">
            </span>
            <div className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
              <div><div className='dark:hidden block'>
                <Image
                  className="h-8  sm:h-10 dark:hidden"
                  src={"/assets/lightLogo.png"}
                  height="40px"
                  width="120px"
                  layout="responsive"
                  alt='logo aton'
                  quality={100}
                />
              </div>
                <div className='dark:block hidden'>
                  <Image
                    className="h-8 sm:h-10"
                    src={"/assets/darkLogo.png"}
                    height="45px"
                    width="128px"
                    layout="responsive"
                    alt='logo aton'
                    quality={100}
                  />
                </div></div>
            </div>
            <p className="text-sm sm:text-base text-dark-900 dark:text-day-100">
              Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="md:flex mt-8 ">
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-day-600 border-2 border-transparent text-white text-md mr-4 hover:bg-day-700">
               Ver Productos
              </a>
              <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-day-600 text-day-700 dark:text-white hover:bg-day-700 hover:text-white text-md">
                Registrate
              </a>
            </div>
          </div>
          <div className="hidden sm:block sm:w-2/3 lg:w-8/12 relative">
            <div className='max-w-xs md:max-w-sm m-auto' >
              <Image
                className="h-8 w-auto sm:h-10"
                src={"/assets/controlplomo.jpg"}
                layout="fill"
                alt='logo aton'
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
