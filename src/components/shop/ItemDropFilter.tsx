import React, { FunctionComponent } from 'react'

const ItemDropFilter: FunctionComponent<{
    option: {
        id: number,
        title: string
    }
}> = ({
    option: {
        id,
        title
    }
}) => {

        const AddCheck = (id: any) => {
            console.log("Chek", id)
        }
        return (
            <div className=' className="flex items-center"'>
                <input
                    id={`filter-${id}-${title}`}
                    name={`${id}`}
                    defaultValue={"false"}
                    type="checkbox"
                    onClick={() => AddCheck(id)}
                    defaultChecked={false}
                    className="h-4 w-4 border-gray-300 rounded  focus:outline-none "
                />
                <label
                    htmlFor={`filter-${id}-${title}`}
                    className="ml-3 text-sm dark:text-day-500 text-gray-600 "
                >
                    {title}
                </label>
            </div>
        )
    }

export default ItemDropFilter