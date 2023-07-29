import React from 'react'

import { ButtonWrapper } from '../button/components/button-wrapper/ButtonWrapper.tsx'

type ButtonVariant = 'edit' | 'delete' | 'add' | 'archive' | 'submit' | 'cancel'

interface Properties {
    className?: string
    onClick?: () => void
    text?: string
    type: 'button' | 'submit'
    variant: ButtonVariant
}

const Button: React.FC<Properties> = ({
    onClick,
    text,
    type = 'button',
    className,
    variant,
}: Properties) => {
    return (
        <ButtonWrapper
            onClick={onClick}
            type={type}
            className={className}
            variant={variant}
        >
            {text}
        </ButtonWrapper>
    )
}

export type { Properties }
export { Button }
