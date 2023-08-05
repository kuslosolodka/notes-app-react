import React from 'react'

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

const Input: React.FC<Properties> = ({
    label,
    type = 'text',
    id,
    name,
    value,
    onChange,
    required,
    rows,
    placeholder,
}) => {
    const hasRows = rows !== undefined
    return (
        <>
            {hasRows ? (
                <>
                    <label htmlFor={id} className="block font-bold">
                        {label}:
                    </label>
                    <textarea
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
                    <label htmlFor={id} className="block font-bold">
                        {label}:
                    </label>
                    <input
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

export { Input }
