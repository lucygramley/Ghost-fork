import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Table, TableCaption, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell } from './table';
import { CardDescription, CardHeader, CardTitle } from './card';
const meta = {
    title: 'Components / Table',
    component: Table,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(TableCaption, { children: "A list of your recent invoices." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { className: "w-[100px]", children: "Invoice" }), _jsx(TableHead, { children: "Status" }), _jsx(TableHead, { children: "Method" }), _jsx(TableHead, { className: "text-right", children: "Amount" })] }) }), _jsx(TableBody, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "ABC-123" }), _jsx(TableCell, { children: "Paid" }), _jsx(TableCell, { children: "Card" }), _jsx(TableCell, { className: "text-right", children: "$2,500.00" })] }) }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 3, children: "Total" }), _jsx(TableCell, { className: "text-right", children: "$2,500.00" })] }) })] }))
    }
};
export const CardHead = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(TableCaption, { children: "A list of your recent invoices." }), _jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { variant: 'cardhead', children: _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Invoice" }), _jsx(CardDescription, { children: "All invoices from the last 30 days" })] }) }), _jsx(TableHead, { className: 'w-[10%]', children: "Status" }), _jsx(TableHead, { className: 'w-[5%]', children: "Method" }), _jsx(TableHead, { className: "w-[10%] text-right", children: "Amount" })] }) }), _jsx(TableBody, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-medium", children: "ABC-123" }), _jsx(TableCell, { children: "Paid" }), _jsx(TableCell, { children: "Card" }), _jsx(TableCell, { className: "text-right", children: "$2,500.00" })] }) }), _jsx(TableFooter, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { colSpan: 3, children: "Total" }), _jsx(TableCell, { className: "text-right", children: "$2,500.00" })] }) })] }))
    }
};
