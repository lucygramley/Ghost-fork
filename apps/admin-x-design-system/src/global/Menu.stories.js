import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
import Menu from './Menu';
const meta = {
    title: 'Global / Menu',
    component: Menu,
    tags: ['autodocs']
};
export default meta;
const items = [
    { id: 'item-1', label: 'Item 1' },
    { id: 'item-2', label: 'Item 2' },
    { id: 'item-3', label: 'Click me', onClick: () => {
            alert('Clicked!');
        } }
];
export const Default = {
    args: {
        trigger: _jsx(Button, { color: 'black', label: "Click" }),
        items: items,
        position: 'start'
    },
    decorators: [
        ThisStory => (_jsx("div", { style: { maxWidth: '100px', margin: '0 auto' }, children: _jsx(ThisStory, {}) }))
    ]
};
export const Right = {
    args: {
        trigger: _jsx(Button, { color: 'black', label: "Click" }),
        items: items,
        position: 'end'
    },
    decorators: [
        ThisStory => (_jsx("div", { style: { maxWidth: '100px', margin: '0 auto' }, children: _jsx(ThisStory, {}) }))
    ]
};
