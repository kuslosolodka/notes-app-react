import React from 'react'

interface Properties {
    keyRow?: string | number
    children: React.ReactNode
}

const TableRow: React.FC<Properties> = ({ keyRow, children }) => {
    return (
        <tr key={keyRow} className="bg-white border border-gray-300 p-1.5">
            {children}
        </tr>
    )
}

export { TableRow }
