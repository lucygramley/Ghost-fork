import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './button';
const RightSidebarMenuLink = React.forwardRef(({ active, children, ...props }, ref) => {
    const linkClass = cn('justify-start text-md font-medium text-gray-800 dark:hover:bg-gray-925/70 dark:text-gray-500 h-9 [&_svg]:size-[18px]', active && 'bg-gray-100 dark:bg-gray-925/70 dark:text-white text-black font-semibold');
    return (_jsx(Button, { ref: ref, className: linkClass, variant: 'ghost', ...props, children: children }));
});
RightSidebarMenuLink.displayName = 'RightSidebarMenuLink';
const RightSidebarMenu = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex flex-col gap-px', className), ...props, children: children }));
});
RightSidebarMenu.displayName = 'RightSidebarMenu';
export { RightSidebarMenu, RightSidebarMenuLink };
