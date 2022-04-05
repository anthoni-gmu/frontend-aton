import { useTheme } from 'next-themes';
import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Themes = () => {

    const { theme, setTheme } = useTheme();
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }



    return (
        <>
            {
                theme === 'dark' ? <button onClick={changeTheme} className='flex justify-center rounded-full p-1 dark:text-white text-black bg-day-400 hover:bg-day-500 dark:bg-dark-200  border-indigo-500 hover:dark:bg-dark-100'>

                    <SunIcon className=' text-yellow-400 h-6 w-6' />
                </button> : <button onClick={changeTheme} className='flex justify-center rounded-full p-1 dark:text-white text-black bg-day-400 hover:bg-day-500 dark:bg-dark-200  border-indigo-500 hover:dark:bg-dark-100'>

                    <MoonIcon className='h-6 w-6 text-purple-800' />
                </button>
            }


        </>
    )
}

export default Themes