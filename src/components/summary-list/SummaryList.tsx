import React from 'react'

// import styles from './style.module.css'

interface SummaryData {
    categories: Array<{
        active: number
        archived: number
        category: string
    }>
}

interface Properties {
    data: SummaryData
}

const SummaryList: React.FC<Properties> = ({ data }) => {
    return (
        <>
            {data.categories.map((categoryData) => (
                <tr
                    className="bg-white border-x-gray-400 py-1"
                    key={categoryData.category}
                >
                    <td className="p-2.5 text-center font-light">
                        {categoryData.category}
                    </td>
                    <td className="p-2.5 text-center font-light">
                        {categoryData.active}
                    </td>
                    <td className="p-2.5 text-center font-light">
                        {categoryData.archived}
                    </td>
                </tr>
            ))}
        </>
    )
}

export { SummaryList }
export type { SummaryData }
