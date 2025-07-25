import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
const Popover = ({ trigger, children, position = 'start', side = 'bottom', closeOnItemClick, open: openState, setOpen: setOpenState }) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const open = openState !== undefined ? openState : internalOpen;
    const setOpen = setOpenState || setInternalOpen;
    const handleContentClick = () => {
        if (closeOnItemClick) {
            setOpen(false);
        }
    };
    return (_jsxs(PopoverPrimitive.Root, { open: open, onOpenChange: setOpen, children: [_jsx(PopoverPrimitive.Anchor, { asChild: true, children: _jsx(PopoverPrimitive.Trigger, { asChild: true, onClick: e => e.stopPropagation(), children: trigger }) }), _jsx(PopoverPrimitive.Content, { align: position, className: "z-[9999] mt-2 origin-top-right rounded bg-white shadow-md ring-1 ring-[rgba(0,0,0,0.01)] focus:outline-none dark:bg-grey-900 dark:text-white", "data-testid": 'popover-content', side: side, sideOffset: 8, onClick: handleContentClick, children: children })] }));
};
export default Popover;
