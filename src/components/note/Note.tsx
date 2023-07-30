import React from 'react'

import { TableCell } from '../common/table-cell/TableCell.tsx'

interface Properties {
    data: string
}

const Note: React.FC<Properties> = ({ data }) => {
    return <TableCell>{data}</TableCell>
}

export { Note }
