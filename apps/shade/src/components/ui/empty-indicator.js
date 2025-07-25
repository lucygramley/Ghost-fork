import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
const EmptyBadge = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex items-center justify-center rounded-full bg-muted w-12 h-12 max-w-12 max-h-12 [&_svg]:size-4 [&_svg]:text-muted-foreground [&_svg]:shrink-0', className), ...props, children: children }));
});
EmptyBadge.displayName = 'EmptyBadge';
const EmptyIndicator = React.forwardRef(({ children, className, title, description, actions, ...props }, ref) => {
    return (_jsxs("div", { ref: ref, className: cn('flex flex-col items-center justify-center space-y-3 text-center', className), ...props, children: [_jsx(EmptyBadge, { children: children }), _jsxs("div", { className: 'max-w-[320px] space-y-1.5', children: [_jsx("h3", { className: 'text-pretty text-sm font-medium tracking-normal text-foreground', children: title }), _jsx("p", { className: 'text-pretty text-sm leading-tight text-muted-foreground', children: description })] }), actions && (_jsx("div", { className: 'mt-4 flex items-center gap-2', children: actions }))] }));
});
EmptyIndicator.displayName = 'EmptyIndicator';
export { EmptyBadge, EmptyIndicator };
