import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import React from 'react';
import Heading from './Heading';
import Hint from './Hint';
import { LoadingIndicator } from './LoadingIndicator';
import Pagination from './Pagination';
import Separator from './Separator';
import TableRow from './TableRow';
const OptionalPagination = ({ pagination }) => {
    if (!pagination) {
        return null;
    }
    return _jsx(Pagination, { ...pagination });
};
const OptionalShowMore = ({ showMore }) => {
    if (!showMore) {
        return null;
    }
    else if (!showMore.hasMore) {
        return _jsx("div", {});
    }
    return (_jsx("div", { className: `mt-1 flex items-center gap-2 text-sm font-bold text-green hover:text-green-400`, children: _jsx("button", { type: 'button', onClick: showMore.loadMore, children: "Show all" }) }));
};
const Table = ({ header, children, borderTop, hint, hintSeparator, pageTitle, className, pagination, showMore, isLoading, fillContainer = false, horizontalScroll = false, paddingXClassName }) => {
    const table = React.useRef(null);
    const maxTableHeight = React.useRef(0);
    const [tableHeight, setTableHeight] = React.useState(undefined);
    const multiplePages = pagination && pagination.pages && pagination.pages > 1;
    // Observe the height of the table content. This is used to:
    // 1) avoid layout jumps when loading a new page of the table
    // 2) keep the same table height between pages, cf. https://github.com/TryGhost/Product/issues/3881
    React.useEffect(() => {
        if (table.current) {
            const resizeObserver = new ResizeObserver((entries) => {
                const height = entries[0].target.clientHeight;
                setTableHeight(height);
                if (height > maxTableHeight.current) {
                    maxTableHeight.current = height;
                }
            });
            resizeObserver.observe(table.current);
            return () => {
                resizeObserver.disconnect();
            };
        }
    }, [isLoading, pagination]);
    const loadingStyle = React.useMemo(() => {
        if (tableHeight === undefined) {
            return {
                height: 'auto'
            };
        }
        return {
            height: maxTableHeight.current
        };
    }, [tableHeight]);
    const spaceHeightStyle = React.useMemo(() => {
        if (tableHeight === undefined) {
            return {
                height: 0
            };
        }
        return {
            height: maxTableHeight.current - tableHeight
        };
    }, [tableHeight]);
    const headerClasses = clsx('h-9 border-b border-grey-200 dark:border-grey-600');
    /**
     * To have full-bleed scroll try this:
     * - unset width of table
     * - set minWidth of table to 100%
     * - set side padding of table to 40px
     * - unset tableContainer width
     * - set minWidth of tableContainer to 100%
     * - unset mainContainer width
     * - set minWidth of mainContainer to 100%
     * - set side margins of outer container to -40px
     * - set footer side paddings to 40px
     */
    const tableClasses = clsx('w-full', fillContainer ? 'min-w-full' : 'w-full', (borderTop || pageTitle) && 'border-t border-grey-300', pageTitle ? 'mb-0 mt-14' : 'my-0', className);
    const mainContainerClasses = clsx(horizontalScroll ? 'overflow-x-auto' : '', fillContainer ? 'absolute inset-0 min-w-full' : 'w-full');
    const tableContainerClasses = clsx(fillContainer ? 'max-h-[calc(100%-38px)] w-full overflow-y-auto' : 'w-full', paddingXClassName);
    const footerClasses = clsx('sticky bottom-0 -mt-px bg-white pb-3 dark:bg-black', paddingXClassName);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: mainContainerClasses, children: [pageTitle && _jsx(Heading, { children: pageTitle }), _jsx("div", { className: tableContainerClasses, children: _jsxs("table", { className: tableClasses, children: [header && _jsx("thead", { className: headerClasses, children: _jsx(TableRow, { bgOnHover: false, separator: false, children: header }) }), !isLoading && _jsx("tbody", { ref: table, children: children }), multiplePages && _jsx("div", { style: spaceHeightStyle })] }) }), isLoading && _jsx("div", { className: 'p-5', children: _jsx(LoadingIndicator, { delay: 200, size: 'lg', style: loadingStyle }) }), (hint || pagination || showMore) &&
                    _jsxs("footer", { className: footerClasses, children: [(hintSeparator || pagination) && _jsx(Separator, {}), _jsxs("div", { className: "mt-1 flex flex-col-reverse items-start justify-between gap-1 pt-2 md:flex-row md:items-center md:gap-0 md:pt-0", children: [_jsx(OptionalShowMore, { showMore: showMore }), _jsx(Hint, { children: hint ?? ' ' }), _jsx(OptionalPagination, { pagination: pagination })] })] })] }) }));
};
export default Table;
