import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
import { Button } from './button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
/**
 * Use along with use-simple-pagination hook — see that file for more about how
 */
const SimplePagination = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex items-center justify-between gap-4 pb-6 text-sm', className), ...props, children: children }));
});
SimplePagination.displayName = 'SimplePagination';
const SimplePaginationPages = React.forwardRef(({ className, currentPage, totalPages, ...props }, ref) => {
    return (_jsxs("span", { ref: ref, className: cn('text-muted-foreground', className), ...props, children: ["Pages ", currentPage, " of ", totalPages] }));
});
SimplePaginationPages.displayName = 'SimplePaginationPages';
const SimplePaginationNavigation = React.forwardRef(({ className, children, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex items-center gap-1.5', className), ...props, children: children }));
});
SimplePaginationNavigation.displayName = 'SimplePaginationNavigation';
const SimplePaginationPreviousButton = React.forwardRef(({ variant = 'outline', ...props }, ref) => {
    return (_jsx(Button, { ref: ref, size: 'sm', variant: variant, ...props, children: _jsx(ArrowLeft, {}) }));
});
SimplePaginationPreviousButton.displayName = 'SimplePaginationPreviousButton';
const SimplePaginationNextButton = React.forwardRef(({ variant = 'outline', ...props }, ref) => {
    return (_jsx(Button, { ref: ref, size: 'sm', variant: variant, ...props, children: _jsx(ArrowRight, {}) }));
});
SimplePaginationNextButton.displayName = 'SimplePaginationNextButton';
export { SimplePagination, SimplePaginationPages, SimplePaginationNavigation, SimplePaginationPreviousButton, SimplePaginationNextButton };
