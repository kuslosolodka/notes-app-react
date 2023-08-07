import React from 'react'

import { Label } from '../common'

interface Properties {
    id: string
    label: string
    name: string
    onChange: (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
    placeholder?: string
    required?: boolean
    rows?: number
    type?: 'date' | 'text'
    value?: string
}

const Input: React.ForwardRefRenderFunction<
    HTMLInputElement | HTMLTextAreaElement,
    Properties
> = (
    {
        label,
        type = 'text',
        id,
        name,
        value,
        onChange,
        required,
        rows,
        placeholder,
    },
    reference
) => {
    const hasRows = rows !== undefined

    return (
        <>
            <Label label={label} />
            {hasRows ? (
                <>
                    <textarea
                        ref={reference as React.Ref<HTMLTextAreaElement>}
                        id={id}
                        placeholder={placeholder}
                        rows={rows}
                        name={name}
                        onChange={onChange}
                        value={value}
                        required={required}
                        className="w-full p-2 mb-2.5 border border-gray-300 rounded-md"
                    ></textarea>
                </>
            ) : (
                <>
                    <input
                        ref={reference as React.Ref<HTMLInputElement>}
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="w-full p-2 mb-2.5 border border-gray-300 rounded-md"
                    />
                </>
            )}
        </>
    )
}

const ForwardedInput = React.forwardRef(Input)

export { ForwardedInput as Input }
