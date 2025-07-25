import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import React from 'react';
const DataList = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex flex-col items-stretch', className), ...props, children: children }));
});
DataList.displayName = 'DataList';
const DataListHeader = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex uppercase items-center justify-between gap-2 border-b p-2 text-xs tracking-wide font-medium text-muted-foreground', className), ...props, children: children }));
});
DataListHeader.displayName = 'DataListHeader';
const DataListHead = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('', className), ...props, children: children }));
});
DataListHead.displayName = 'DataListHead';
const DataListBody = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('flex flex-col items-stretch pt-1.5', className), ...props, children: children }));
});
DataListBody.displayName = 'DataListBody';
const DataListRow = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('group/row py-0.5 relative flex items-center justify-between gap-3 before:absolute before:z-0 before:-inset-x-0.5 before:inset-y-0.5 before:bg-muted/60 before:opacity-0 hover:before:opacity-100 before:rounded-[6px]', className), ...props, children: children }));
});
DataListRow.displayName = 'DataListRow';
const DataListBar = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('absolute inset-x-0 inset-y-1 z-0 origin-left rounded-[4px] bg-[#EFF5FB] dark:bg-[#202B36] dark:group-hover/row:bg-[#213F5E] group-hover/row:bg-[#BDE1FF] transition-all', className), ...props, children: children }));
});
DataListBar.displayName = 'DataListBar';
const DataListItemContent = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('text-sm p-2 font-medium relative z-10 flex min-w-0 max-w-[calc(100%-32px)] items-center transition-[max-width] duration-300 ease-in-out group-hover/datalist:max-w-[calc(100%-100px)]', className), ...props, children: children }));
});
DataListItemContent.displayName = 'DataListItemContent';
const DataListItemValue = React.forwardRef(({ children, className, ...props }, ref) => {
    // Apply animation styles when there are multiple children
    const childrenArray = React.Children.toArray(children);
    const hasMultipleChildren = childrenArray.length > 1;
    return (_jsx("div", { ref: ref, className: cn('z-10 flex items-center', 
        // Apply animation styles when there are multiple children
        hasMultipleChildren && '[&>[data-type="value-abs"]]:transition-transform [&>[data-type="value-abs"]]:duration-300 [&>[data-type="value-abs"]]:group-hover/datalist:-translate-x-14', hasMultipleChildren && '[&>[data-type="value-perc"]]:invisible [&>[data-type="value-perc"]]:absolute [&>[data-type="value-perc"]]:right-0 [&>[data-type="value-perc"]]:translate-x-14 [&>[data-type="value-perc"]]:opacity-0 [&>[data-type="value-perc"]]:transition-all [&>[data-type="value-perc"]]:duration-300 [&>[data-type="value-perc"]]:group-hover/datalist:visible [&>[data-type="value-perc"]]:group-hover/datalist:translate-x-0 [&>[data-type="value-perc"]]:group-hover/datalist:opacity-100', className), ...props, children: children }));
});
DataListItemValue.displayName = 'DataListItemValue';
const DataListItemValueAbs = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('z-10 px-2 text-sm font-mono', className), "data-type": 'value-abs', ...props, children: children }));
});
DataListItemValueAbs.displayName = 'DataListItemValueAbs';
const DataListItemValuePerc = React.forwardRef(({ children, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn('px-3 text-sm font-mono text-muted-foreground', className), "data-type": 'value-perc', ...props, children: children }));
});
DataListItemValuePerc.displayName = 'DataListItemValuePerc';
/* End of components
/* -------------------------------------------------------------------------- */
export { DataList, DataListHeader, DataListHead, DataListBody, DataListRow, DataListBar, DataListItemContent, DataListItemValue, DataListItemValueAbs, DataListItemValuePerc };
