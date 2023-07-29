import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

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
        <DialogWrapper ref={reference}>{children}</DialogWrapper>,
        document.body
    )
}

const DialogWrapper = styled.dialog`
    width: 400px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0 0 0 / 20%);

    &::backdrop {
        background-color: rgba(0 0 0 / 50%);
    }
`

export { Modal }
