import React from 'react'

interface Properties {
    title: string
    children?: React.ReactNode
}

const TableCaption: React.FC<Properties> = ({ title, children }) => {
    return (
        <caption className="text-2xl my-2 py-3 ">
            {title}
            {children}
        </caption>
    )
}

export { TableCaption }
