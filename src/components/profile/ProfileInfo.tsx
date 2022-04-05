import { PencilAltIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { IProfile, IUser } from '../../../types/interface';

const ProfileInfo: FunctionComponent<{
    profile: IProfile;
    user: IUser;
    ViewInfo: () => void;
}> = ({
    profile: {
        id,
        enterprise,
        photo,
        city,
        address_line_1,
        address_line_2,
        district,
        zipcode,
        phone,
    },
    user: {
        get_full_name
    },
    ViewInfo
}) => {

        const table = "bg-gray-50 dark:bg-dark-500 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 my-2 rounded-xl hover:dark:bg-dark-700 hover:bg-day-300"
        return (
            <div className="bg-day-200 dark:bg-dark-100 overflow-hidden rounded-lg my-4">
                <div className="p-4 bg-day-100 dark:bg-dark-200  rounded-lg lg:flex lg:justify-between ">
                    <div className="max-w-lg mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <div className="block relative">
                                <Image alt={get_full_name}
                                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo}`}
                                    className="mx-auto object-cover rounded-full h-16 w-16 "
                                    layout="fixed"
                                    height="85"
                                    width="85"
                                />
                            </div>
                            <h1 className="text-gray-600 dark:text-green-400 text-xl font-semibold uppercase">
                                {get_full_name}
                            </h1>
                        </div>
                    </div>
                    <div className="w-full px-4 pb-4 mt-3 ml-auto text-gray-500 md:w-1/5 ">

                        <button onClick={ViewInfo} className="py-2 max-w-xs  px-4 flex justify-center items-center  space-x-2 bg-indigo-600 hover:bg-indigo-700   text-white w-full  text-base font-semibold shadow-md  rounded-lg ">
                            <PencilAltIcon className="w-6 h-6" /> <span>Editar</span>
                        </button>
                    </div>
                </div>
                <div className=" ">
                    <dl>
                        <div className={table}>
                            <dt className="text-lg font-medium text-gray-500 dark:text-gray-100">Dirección 1</dt>
                            <dd className="mt-1 text-lg text-gray-900 sm:mt-0 dark:text-gray-100 sm:col-span-2">{address_line_1}</dd>
                        </div>
                        <div className={table}>
                            <dt className="text-lg dark:text-gray-100 font-medium text-gray-500">Dirección 2</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100 text-gray-900 sm:mt-0 sm:col-span-2">{address_line_2}</dd>
                        </div>
                        <div className={table}>
                            <dt className="text-lg dark:text-gray-100 font-medium text-gray-500 capitalize">Distrito</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100 text-gray-900 sm:mt-0 sm:col-span-2">{district}</dd>
                        </div>

                        <div className={table}>
                            <dt className="text-lg font-medium dark:text-gray-100 text-gray-500">Número Postal</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100  text-gray-900 sm:mt-0 sm:col-span-2">{zipcode}</dd>
                        </div>
                        <div className={table}>
                            <dt className="text-lg font-medium dark:text-gray-100 text-gray-500"> Teléfono</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100 text-gray-900 sm:mt-0 sm:col-span-2">{phone}</dd>
                        </div>
                        <div className={table}>
                            <dt className="text-lg font-medium dark:text-gray-100 text-gray-500">Ciudad</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100  text-gray-900 sm:mt-0 sm:col-span-2">{city}</dd>
                        </div>
                        <div className={table}>
                            <dt className="text-lg font-medium dark:text-gray-100 text-gray-500"> Empresa</dt>
                            <dd className="mt-1 text-lg dark:text-gray-100 text-gray-900 sm:mt-0 sm:col-span-2 uppercase">{enterprise}</dd>
                        </div>
                    </dl>
                </div>


            </div>
        )
    }

export default ProfileInfo