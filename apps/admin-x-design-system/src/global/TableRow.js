import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { forwardRef } from 'react';
export const tableRowHoverBgClasses = 'before:absolute before:inset-x-[-16px] before:top-[-1px] before:bottom-0 before:bg-grey-50 before:opacity-0 hover:before:opacity-100 before:rounded-md before:transition-opacity before:dark:bg-grey-950 hover:z-10';
const TableRow = forwardRef(function TableRow({ id, action, hideActions, className, style, testId, separator, bgOnHover = true, onClick, children }, ref) {
    const handleClick = (e) => {
        onClick?.(e);
    };
    separator = (separator === undefined) ? true : separator;
    const tableRowClasses = clsx('group/table-row relative transform-gpu [clip-path:inset(0_-16px)]', bgOnHover && tableRowHoverBgClasses, onClick && 'cursor-pointer', separator ? 'border-b border-grey-100 last-of-type:border-b-transparent dark:border-grey-950' : 'border-y border-none first-of-type:hover:border-t-transparent', 'hover:border-b-transparent', className);
    return (_jsx("tr", { ref: ref, className: tableRowClasses, "data-testid": testId, id: id, style: style, onClick: handleClick, children: _jsx("td", { className: "p-0", colSpan: 1000, children: _jsxs("div", { className: "relative z-10 flex items-center", children: [_jsx("div", { className: "grow py-2", children: children }), action &&
                        _jsx("div", { className: `flex items-center justify-end p-2${hideActions ? ' opacity-0 group-hover/table-row:opacity-100' : ''}`, children: action })] }) }) }));
});
export default TableRow;
