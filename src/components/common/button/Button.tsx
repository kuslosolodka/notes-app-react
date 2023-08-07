import React from 'react'

type ButtonVariant = 'edit' | 'delete' | 'add' | 'archive' | 'submit' | 'cancel'

interface Properties {
    className?: string
    onClick?: () => void
    text?: string
    type: 'button' | 'submit'
    variant: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
    edit: "after:content-['✏️'] bg-gray-100",
    delete: "after:content-['🗑️'] bg-gray-100",
    add: 'bg-transparent text-xl',
    archive: "after:content-['📁'] bg-gray-100",
    submit: 'bg-green-600 my-3.5 w-2/5',
    cancel: "after:content-['❌'] text-xl",
}

const Button: React.FC<Properties> = ({
    onClick,
    text,
    type = 'button',
    className,
    variant,
}: Properties) => {
    const buttonClassName = `px-4 py-1.5 cursor-pointer border border-transparent rounded-md ${
        variantClasses[variant]
    } ${className || ''}`

    return (
        <button onClick={onClick} type={type} className={buttonClassName}>
            {text}
        </button>
    )
}

export type { Properties }
export { Button }
