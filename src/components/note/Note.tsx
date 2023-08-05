import React from 'react'

interface Properties {
    data: string
}

const Note: React.FC<Properties> = ({ data }) => {
    return <td className="p-2.5 text-center font-light">{data}</td>
}

export { Note }
