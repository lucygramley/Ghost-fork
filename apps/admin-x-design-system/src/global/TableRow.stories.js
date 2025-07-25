import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './Button';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
const meta = {
    title: 'Global / Table / Table Row',
    component: TableRow,
    tags: ['autodocs']
};
const tableHeaderCells = (_jsxs(_Fragment, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Email" })] }));
const tableCells = (_jsxs(_Fragment, { children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] }));
export default meta;
export const Default = {
    args: {
        children: tableCells,
        action: _jsx(Button, { color: 'green', label: 'Edit', link: true }),
        onClick: (e) => {
            const clickedDiv = e.currentTarget;
            alert(`Clicked on "${clickedDiv.id}"`);
        }
    },
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '600px' }, children: _story() }))]
};
export const HiddenAction = {
    args: {
        children: tableCells,
        hideActions: true,
        action: _jsx(Button, { color: 'green', label: 'Edit', link: true }),
        onClick: (e) => {
            const clickedDiv = e.currentTarget;
            alert(`Clicked on "${clickedDiv.id}"`);
        }
    }
};
export const HeaderRow = {
    args: {
        children: tableHeaderCells,
        separator: false,
        bgOnHover: false
    }
};
