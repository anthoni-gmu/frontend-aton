import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FunctionComponent } from 'react'
import { INavbarDashboard } from '../../../types/interface'

const ListNavDashboard: FunctionComponent<{ list: INavbarDashboard }> = ({ list: { name, to, HeartIcon } }) => {
    const {pathname} = useRouter()
    const noSelect = ' dark:text-gray-400  '
    const select = 'dark:bg-dark-200 shadow-inner bg-day-200 text-day-700 dark:text-gray-100'

    return (
        <Link href={to}>
            <a className={`  flex my-6 space-x-5 py-3 px-2 rounded-xl hover:dark:bg-dark-200 hover:bg-day-200  transition-colors duration-200  hover:dark:text-gray-100 hover:text-day-600   ${pathname === to ? select : noSelect}`} >
                <HeartIcon className='h-7 w-7 ' />
                <span className=" text-lg  font-normal ">
                    {name}
                </span>
                <span className="flex-grow text-right">
                </span>
            </a>
        </Link>
    )
}

export default ListNavDashboard