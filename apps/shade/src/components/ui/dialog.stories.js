import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from './dialog';
import { Button } from './button';
const meta = {
    title: 'Components / Dialog',
    component: Dialog,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(DialogTrigger, { className: 'cursor-pointer', children: _jsx(Button, { className: 'cursor-pointer', children: "Open" }) }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Are you absolutely sure?" }), _jsx(DialogDescription, { children: "This action cannot be undone. Are you sure you want to permanently delete this file from our servers?" })] }), _jsxs(DialogFooter, { children: [_jsx(Button, { type: "submit", variant: "outline", children: "Cancel" }), _jsx(Button, { type: "submit", children: "Confirm" })] })] })] }))
    }
};
