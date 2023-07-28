import React from 'react'

import { ButtonWrapper } from '../button/components/button-wrapper/ButtonWrapper.tsx'

interface Properties {
    className?: string
    onClick?: () => void
    text?: string
    type: 'button' | 'submit'
    variant: 'edit' | 'delete' | 'add' | 'archive'
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
