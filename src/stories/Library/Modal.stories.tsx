/* eslint-disable react/react-in-jsx-scope */
import type { Meta, StoryObj } from '@storybook/react'

import { Form } from '../../components/common/form/Form'
import { Modal } from '../../components/common/modal/Modal'
import { useModal } from '../common/hooks/use-modal/use-modal.hook'
import { mockNotesData } from '../common/mockNotesData'

const meta: Meta<typeof Modal> = {
    component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

const AddModal = () => {
    const { isModalOpen, openModal, closeModal, handleSubmit } = useModal()

    return (
        <>
            <button onClick={openModal}>Open</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onSubmit={handleSubmit} />
            </Modal>
        </>
    )
}

const EditModal = () => {
    const { isModalOpen, openModal, closeModal, handleSubmit } = useModal()

    return (
        <>
            <button onClick={openModal}>Open</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onSubmit={handleSubmit} initialValues={mockNotesData} />
            </Modal>
        </>
    )
}

const Add: Story = {
    render: () => <AddModal />,
}

const Edit: Story = {
    render: () => <EditModal />,
}

export { Add, Edit }
