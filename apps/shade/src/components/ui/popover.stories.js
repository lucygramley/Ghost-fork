import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Popover, PopoverTrigger, PopoverContent } from './popover';
import { Button } from './button';
const meta = {
    title: 'Components / Popover',
    component: Popover,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        children: [
            _jsx("div", { style: { height: 400 }, children: _jsxs(Popover, { children: [_jsx(PopoverTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open popover" }) }), _jsx(PopoverContent, { align: "start", className: "w-80", children: _jsx("div", { className: "grid gap-4", children: _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-medium leading-none", children: "Dimensions" }), _jsx("p", { className: "text-sm text-muted-foreground", children: "Set the dimensions for the layer." })] }) }) })] }) })
        ]
    }
};
