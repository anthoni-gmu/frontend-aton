import React, { FunctionComponent } from 'react'

const ItemDropFilter: FunctionComponent<{ option: {
    id:number,
    title:string
} }> = ({
    option: {
        id,
        title
    }
}) => {
    return (
        <div className=' className="flex items-center"'>
            <>{title}</>
        </div>
    )
}

export default ItemDropFilter