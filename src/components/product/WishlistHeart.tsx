import { HeartIcon } from '@heroicons/react/solid';
import React, { FunctionComponent } from 'react'

const WishlistHeart: FunctionComponent<{
    id: number,
    wishlist: string[],
    addToWishlist: () => void,

}> = ({ id, wishlist, addToWishlist }) => {
    const renderWishlistHeart = () => {
        let selected = false;

        if (
            wishlist &&
            wishlist !== null &&
            wishlist !== undefined
        ) {
            wishlist.map((item: any) => {
                if (item.product.id.toString() === id.toString()) {
                    selected = true;
                }
            });
        }
        if (selected) {
            return (
                <button onClick={addToWishlist} className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer" >
                    <HeartIcon className='h-6 w-6 group-hover:opacity-70 text-red-600' />
                </button>
            )
        } else {
            return (
                <button onClick={addToWishlist} className="flex flex-col-reverse  mb-1 mr-4 group cursor-pointer" >
                    <HeartIcon className='h-6 w-6 group-hover:opacity-70' />
                </button>
            )
        }
    }
    return (
        <>
            {renderWishlistHeart()}
        </>
    )
}

export default WishlistHeart