import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
const NavbarActions = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex items-center gap-2', className), ...props, children: children }));
});
NavbarActions.displayName = 'NavbarActions';
const Navbar = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex items-center border-b justify-between gap-x-5 gap-y-2', className), ...props, children: children }));
});
Navbar.displayName = 'Navbar';
export { NavbarActions, Navbar };
