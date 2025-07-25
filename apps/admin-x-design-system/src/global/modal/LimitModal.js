import { jsx as _jsx } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import Modal from './Modal';
export const LimitModalContent = ({ title = 'Upgrade your plan', prompt, okLabel = 'Upgrade', formSheet = false, onOk }) => {
    return (_jsx(Modal, { backDropClick: false, formSheet: formSheet, okColor: 'green', okLabel: okLabel, testId: 'limit-modal', title: title, width: 540, onOk: onOk, children: _jsx("div", { className: 'py-4 leading-9', children: typeof prompt === 'string' && prompt.includes('<') ? (_jsx("div", { dangerouslySetInnerHTML: { __html: prompt } })) : (prompt) }) }));
};
export default NiceModal.create(LimitModalContent);
