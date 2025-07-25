import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Heading } from '../..';
import clsx from 'clsx';
import { tableRowHoverBgClasses } from '../TableRow';
const DynamicTable = ({ columns, rows, horizontalScrolling = false, absolute = false, stickyHeader = false, hideHeader = false, headerBorder = true, border = true, footer, footerBorder = true, stickyFooter = false, singlePageTable = false, pageHasSidebar = true, containerClassName, tableContainerClassName, tableClassName, thClassName, tdClassName, cellClassName, trClassName, footerClassName }) => {
    let headerColID = 0;
    let rowID = 0;
    containerClassName = clsx('flex max-h-full w-full flex-col', (stickyHeader || stickyFooter || absolute) ? 'absolute inset-0' : 'relative', containerClassName);
    tableContainerClassName = clsx('flex-auto overflow-x-auto', !horizontalScrolling && 'w-full max-w-full', (singlePageTable && (stickyHeader || stickyFooter || absolute)) && `px-[4vw] tablet:px-12 ${pageHasSidebar ? 'min-[1640px]:px-[calc((100%-1320px)/2+48px)]' : 'xl:px-[calc((100%-1320px)/2+48px)]'}`, tableContainerClassName);
    tableClassName = clsx('h-full max-h-full min-w-full flex-auto table-fixed', tableClassName);
    thClassName = clsx('last-child:pr-5 bg-white py-3 text-left dark:bg-black [&:not(:first-child)]:pl-5', thClassName);
    tdClassName = clsx('dark:group-hover:border-grey-900 w-full border-b group-hover:border-grey-200', border ? 'border-grey-200 dark:border-grey-900' : 'border-transparent', tdClassName);
    cellClassName = clsx('flex h-full py-4', cellClassName);
    trClassName = clsx('group', tableRowHoverBgClasses, trClassName);
    footerClassName = clsx('bg-white dark:bg-black', (singlePageTable && stickyFooter) && `mx-[4vw] tablet:mx-12 ${pageHasSidebar ? 'min-[1640px]:mx-[calc((100%-1320px)/2+48px)]' : 'xl:mx-[calc((100%-1320px)/2+48px)]'}`, footer && 'py-4', stickyFooter && 'sticky inset-x-0 bottom-0', footerBorder && 'border-t border-grey-200 dark:border-grey-900', footerClassName);
    const footerContents = _jsx("footer", { className: footerClassName, children: footer });
    return (
    // Outer container for testing. Should not be part of the table component
    // <div className='h-[40vh]'>
    _jsxs("div", { className: containerClassName, children: [_jsxs("div", { className: tableContainerClassName, children: [_jsxs("table", { className: tableClassName, children: [!hideHeader &&
                                _jsxs("thead", { className: stickyHeader ? 'sticky top-0' : '', children: [_jsx("tr", { children: columns.map((column) => {
                                                headerColID = headerColID + 1;
                                                const thMaxWidth = column.maxWidth || 'auto';
                                                const thMinWidth = column.minWidth || 'auto';
                                                const thStyles = {
                                                    maxWidth: thMaxWidth,
                                                    minWidth: thMinWidth,
                                                    width: thMaxWidth
                                                };
                                                return (_jsx("th", { className: thClassName, style: thStyles, children: _jsx(Heading, { className: 'truncate', level: 6, children: column.title }) }, 'head-' + headerColID));
                                            }) }), headerBorder && (_jsx("tr", { children: _jsx("th", { className: 'h-px bg-grey-200 p-0 dark:bg-grey-900', colSpan: columns.length }) }))] }), _jsx("tbody", { children: rows.map((row) => {
                                    let colID = 0;
                                    rowID = rowID + 1;
                                    return _jsx("tr", { className: trClassName, children: row.cells.map((cell) => {
                                            const currentColumn = columns[colID] || { title: '' };
                                            let customTdClasses = tdClassName;
                                            customTdClasses = clsx(customTdClasses, 
                                            // currentColumn.noWrap ? 'truncate' : '',
                                            currentColumn.align === 'center' && 'text-center', currentColumn.align === 'right' && 'text-right');
                                            if (rowID === rows.length && footerBorder) {
                                                customTdClasses = clsx(customTdClasses, 'border-none');
                                            }
                                            const tdMaxWidth = (currentColumn !== undefined && currentColumn.maxWidth) || 'auto';
                                            const tdMinWidth = (currentColumn !== undefined && currentColumn.minWidth) || 'auto';
                                            const tdStyles = {
                                                maxWidth: tdMaxWidth,
                                                minWidth: tdMinWidth,
                                                width: tdMaxWidth
                                            };
                                            let customCellClasses = cellClassName;
                                            customCellClasses = clsx(customCellClasses, colID !== 0 && 'pl-5', (colID === columns.length - 1) && 'pr-5', currentColumn.noWrap ? 'truncate' : '', currentColumn.valign === 'middle' || !currentColumn.valign && 'items-center', currentColumn.valign === 'top' && 'items-start', currentColumn.valign === 'bottom' && 'items-end');
                                            if (row.onClick && !currentColumn.disableRowClick) {
                                                customCellClasses = clsx(customCellClasses, 'cursor-pointer');
                                            }
                                            if (currentColumn.hidden) {
                                                customCellClasses = clsx(customCellClasses, 'opacity-0 group-hover:opacity-100');
                                            }
                                            const data = (_jsx("td", { className: customTdClasses, style: tdStyles, children: _jsx("div", { className: customCellClasses, onClick: (row.onClick && !currentColumn.disableRowClick) ? row.onClick : (() => { }), children: cell }) }, colID));
                                            colID = colID + 1;
                                            return data;
                                        }) }, 'row-' + rowID);
                                }) })] }), !stickyFooter && footerContents] }), stickyFooter && footerContents] })
    // </div>
    );
};
export default DynamicTable;
