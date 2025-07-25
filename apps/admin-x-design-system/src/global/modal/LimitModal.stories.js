import { jsx as _jsx } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import Button from '../Button';
import LimitModal from './LimitModal';
const LimitModalContainer = ({ ...props }) => {
    return (_jsx(Button, { color: 'black', label: 'Open limit modal', onClick: () => {
            NiceModal.show(LimitModal, { ...props });
        } }));
};
const meta = {
    title: 'Global / Modal / Limit Modal',
    component: LimitModal,
    tags: ['autodocs'],
    decorators: [(_story, context) => (_jsx(NiceModal.Provider, { children: _jsx(LimitModalContainer, { ...context.args }) }))]
};
export default meta;
export const Default = {
    args: {
        title: 'You need to upgrade your plan',
        prompt: 'Your current plan only <a href="https://ghost.org/pricing/" target="_blank" rel="noopener">supports free integrations</a> including Slack, Unsplash, and FirstPromoter. To add a custom integration, upgrade to a different plan.'
    }
};
