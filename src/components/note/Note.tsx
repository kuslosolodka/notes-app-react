import React from 'react'
import { styled } from 'styled-components'

interface Properties {
    data: string
}

const Note: React.FC<Properties> = ({ data }) => {
    return <TableCell>{data}</TableCell>
}

const TableCell = styled.td`
    padding: 0.625em;
    text-align: center;
    font-weight: 300;
`

export { Note }
