import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import * as React from 'react';
const Page = React.forwardRef(({ className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('max-w-page mx-auto w-full min-h-full px-8 flex flex-col', className), ...props }));
});
Page.displayName = 'Page';
export { Page };
