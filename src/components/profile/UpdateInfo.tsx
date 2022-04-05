import { SaveIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React, { FunctionComponent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IProfile, IUser } from '../../../types/interface'
import { cities } from '../../helpers/cities'
import { update_account } from '../../redux/actions/profile'
const UpdateInfo: FunctionComponent<{
    user: IUser,
    profile: IProfile,
    loading: boolean,
    setLoading: (value: boolean) => void,
    ViewInfo: () => void
}> = ({
    user: {
        get_full_name
    },
    profile: {
        photo,
        address_line_1,
        address_line_2,
        district,
        zipcode,
        phone,
        city,
        enterprise
    },
    setLoading,
    loading,
    ViewInfo
}) => {
        const dispatch = useDispatch();

        const [formData, setFormData] = useState({
            enterprise_form: enterprise,
            city_form: city,
            address_line_1_form: address_line_1,
            address_line_2_form: address_line_2,
            district_form: district,
            zipcode_form: zipcode,
            phone_form: phone,
        });

        const {
            enterprise_form,
            city_form,
            address_line_1_form,
            address_line_2_form,
            district_form,
            zipcode_form,
            phone_form
        } = formData;
        const onChange = (e: React.FormEvent<HTMLInputElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });

        const onSubmit = (e: React.SyntheticEvent) => {
            e.preventDefault();
            setLoading(true)
            if (dispatch && dispatch !== null && dispatch !== undefined) {
                dispatch(update_account(
                    enterprise_form,
                    city_form,
                    address_line_1_form,
                    address_line_2_form,
                    district_form,
                    zipcode_form,
                    phone_form
                ))

            }
            setLoading(false)
            ViewInfo()
            window.scrollTo(0, 0);
        };

        const table = "bg-gray-50 dark:bg-dark-700 px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 my-2 rounded-xl hover:dark:bg-dark-500 hover:bg-day-300"


        return (
            <form onSubmit={e => onSubmit(e)} className="">

                <div className="bg-day-200 dark:bg-dark-100 max-w-screen-2xl overflow-hidden sm:rounded-lg">
                    <div className="p-4 bg-day-100 dark:bg-dark-200   rounded-lg  lg:flex lg:justify-between ">
                        <div className="max-w-lg mx-auto md:w-full md:mx-0">
                            <div className="inline-flex items-center space-x-4">
                                <div className="block relative">
                                    <Image
                                        alt={get_full_name}
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
                        <div className="w-full px-4 pb-4 mt-3 ml-auto text-gray-500 md:w-1/5">
                            <button type="submit" className="py-2 max-w-xs  px-4 flex justify-center items-center  space-x-2 bg-indigo-600 hover:bg-indigo-700   text-white w-full  text-base font-semibold shadow-md  rounded-lg">
                                <SaveIcon className="w-6 h-6" /> <span>Guardar</span>
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <dl>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center ">
                                    Dirección 1
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='address_line_1_form'
                                        className="rounded-lg border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={address_line_1_form}
                                        placeholder={address_line_1}
                                    />
                                </dd>

                            </div>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center">
                                    Dirección 2
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='address_line_2_form'
                                        className="rounded-lg border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={address_line_2_form}
                                        placeholder={address_line_2}
                                    />
                                </dd>
                            </div>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center">
                                    Distrito
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='district_form'
                                        className="rounded-lg border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={district_form}
                                        placeholder={district}
                                    />
                                </dd>

                            </div>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center">
                                    Número Postal
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='zipcode_form'
                                        className="rounded-lg border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={zipcode_form}
                                        placeholder={zipcode}
                                    />
                                </dd>
                            </div>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center">
                                    Teléfono
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='phone_form'
                                        className="rounded-lg border-transparent flex-1 appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={phone_form}
                                        placeholder={phone}
                                    />
                                </dd>

                            </div>


                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500 dark:text-gray-100 flex items-center">
                                    Provincia
                                </dt>

                                <select
                                    className="block w-52 text-gray-700 dark:text-gray-100 py-2 px-3 border text-lg border-gray-300 bg-white dark:bg-dark-500 rounded-md shadow-sm "
                                    id='city_form'
                                    name='city_form'
                                    onChange={(e: any) => onChange(e)}
                                >
                                    <option className='bg-white dark:bg-dark-500' value={city_form}>{city}
                                    </option>
                                    {
                                        cities && cities.map((country, index) => (
                                            <option className='dark:bg-dark-500 ' key={index} value={country.name}>{country.name}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className={table}>
                                <dt className="text-lg font-medium text-gray-500  dark:text-gray-100 flex items-center">
                                    Empresa
                                </dt>
                                <dd className="mt-1 text-lg text-gray-900  sm:mt-0 sm:col-span-2">
                                    <input
                                        type="text"
                                        name='enterprise_form'
                                        className="rounded-lg border-transparent flex-1 uppercase appearance-none border  w-full py-2 px-4 bg-white dark:bg-dark-500 text-gray-700 dark:text-gray-200 placeholder-gray-400 shadow-sm text-lg focus:outline-none  focus:border-transparent"
                                        onChange={e => onChange(e)}
                                        value={enterprise_form}
                                        placeholder={enterprise}
                                    />
                                </dd>

                            </div>
                        </dl>
                    </div>

                </div>
            </form>
        )
    }

export default UpdateInfo