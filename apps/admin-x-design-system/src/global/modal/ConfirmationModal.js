import { jsx as _jsx } from "react/jsx-runtime";
import Modal from './Modal';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { useState } from 'react';
export const ConfirmationModalContent = ({ title = 'Are you sure?', prompt, cancelLabel = 'Cancel', okLabel = 'OK', okRunningLabel = '...', okColor = 'black', onCancel, onOk, customFooter, formSheet = true }) => {
    const modal = useModal();
    const [taskState, setTaskState] = useState('');
    return (_jsx(Modal, { backDropClick: false, buttonsDisabled: taskState === 'running', cancelLabel: cancelLabel, footer: customFooter, formSheet: formSheet, okColor: okColor, okLabel: taskState === 'running' ? okRunningLabel : okLabel, testId: 'confirmation-modal', title: title, width: 540, onCancel: onCancel, onOk: async () => {
            setTaskState('running');
            try {
                await onOk?.(modal);
            }
            catch (e) {
                // eslint-disable-next-line no-console
                console.error('Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.', e);
            }
            setTaskState('');
        }, children: _jsx("div", { className: 'py-4 leading-9', children: prompt }) }));
};
export default NiceModal.create(ConfirmationModalContent);
