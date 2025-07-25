import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import * as React from 'react';
const ErrorPage = React.forwardRef(({ className, onBackToDashboard, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('admin-x-container-error', className), ...props, children: _jsxs("div", { className: "admin-x-error max-w-xl", children: [_jsx("h1", { children: "Loading interrupted" }), _jsx("p", { children: "They say life is a series of trials and tribulations. This moment right here? It's a tribulation. Our app was supposed to load, and yet here we are. Loadless. Click back to the dashboard to try again." }), _jsx("a", { className: 'cursor-pointer text-green', onClick: onBackToDashboard, children: "\u2190 Back to the dashboard" })] }) }));
});
ErrorPage.displayName = 'ErrorPage';
export { ErrorPage };
