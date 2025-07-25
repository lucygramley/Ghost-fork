import { jsx as _jsx } from "react/jsx-runtime";
// import BoilerPlate from './Boilerplate';
import Button from './Button';
import Popover from './Popover';
const meta = {
    title: 'Global / Popover',
    component: Popover,
    tags: ['autodocs'],
    argTypes: {
        trigger: {
            control: {
                type: 'text'
            }
        }
    }
};
export default meta;
export const Default = {
    args: {
        trigger: (_jsx(Button, { color: 'grey', label: 'Open popover' })),
        children: (_jsx("div", { className: 'p-5 text-sm', style: { maxWidth: '320px' }, children: "This is a popover. You can put anything in it. The styling of the content defines how it will look at the end." }))
    }
};
export const CenterAlign = {
    args: {
        position: 'center',
        trigger: (_jsx(Button, { color: 'grey', label: 'Open popover' })),
        children: (_jsx("div", { className: 'p-5 text-sm', style: { maxWidth: '320px' }, children: "This is a popover. You can put anything in it. The styling of the content defines how it will look at the end." }))
    }
};
export const RightAlign = {
    args: {
        position: 'end',
        trigger: (_jsx(Button, { color: 'grey', label: 'Open popover' })),
        children: (_jsx("div", { className: 'p-5 text-sm', style: { maxWidth: '320px' }, children: "This is a popover. You can put anything in it. The styling of the content defines how it will look at the end." }))
    }
};
export const DismissOnClick = {
    args: {
        position: 'start',
        trigger: (_jsx(Button, { color: 'grey', label: 'Open popover' })),
        children: (_jsx("div", { className: 'p-5 text-sm', style: { maxWidth: '320px' }, children: "Click here to close the popover." })),
        closeOnItemClick: true
    }
};
