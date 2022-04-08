import { SearchIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import ShopMovile from './ShopMovile';
import ShopHead from './ShopHead';
import { useDispatch, useSelector } from 'react-redux';
import { get_brands, get_categories, get_filtered_products, get_pages_products, products_all } from '../../redux/actions/product';
import DropFilter from './DropFilter';
import MoreFilters from './filter/MoreFilters';
import FilterPrice from './FilterPrice';
import ProductCart from '../product/ProductCart';
import { FormFilter } from '../../../types/interface';
const subCategories = [
    { name: 'Todos', href: '#' },
    { name: 'Lo Nuevo', href: '#' },
    { name: 'Más vendidos', href: '#' },
    { name: 'Más vistos', href: '#' },
]


const ShopComponent = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const dispatch = useDispatch();
    const navigationOn = 'bg-white rounded-md  hover:bg-blue-500  hover:text-white px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform'
    const navigationOff = 'bg-gray-200 cursor-not-allowed px-4 py-2 mx-1 text-gray-500 capitalize  rounded-md '

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined) {
            dispatch(get_categories());
            dispatch(products_all());
            dispatch(get_brands());
        }
    }, [dispatch]);

    const categories = useSelector((state: any) => state.Product.categories)
    const brands = useSelector((state: any) => state.Product.brands)
    const products_query = useSelector((state: any) => state.Product.products)
    const next = useSelector((state: any) => state.Product.next)
    const previous = useSelector((state: any) => state.Product.previous)
    const count = useSelector((state: any) => state.Product.count)

    const nextPage: any = async () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_pages_products(next))
        window.scrollTo(0, 0);
    }
    const previousPage: any = async () => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_pages_products(previous))
        window.scrollTo(0, 0);
    }


    const [formData, setFormData] = useState<FormFilter>({
        brandsform: [],
        categoriesform: [],
        price_range: 'Any',
        order: 'desc',
        sort_by: 'created'

    });
    const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>): void => setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_filtered_products(formData.brandsform, formData.categoriesform, formData.order, formData.sort_by, formData.price_range));
        setMobileFiltersOpen(false)
    };
    const clearForm = () => {
        formData.brandsform = []
        formData.categoriesform = []
        formData.order = 'created'
        formData.sort_by = 'desc'
        formData.price_range = 'Any'

        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(products_all());
    }

    return (
        <div className="bg-day-300 dark:bg-dark-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ShopHead title={"Categorias"} setMobileFiltersOpen={setMobileFiltersOpen} />
                <section className="pt-6 pb-24 dark:bg-dark-200 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 mx-4   ">
                        <div className="hidden lg:block  relative ">
                            <form onSubmit={e => onSubmit(e)}>
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="text-sm font-medium dark:text-white text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>
                                {
                                    categories && categories !== null && categories !== undefined && categories.map((item: any) => (

                                        <DropFilter  list={item.sub_categories} name={item.title} key={item.id} formdata={formData.categoriesform} />

                                    ))
                                }
                                {
                                    brands && brands !== null && brands !== undefined && (
                                        <DropFilter list={brands} name={"marcas"} formdata={formData.brandsform} />
                                    )
                                }

                                <MoreFilters sort_by={formData.sort_by} order={formData.order} onChange={onChange} />
                                <FilterPrice price_range={formData.price_range} onChange={onChange} />
                                <div className='flex space-x-2'>
                                    <button onClick={clearForm} className="flex ml-auto mt-3  text-day-600 bg-day-100 border-2 border-day-700 hover:bg-day-600 hover:text-day-100      dark:text-day-100 dark:bg-dark-200 dark:border-2 dark:border-day-700 dark:hover:bg-day-600 dark:hover:text-day-100 w-full h-10 items-center justify-around  ">
                                        <span>Limpiar</span>
                                        <TrashIcon className='w-6 h-6' />
                                    </button>
                                    <button type="submit" className="flex ml-auto mt-3  text-day-100 bg-day-600 border-2 border-day-600 hover:bg-day-700  dark:text-day-100 dark:bg-day-600 dark:border-2 dark:border-day-700 dark:hover:bg-day-700 dark:hover:text-day-100 w-full h-10 items-center justify-around  ">
                                        <span>Filtrar</span>
                                        <SearchIcon className='w-6 h-6' />
                                    </button>

                                </div>

                            </form>
                        </div>
                        <div className="lg:col-span-3 bg-day-100 dark:bg-dark-100">
                            {/* Replace with your content */}
                            <div className="rounded-lg h-full" >
                                <div className="m-3 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                    {products_query &&
                                        products_query !== null &&
                                        products_query !== undefined &&
                                        products_query.map((product: any) => (
                                            <ProductCart key={product.id} product={product} />
                                        ))}
                                </div>

                            </div>
                            <div className="flex justify-between">
                                <button className={`${previous !== null ? navigationOn : navigationOff}  `} onClick={e => previousPage(e)} >
                                    <div className="flex items-center -mx-1">
                                        <ChevronLeftIcon className="w-6 h-6 mx-1" />
                                        <span className="mx-1">
                                            Anterior
                                        </span>
                                    </div>
                                </button>



                                <button onClick={e => nextPage(e)} className={` ${next !== null ? navigationOn : navigationOff}  `}>
                                    <div className="flex items-center -mx-1">
                                        <span className="mx-1">
                                            Siguiente
                                        </span>

                                        <ChevronRightIcon className="w-6 h-6 mx-1" />
                                    </div>
                                </button>
                            </div>

                            {/* /End replace */}
                        </div>

                    </div>
                </section>
            </div>
            <ShopMovile
                categories={categories}
                brands={brands}
                mobileFiltersOpen={mobileFiltersOpen}
                setMobileFiltersOpen={setMobileFiltersOpen}
                onSubmit={onSubmit}
                onChange={onChange}
                brandsform={formData.brandsform}
                categoriesform={formData.categoriesform}
                price_range={formData.price_range}
                sort_by={formData.sort_by}
                order={formData.order}
            />
        </div >
    )
}

export default ShopComponent