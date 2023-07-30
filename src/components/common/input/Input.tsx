import React from 'react'
import { styled } from 'styled-components'

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
                    <LabelWrapper htmlFor={id}>{label}:</LabelWrapper>
                    <TextAreaWrapper
                        id={id}
                        placeholder={placeholder}
                        rows={rows}
                        name={name}
                        onChange={onChange}
                        value={value}
                        required={required}
                    ></TextAreaWrapper>
                </>
            ) : (
                <>
                    <LabelWrapper htmlFor={id}>{label}:</LabelWrapper>
                    <InputWrapper
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        required={required}
                    />
                </>
            )}
        </>
    )
}

const TextAreaWrapper = styled.textarea`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const InputWrapper = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`

const LabelWrapper = styled.label`
    display: block;
    font-weight: bold;
`

export { Input }
