import { styled } from 'styled-components'

const TableCell = styled.td`
    padding: 0.625em;
    text-align: center;
    font-weight: 300;

    @media (width <= 600px) {
        border-bottom: 1px solid #ddd;
        display: block;
        font-size: 0.8em;
        text-align: right;

        &::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            text-transform: uppercase;
        }

        &:last-child {
            border-bottom: 0;
        }
    }
`

export { TableCell }
