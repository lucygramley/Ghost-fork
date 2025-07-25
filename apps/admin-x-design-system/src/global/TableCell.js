import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const TableCell = ({ className, children, padding = true, align = 'left', valign = 'top', ...props }) => {
    const tableCellClasses = clsx(padding ? '!py-3 !pl-0 !pr-6' : '', (align === 'center' && 'text-center'), (align === 'right' && 'text-right'), (valign === 'top' && 'align-top'), (valign === 'center' && 'align-center'), (valign === 'bottom' && 'align-bottom'), props.onClick && 'hover:cursor-pointer', className);
    return (_jsx("td", { className: tableCellClasses, ...props, children: children }));
};
export default TableCell;
