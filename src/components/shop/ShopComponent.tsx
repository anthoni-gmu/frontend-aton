import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, XIcon } from '@heroicons/react/outline'
import React, { Fragment, useEffect, useState } from 'react'
import { ViewGridIcon } from '@heroicons/react/solid';
import ShopMovile from './ShopMovile';
import ShopHead from './ShopHead';
import { useDispatch, useSelector } from 'react-redux';
import { get_brands, get_categories } from '../../redux/actions/product';
import DropFilter from './DropFilter';
const subCategories = [
    { name: 'Todos', href: '#' },
    { name: 'Lo Nuevo', href: '#' },
    { name: 'Más vendidos', href: '#' },
    { name: 'Más vistos', href: '#' },
]
const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]
function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
const ShopComponent = () => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        if (dispatch && dispatch !== null && dispatch !== undefined)
            dispatch(get_categories());
            dispatch(get_brands());
    }, [dispatch]);

    const categories= useSelector((state: any) => state.Product.categories)
    const brands= useSelector((state: any) => state.Product.brands)
    
    return (
        <div className="bg-day-300 dark:bg-dark-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ShopHead title={"Categorias"} setMobileFiltersOpen={setMobileFiltersOpen} />
                <section className="pt-6 pb-24 dark:bg-dark-200 ">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 mx-4 ">

                        <form className="hidden lg:block">
                            <h3 className="sr-only">Categories</h3>
                            <ul role="list" className="text-sm font-medium dark:text-white text-gray-900 space-y-4 pb-6 border-b border-gray-200">
                                {subCategories.map((category) => (
                                    <li key={category.name}>
                                        <a href={category.href}>{category.name}</a>
                                    </li>
                                ))}
                            </ul>
                            {
                                categories&&categories!==null && categories!==undefined &&(
                                    <DropFilter list={categories} name={"categorias"} />
                                )
                            }
                            {
                                brands&&brands!==null && brands!==undefined &&(
                                    <DropFilter list={brands} name={"marcas"} />
                                )
                            }
                            
                        </form>

                    </div>
                </section>
            </div>
            <ShopMovile mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />
        </div >
    )
}

export default ShopComponent