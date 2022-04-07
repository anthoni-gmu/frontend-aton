import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { products_home } from '../redux/actions/product';
import ProductCart from '../components/product/ProductCart';
import Themes from '../components/navigation/Themes';

import { useState } from 'react'
import { Tab } from '@headlessui/react'
function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
const Home: NextPage = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(products_home());
  }, [dispatch]);
  const products = useSelector((state: any) => state.Product.products)
  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
  return (
    <Layout title='Home' content="test">
      <div className="relative  bg-gray-50 dark:bg-dark-300 overflow-hidden">
        <div className="max-w-7xl container mx-auto px-6 flex   py-16 lg:space-x-20 ">

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
            <p className="text-sm sm:text-base text-dark-900 dark:text-day-100 ">
              Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
            </p>
            <div className="flex lg:flex-row  mt-8 flex-col space-y-2 mx-3 lg:space-y-0 lg:mx-0  ">
              <a href="#" className="uppercase py-2 px-2 rounded-lg bg-day-600 border-2 border-transparent text-white text-md mr-4 hover:bg-day-700">
                Ver Productos
              </a>
              <a href="#" className="uppercase py-2 px-2 rounded-lg bg-transparent border-2 border-day-600 text-day-700 dark:text-white hover:bg-day-700 hover:text-white text-md">
                Registrate
              </a>
            </div>
          </div>
          <div className=" sm:block sm:w-2/3 lg:w-8/12 relative  z-20">
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

        <div className='max-w-7xl mx-auto px-4 pt-3 pb-2 sm:px-6  lg:px-8 md:justify-start '>
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                      'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'bg-white rounded-xl p-3',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative p-3 rounded-md hover:bg-coolGray-100"
                      >
                        <h3 className="text-sm font-medium leading-5">
                          {post.title}
                        </h3>

                        <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                          <li>{post.date}</li>
                          <li>&middot;</li>
                          <li>{post.commentCount} comments</li>
                          <li>&middot;</li>
                          <li>{post.shareCount} shares</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Layout>
  )
}

export default Home
