import React from 'react'

interface Properties {
    label: string
}

const Label: React.FC<Properties> = ({ label }) => {
    return <label className="block font-bold">{label}:</label>
}

export { Label }
