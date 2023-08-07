import React from 'react'

interface Properties {
    children: React.ReactNode
}

const TableHeader: React.FC<Properties> = ({ children }) => {
    return (
        <th className="bg-gray-200 text-sm tracking-widest uppercase text-center p-2.5">
            {children}
        </th>
    )
}

export { TableHeader }
