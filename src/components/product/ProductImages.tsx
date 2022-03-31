import Image from 'next/image'
import React, { FunctionComponent, useEffect, useState } from 'react'

const ProductImages: FunctionComponent<{
    main: string,
    title: string,
    images: string[],
}> = ({ main, title, images }) => {
    let [viewPhoto, setViewPhoto] = useState("")
    useEffect(() => {
        setViewPhoto(main)

    }, [main]);
    const ChangePhoto = (photo: any) => {
        setViewPhoto(photo)
    }
    return (
        <div className="lg:w-1/2  sm:w-1/2 flex flex-col space-x-2 mt-3 ">
            <Image
                alt={title}
                className="sm:w-1/2 lg:h-auto h-64 object-cover object-center rounded"
                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${viewPhoto}`}
                layout="responsive"
                height="300"
                width="300"
            />

            {images && images !== null && images !== undefined &&
                (<div className={`m-3  ${images.length === 0 ? " hidden" : "flex "}`}>
                    <button onClick={(e) => ChangePhoto(main)} className={`border-2 ${viewPhoto === main ? " border-indigo-300" : ""}`}>
                        <Image
                            alt={title}
                            className=" object-cover object-center rounded"
                            src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${main}`}
                            layout="intrinsic"
                            height="450"
                            width="450"
                        />
                    </button>

                    {images.map((item: any) => (
                        <button key={item.photo} onClick={(e) => ChangePhoto(item.photo)} className={`border-2 ${viewPhoto === item.photo ? " border-indigo-300" : ""}`}>

                            <Image
                                alt={title}
                                className=" object-cover object-center rounded"
                                src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.photo}`}
                                layout="intrinsic"
                                height="450"
                                width="450"
                            />
                        </button>
                    ))
                    }


                </div>)
            }
        </div>
    )
}

export default ProductImages