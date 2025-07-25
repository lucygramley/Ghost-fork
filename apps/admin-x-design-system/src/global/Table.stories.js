import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useSortableIndexedList } from '..';
import SortableList, { DragIndicator } from './SortableList';
import Table from './Table';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';
import * as TableRowStories from './TableRow.stories';
const meta = {
    title: 'Global / Table',
    component: Table,
    tags: ['autodocs']
};
const { /*id,*/ ...tableRowProps } = TableRowStories.HiddenAction.args || {};
const tableHeader = (_jsxs(_Fragment, { children: [_jsx(TableHead, { children: "Name" }), _jsx(TableHead, { children: "Email" })] }));
const tableRows = (_jsxs(_Fragment, { children: [_jsxs(TableRow, { ...tableRowProps, children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] }), _jsxs(TableRow, { ...tableRowProps, children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] }), _jsxs(TableRow, { ...tableRowProps, children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] }), _jsxs(TableRow, { ...tableRowProps, children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] }), _jsxs(TableRow, { ...tableRowProps, children: [_jsx(TableCell, { children: "Jamie Larson" }), _jsx(TableCell, { children: "jamie@example.com" })] })] }));
export default meta;
export const Default = {
    args: {
        children: tableRows
    },
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '600px' }, children: _story() }))]
};
export const WithHeader = {
    args: {
        header: tableHeader,
        children: tableRows
    }
};
export const WithPageTitle = {
    args: {
        pageTitle: 'This is a page title',
        children: tableRows
    }
};
export const WithRowAction = {
    args: {
        header: tableHeader,
        children: tableRows
    }
};
export const WithHint = {
    args: {
        header: tableHeader,
        children: tableRows,
        hint: 'This is a hint',
        hintSeparator: true
    }
};
export const Loading = {
    args: {
        header: tableHeader,
        children: tableRows,
        isLoading: true,
        hint: 'This is a hint',
        hintSeparator: true
    }
};
// Components for Sortable example
const SortableContainer = ({ setRef, isDragging, style, children, ...props }) => {
    const container = (_jsxs(TableRow, { ref: setRef, className: isDragging ? 'opacity-75' : '', style: style, hideActions: true, children: [(props.dragHandleAttributes || isDragging) && _jsx(TableCell, { className: 'w-10', children: _jsx(DragIndicator, { className: 'h-5', isDragging: isDragging || false, ...props }) }), children] }));
    if (isDragging) {
        return _jsx(Table, { children: container });
    }
    else {
        return container;
    }
};
const SortableItem = ({ id, item }) => {
    return (_jsxs(_Fragment, { children: [_jsxs(TableCell, { className: 'whitespace-nowrap', children: [id, "."] }), _jsx(TableCell, { className: 'w-full', children: item })] }));
};
const SortableTable = () => {
    const list = useSortableIndexedList({
        items: ['First', 'Second'],
        setItems: () => { },
        blank: '',
        canAddNewItem: () => false
    });
    return _jsx(SortableList, { container: props => _jsx(SortableContainer, { ...props }), items: list.items, renderItem: item => _jsx(SortableItem, { ...item }), wrapper: Table, onMove: list.moveItem });
};
/**
 * Example of combining Table and SortableList to create a sortable table.
 * This is a little complex as each type of container/item needs to be overridden
 * to end up with the correct table->tbody->tr->td structure.
 */
export const Sortable = {
    render: () => _jsx(SortableTable, {})
};
