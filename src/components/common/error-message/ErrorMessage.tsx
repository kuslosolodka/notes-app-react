import React from 'react'

interface Properties {
    message: string | undefined
}

const ErrorMessage: React.FC<Properties> = ({ message }) => {
    return <span className="text-red-500">{message}</span>
}

export { ErrorMessage }
