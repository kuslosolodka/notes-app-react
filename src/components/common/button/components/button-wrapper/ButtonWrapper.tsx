import { css, styled } from 'styled-components'

import type { Properties } from '../../Button'

const ButtonWrapper = styled.button<Properties>`
    padding: 6px 15px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    margin-left: 25px;
    margin-top: 5px;

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
                &::after {
                    content: ' 🦄';
                }
            `,
            submit: css`
                &::after {
                    content: 'Submit';
                }

                background: green;
            `,
            cancel: css`
                &::after {
                    content: 'Cancel';
                }

                background: red;
            `,
        }
        return variantStyles[variant]
    }}
`

export { ButtonWrapper }
