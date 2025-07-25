import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import Heading from './Heading';
const TableHead = ({ className, children, colSpan, sticky = false, ...props }) => {
    const tableCellClasses = clsx('!py-2 !pl-0 !pr-6 text-left align-top', sticky && 'sticky top-0 bg-white', props.onClick && 'hover:cursor-pointer', className);
    return (_jsx("th", { className: tableCellClasses, colSpan: colSpan, ...props, children: _jsx(Heading, { className: 'whitespace-nowrap', level: 6, children: children }) }));
};
export default TableHead;
