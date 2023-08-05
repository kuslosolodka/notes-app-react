import React from 'react'

interface Properties {
    data: string | number
}

const TableCell: React.FC<Properties> = ({ data }) => {
    return <td className="p-2.5 text-center font-light">{data}</td>
}

export { TableCell }
