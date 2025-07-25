import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import ConfirmationModal from '../global/modal/ConfirmationModal';
export function confirmIfDirty(dirty, action, options = {}) {
    if (!dirty) {
        action();
    }
    else {
        NiceModal.show(ConfirmationModal, {
            title: 'Are you sure you want to leave this page?',
            prompt: (_jsxs(_Fragment, { children: [_jsx("p", { children: `Hey there! It looks like you didn't save the changes you made.` }), _jsx("p", { children: "Save before you go!" })] })),
            okLabel: 'Leave',
            cancelLabel: 'Stay',
            okColor: 'red',
            onOk: (confirmationModal) => {
                action();
                confirmationModal?.remove();
            },
            ...options
        });
    }
}
