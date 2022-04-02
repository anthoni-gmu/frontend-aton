import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { INavbarDashboard } from '../../../types/interface'

const ListNavDashboard: FunctionComponent<{ list: INavbarDashboard }> = ({ list: { name, to, HeartIcon } }) => {
    const router = useRouter()
    const noSelect = ' hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg '
    const noSelectIcon = 'h-6 w-6 mr-4 text-gray-700 hover:text-indigo-600 transition duration-200 '
    const select = 'hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-800 dark:text-gray-100 rounded-lg bg-gray-100 dark:bg-gray-600'
    const selectIcon = 'h-6 w-6 mr-4 text-white'

    return (
        <Link  href={to}>
        <a className={router.pathname === to ? select : noSelect} >
            <HeartIcon className='h-10 w-10' />
            <span className=" text-lg font-normal">
                {name}
            </span>
            <span className="flex-grow text-right">
            </span>
        </a>
        </Link>
    )
}

export default ListNavDashboard