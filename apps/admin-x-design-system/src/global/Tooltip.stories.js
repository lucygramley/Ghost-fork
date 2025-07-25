import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
import Tooltip from './Tooltip';
const meta = {
    title: 'Global / Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { className: 'p-10', children: _story() }))]
};
export default meta;
export const Default = {
    args: {
        content: 'Hello tooltip',
        children: _jsx(Button, { color: 'outline', label: "Hover me" })
    }
};
export const MediumSize = {
    args: {
        content: 'Hello tooltip',
        children: _jsx(Button, { color: 'outline', label: "Hover me" }),
        size: 'md'
    }
};
export const Left = {
    args: {
        content: 'Hello tooltip on the left',
        children: _jsx(Button, { color: 'outline', label: "Hover me" }),
        origin: 'start'
    }
};
export const Center = {
    args: {
        content: 'Hello center tooltip',
        children: _jsx(Button, { color: 'outline', label: "Hover me" }),
        origin: 'center'
    }
};
export const Right = {
    args: {
        content: 'Hello right tooltip',
        children: _jsx(Button, { color: 'outline', label: "Hover me" }),
        origin: 'end'
    }
};
export const Long = {
    args: {
        content: `You're the best evil son an evil dad could ever ask for.`,
        children: _jsx(Button, { color: 'outline', label: "Hover me" }),
        size: 'md',
        origin: 'start'
    }
};
export const OnText = {
    args: {
        content: 'Hello center tooltip',
        children: 'Just hover me',
        origin: 'center'
    }
};
