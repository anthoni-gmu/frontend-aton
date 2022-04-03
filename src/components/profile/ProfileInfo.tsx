import { PencilAltIcon } from '@heroicons/react/outline';
import React, { FunctionComponent } from 'react'
import { IProfile, IUser } from '../../../types/interface';

const ProfileInfo: FunctionComponent<{
    profile: IProfile;
    user: IUser;
    ViewInfo: () => void;
}> = ({
    profile: {
        id,
        enterprice,
        photo,
        city,
        address_line_1,
        address_line_2,
        district,
        zipcode,
        phone,
    },
    user:{
        get_full_name
    },
    ViewInfo
}) => {
        return (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg my-4">
                <div className="p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5">
                    <div className="max-w-sm mx-auto md:w-full md:mx-0">
                        <div className="inline-flex items-center space-x-4">
                            <div className="block relative">
                                <img alt="profil" src="https://www.tailwind-kit.com/images/person/1.jpg" className="mx-auto object-cover rounded-full h-16 w-16 " />
                            </div>
                            <h1 className="text-gray-600">
                                {get_full_name}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200">
                    <dl>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Dirección 1</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{address_line_1}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Dirección 2</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{address_line_2}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Ciudad</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{city}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Provincia </dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{district}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Número Postal</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{zipcode}</dd>
                        </div>
                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500"> Teléfono</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{phone}</dd>
                        </div>
                        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-500">Pais</dt>
                            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{city}</dd>
                        </div>

                    </dl>
                </div>
                <div className="w-full px-4 pb-4 mt-3 ml-auto text-gray-500 md:w-1/5 ">

                    <button onClick={ViewInfo} className="py-2 px-4 flex justify-center space-x-2 bg-indigo-600 hover:bg-indigo-700   text-white w-full  text-base font-semibold shadow-md  rounded-lg ">
                        <PencilAltIcon className="w-6 h-6" /> <span>Editar</span>
                    </button>

                </div>

            </div>
        )
    }

export default ProfileInfo