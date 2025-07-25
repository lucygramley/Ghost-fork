import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { cva } from 'class-variance-authority';
const Table = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { className: "relative w-full", children: _jsx("table", { ref: ref, className: cn('w-full caption-bottom text-sm', className), ...props }) })));
Table.displayName = 'Table';
const TableHeader = React.forwardRef(({ className, ...props }, ref) => (_jsx("thead", { ref: ref, className: cn('[&_tr:hover:before]:bg-transparent', className), ...props })));
TableHeader.displayName = 'TableHeader';
const TableBody = React.forwardRef(({ className, ...props }, ref) => (_jsx("tbody", { ref: ref, className: cn('', className), ...props })));
TableBody.displayName = 'TableBody';
const TableFooter = React.forwardRef(({ className, ...props }, ref) => (_jsx("tfoot", { ref: ref, className: cn('border-b bg-muted/50 font-medium [&>tr]:last:border-b-0', className), ...props })));
TableFooter.displayName = 'TableFooter';
const TableRow = React.forwardRef(({ className, ...props }, ref) => (_jsx("tr", { ref: ref, className: cn('group relative border-b data-[state=selected]:bg-muted', className), ...props })));
TableRow.displayName = 'TableRow';
const headVariants = cva('relative align-middle', {
    variants: {
        variant: {
            default: 'h-10 px-2 text-left text-xs font-medium uppercase tracking-wide text-gray-700 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
            cardhead: 'text-base font-normal [&>div]:px-0'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const TableHead = React.forwardRef(({ className, variant, ...props }, ref) => (_jsx("th", { ref: ref, className: cn(headVariants({ variant, className })), ...props })));
TableHead.displayName = 'TableHead';
const TableHeadButton = ({ className, children, ...props }) => {
    const buttonClassName = cn('text-xs uppercase tracking-wide leading-4 text-right text-gray-700 hover:bg-transparent px-0 [&_svg]:size-4 gap-1', className);
    return (_jsx(Button, { className: buttonClassName, size: 'sm', variant: 'ghost', ...props, children: children }));
};
TableHeadButton.displayName = 'TableHeadButton';
const TableCell = React.forwardRef(({ className, ...props }, ref) => (_jsx("td", { ref: ref, className: cn('relative p-2.5 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] group-hover:bg-muted/50', className), ...props })));
TableCell.displayName = 'TableCell';
const TableCaption = React.forwardRef(({ className, ...props }, ref) => (_jsx("caption", { ref: ref, className: cn('mt-4 text-sm text-muted-foreground', className), ...props })));
TableCaption.displayName = 'TableCaption';
export { Table, TableHeader, TableBody, TableFooter, TableHead, TableHeadButton, TableRow, TableCell, TableCaption };
