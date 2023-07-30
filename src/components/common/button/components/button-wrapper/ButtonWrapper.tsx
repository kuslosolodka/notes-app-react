import { css, styled } from 'styled-components'

import type { Properties } from '../../Button'

const ButtonWrapper = styled.button<Properties>`
    padding: 6px 15px;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    ${({ variant }): ReturnType<typeof css> => {
        const variantStyles = {
            edit: css`
                &::after {
                    content: '✏️';
                }
            `,
            delete: css`
                &::after {
                    content: '🗑️';
                }
            `,
            archive: css`
                &::after {
                    content: '📁';
                }
            `,
            add: css`
                margin-left: 10px;
                background: transparent;
                font-size: 20px;
            `,
            submit: css`
                background: rgb(42 170 138);
                margin: 10px 0;
                width: 40%;
            `,
            cancel: css`
                &::after {
                    content: '❌';
                    font-size: 20px;
                }
            `,
        }
        return variantStyles[variant]
    }}
`

export { ButtonWrapper }
