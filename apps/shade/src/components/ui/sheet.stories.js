import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from './sheet';
import { Button } from './button';
const meta = {
    title: 'Components / Sheet',
    component: Sheet,
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
        children: (_jsxs(_Fragment, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { children: "Open Sheet" }) }), _jsxs(SheetContent, { children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Sheet Title" }), _jsx(SheetDescription, { children: "This is a Sheet component. You can put any content here." })] }), _jsx("div", { className: "py-4", children: "Main content goes here." }), _jsxs(SheetFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Confirm" })] })] })] }))
    }
};
export const SideVariants = {
    args: {
        children: (_jsx("div", { className: "flex flex-wrap gap-4", children: ['right', 'left', 'top', 'bottom'].map(side => (_jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { children: `Open ${side.charAt(0).toUpperCase() + side.slice(1)}` }) }), _jsxs(SheetContent, { side: side, children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: `Sheet from ${side}` }), _jsx(SheetDescription, { children: `This Sheet slides in from the ${side}.` })] }), _jsxs("div", { className: "py-4", children: ["Content for ", side, " side."] }), _jsxs(SheetFooter, { children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Confirm" })] })] })] }, side))) }))
    }
};
