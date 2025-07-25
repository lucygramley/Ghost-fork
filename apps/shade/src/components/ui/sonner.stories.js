import { jsx as _jsx } from "react/jsx-runtime";
import { Toaster } from './sonner';
import { toast } from 'sonner';
import { Button } from './button';
const meta = {
    title: 'Components / Sonner',
    component: Toaster,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {},
    render: () => (_jsx(Button, { onClick: () => toast('Toast title'), children: "Toast!" }))
};
export const Error = {
    args: {},
    render: () => (_jsx(Button, { onClick: () => toast.error('Hello world!', { description: 'Error description', duration: Infinity }), children: "Toast!" }))
};
export const Success = {
    args: {},
    render: () => (_jsx(Button, { onClick: () => toast.success('Hello world!', { description: 'Error description', duration: Infinity }), children: "Toast!" }))
};
export const Info = {
    args: {},
    render: () => (_jsx(Button, { onClick: () => toast.info('Hello world!', { description: 'Error description', duration: Infinity }), children: "Toast!" }))
};
