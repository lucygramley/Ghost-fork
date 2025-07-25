import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from './button';
import { ArrowUp, Smile } from 'lucide-react';
const meta = {
    title: 'Components / Button',
    component: Button,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        children: 'This is a button component'
    }
};
export const IconOnly = {
    args: {
        size: 'icon',
        children: (_jsx(ArrowUp, {}))
    }
};
export const IconAndText = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(ArrowUp, {}), "Icon and text"] }))
    }
};
export const LucideIcon = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(Smile, {}), "Experimental"] }))
    }
};
