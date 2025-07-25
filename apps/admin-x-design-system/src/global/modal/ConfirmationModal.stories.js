import { jsx as _jsx } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import Button from '../Button';
import ConfirmationModal from './ConfirmationModal';
const ConfirmationModalContainer = ({ ...props }) => {
    return (_jsx(Button, { color: 'black', label: 'Open confirmation modal', onClick: () => {
            NiceModal.show(ConfirmationModal, { ...props });
        } }));
};
const meta = {
    title: 'Global / Modal / Confirmation Modal',
    component: ConfirmationModal,
    tags: ['autodocs'],
    decorators: [(_story, context) => (_jsx(NiceModal.Provider, { children: _jsx(ConfirmationModalContainer, { ...context.args }) }))]
};
export default meta;
export const Default = {
    args: {
        title: 'Are you sure?',
        prompt: 'Watch out, you\'re doing something super-super dangerous. Don\'t press the red button (you know you will).'
    }
};
export const CustomButtons = {
    args: {
        ...Default.args,
        title: 'You want to delete?',
        cancelLabel: 'Meh',
        okLabel: 'Alrite',
        okColor: 'red'
    }
};
