import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { Button } from '../button/Button.tsx'

interface Properties {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
}

const Modal: React.FC<Properties> = ({
    children,
    isOpen,
    onClose,
}: Properties) => {
    const reference = useRef<null | HTMLDialogElement>(null)
    useEffect(() => {
        if (
            reference.current !== null &&
            isOpen &&
            !reference.current.hasAttribute('open')
        ) {
            reference.current.showModal()
        }
    }, [isOpen, reference])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent): void => {
            if (event.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [onClose])

    if (!isOpen) {
        return
    }

    return createPortal(
        <dialog
            ref={reference}
            className="w-96 p-4 bg-gray-100 rounded-lg shadow-md backdrop:bg-black/50"
        >
            <div className="flex flex-col">
                <div className="flex justify-end">
                    <Button type="button" variant="cancel" onClick={onClose} />
                </div>
                {children}
            </div>
        </dialog>,
        document.body
    )
}

export { Modal }
