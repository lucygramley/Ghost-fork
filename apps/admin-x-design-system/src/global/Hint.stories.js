import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Hint from './Hint';
const meta = {
    title: 'Global / Hint',
    component: Hint,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        children: 'This is a hint'
    }
};
export const Error = {
    args: {
        children: 'This is a hint that should be red',
        color: 'red'
    }
};
export const Success = {
    args: {
        children: 'This is a hint that should be green',
        color: 'green'
    }
};
export const UsingReactNode = {
    args: {
        children: (_jsxs(_Fragment, { children: ["This is a ", _jsx("strong", { children: "bold" }), " hint with ", _jsx("a", { className: 'text-green-400', href: "https://ghost.org", children: "a link" })] }))
    }
};
