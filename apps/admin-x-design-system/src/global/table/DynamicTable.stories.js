import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import DynamicTable from './DynamicTable';
import Avatar from '../Avatar';
import Hint from '../Hint';
import Pagination from '../Pagination';
import Button from '../Button';
const meta = {
    title: 'Global / Table / Dynamic Table',
    component: DynamicTable,
    tags: ['autodocs'],
    excludeStories: ['testColumns', 'testRows']
};
export default meta;
export const testColumns = [
    {
        title: 'Member'
    },
    {
        title: 'Status'
    },
    {
        title: 'Open rate'
    },
    {
        title: 'Location',
        noWrap: true
    },
    {
        title: 'Created',
        noWrap: true
    },
    {
        title: 'Signed up on post',
        noWrap: true,
        maxWidth: '150px'
    },
    {
        title: 'Newsletter'
    },
    {
        title: 'Billing period'
    },
    {
        title: 'Email sent'
    },
    {
        title: '',
        hidden: true,
        disableRowClick: true
    }
];
export const testRows = (noOfRows) => {
    const data = [];
    for (let i = 0; i < noOfRows; i++) {
        data.push({
            onClick: () => {
                alert('Clicked on row: ' + i);
            },
            cells: [
                (_jsxs("div", { className: 'flex items-center gap-2', children: [i % 3 === 0 && _jsx(Avatar, { bgColor: 'green', label: 'JL', labelColor: 'white' }), i % 3 === 1 && _jsx(Avatar, { bgColor: 'orange', label: 'GS', labelColor: 'white' }), i % 3 === 2 && _jsx(Avatar, { bgColor: 'black', label: 'ZB', labelColor: 'white' }), _jsxs("div", { children: [i % 3 === 0 && _jsx("div", { className: 'whitespace-nowrap', children: "Jamie Larson" }), i % 3 === 1 && _jsx("div", { className: 'whitespace-nowrap', children: "Giana Septimus" }), i % 3 === 2 && _jsx("div", { className: 'whitespace-nowrap', children: "Zaire Bator" }), _jsx("div", { className: 'text-sm text-grey-700', children: "jamie@larson.com" })] })] })),
                'Free',
                '40%',
                'London, UK',
                '22 June 2023',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                'Subscribed',
                'Monthly',
                '1,303',
                _jsx(Button, { color: 'green', label: 'Edit', link: true, onClick: () => {
                        alert('Clicked Edit in row:' + i);
                    } })
            ]
        });
    }
    return data;
};
/**
 * In its simplest form this component lets you create a table with passing a
 * `columns` and `rows` parameter. You can customise each column's width, whether
 * it should wrap etc.
 */
export const Default = {
    args: {
        columns: testColumns,
        rows: testRows(10)
    }
};
export const HiddenHeader = {
    args: {
        columns: testColumns,
        rows: testRows(10),
        hideHeader: true
    }
};
export const NoBorder = {
    args: {
        columns: testColumns,
        rows: testRows(10),
        border: false
    }
};
/**
 * By default it's just a simple table but you can set its header or footer to
 * be sticky. In this case the container is `absolute` positioned with `inset-0`
 * so the size and layout of the table is completely controlled by its container.
 */
export const StickyHeader = {
    args: {
        stickyHeader: true,
        columns: testColumns,
        rows: testRows(40)
    }
};
export const StickyFooter = {
    args: {
        stickyFooter: true,
        footer: _jsx(Hint, { children: "Here we go" }),
        columns: testColumns,
        rows: testRows(40)
    }
};
export const AllSticky = {
    // render: () => (
    //     <DynamicTable columns={columns} footer={<Hint>Table footer</Hint>} rows={rows(40)} stickyFooter stickyHeader />
    // )
    args: {
        stickyHeader: true,
        stickyFooter: true,
        footer: _jsx(Hint, { children: "Here we go" }),
        columns: testColumns,
        rows: testRows(40)
    }
};
export const HalfPageExample = {
    decorators: [(_story) => (_jsx("div", { className: 'absolute inset-0 p-10', children: _jsxs("div", { className: 'flex h-full', children: [_jsxs("div", { className: 'w-1/2', children: [_jsx("h1", { className: 'mb-3', children: "Half page example" }), _jsx("p", { className: 'max-w-2xl pb-6', children: "This example shows how the table can positioned on the page by its container. You can enable this mode by setting `absolute=true` or by enabling `stickyHeader` or `stickyFooter` (in these cases the component switches to `display: absolute`)." }), _jsx("p", { className: 'max-w-2xl pb-6', children: "If you use the table like this, make sure to set the container to `display:relative`." })] }), _jsx("div", { className: 'relative h-1/2 flex-auto', id: 'componentContainer', children: _story() })] }) }))],
    args: {
        stickyHeader: true,
        stickyFooter: true,
        columns: testColumns,
        rows: testRows(40),
        footer: _jsx(Hint, { children: "This is a table footer" })
    }
};
export const FullPageExample = {
    decorators: [(_story) => (_jsx("div", { className: 'absolute inset-0 p-10', children: _jsxs("div", { className: 'flex h-full flex-col', children: [_jsx("h1", { className: 'mb-3', children: "Page title" }), _jsx("p", { className: 'max-w-2xl pb-6', children: "This example shows how you can create a page with arbitrary content on the top and a large table at the bottom that fills up the remaining space. The table has a sticky header row, a footer that is always visible and scrolling vertically and horizontally (resize the window to see the effect)." }), _jsxs("p", { className: 'max-w-2xl pb-6', children: ["The size and positioning of the table is completely controlled by its ", _jsx("strong", { children: "container" }), ". The container must have `relative` position. Use a column flexbox as the main container of the page then set the table container to flex-auto to fill the available horizontal space."] }), _jsx("div", { className: 'relative -mx-10 flex-auto', children: _story() })] }) }))],
    args: {
        stickyHeader: true,
        stickyFooter: true,
        columns: testColumns,
        rows: testRows(40),
        tableContainerClassName: 'px-10',
        footerClassName: 'mx-10',
        footer: _jsx(Hint, { children: "This is a table footer" })
    }
};
export const PaginationExample = {
    args: {
        columns: testColumns,
        rows: testRows(10),
        footer: _jsxs("div", { className: 'flex justify-between', children: [_jsx(Hint, { children: "Table footer comes here" }), _jsx(Pagination, { limit: 5, nextPage: () => { }, page: 1, pages: 5, prevPage: () => { }, setPage: () => { }, total: 15 })] })
    }
};
