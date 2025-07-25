import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { TabList } from '../TabView';
import Heading from '../Heading';
import clsx from 'clsx';
import Button from '../Button';
import DynamicTable from '../table/DynamicTable';
/**
 * The `ViewContainer` component is a generic container for either the complete
 * contents of a page (`type = 'page'`) or for individual sections on a
 * page, like blocks on a dashboard (`type = 'section'`). It has a bunch of
 * parameters to customise its look & feel.
 */
const ViewContainer = ({ type, title, firstOnPage = true, headerContent, stickyHeader = true, tabs, selectedTab, onTabChange, mainContainerClassName, toolbarWrapperClassName, toolbarContainerClassName, toolbarLeftClassName, primaryAction, actions, actionsClassName, actionsHidden, toolbarBorder = true, contentWrapperClassName, contentFullBleed = false, children }) => {
    let toolbar = _jsx(_Fragment, {});
    let mainContent = _jsx(_Fragment, {});
    const handleTabChange = (e) => {
        const newTab = e.currentTarget.id;
        onTabChange(newTab);
    };
    let isSingleDynamicTable;
    let singleDynamicTableIsSticky = false;
    if (tabs?.length && !children) {
        if (!selectedTab) {
            selectedTab = tabs[0].id;
        }
        mainContent = _jsx(_Fragment, { children: tabs.map((tab) => {
                return (_jsx(_Fragment, { children: tab.contents &&
                        _jsx("div", { className: `${selectedTab === tab.id ? 'block' : 'hidden'}`, role: 'tabpanel', children: _jsx("div", { children: tab.contents }) }, tab.id) }));
            }) });
    }
    else if (React.isValidElement(children) && children.type === DynamicTable) {
        isSingleDynamicTable = true;
        const dynTable = children;
        if (dynTable.props.stickyHeader || dynTable.props.stickyFooter) {
            singleDynamicTableIsSticky = true;
            children = isSingleDynamicTable
                ? React.cloneElement(dynTable, {
                    ...dynTable.props,
                    singlePageTable: true
                })
                : children;
        }
        mainContent = children;
    }
    else {
        mainContent = children;
    }
    toolbarWrapperClassName = clsx('z-50', type === 'page' && 'mx-auto w-full max-w-7xl bg-white px-[4vw] tablet:px-12 dark:bg-black', (type === 'page' && stickyHeader) && (firstOnPage ? 'sticky top-0 pt-8' : 'sticky top-22 pt-[3vmin]'), toolbarContainerClassName);
    toolbarContainerClassName = clsx('flex justify-between gap-5', (type === 'page' && actions?.length) ? (tabs?.length ? 'flex-col md:flex-row md:items-start' : 'flex-col md:flex-row md:items-end') : 'items-end', (firstOnPage && type === 'page' && !tabs?.length) ? 'pb-3 tablet:pb-8' : (tabs?.length ? '' : 'pb-2'), toolbarBorder && 'border-b border-grey-200 dark:border-grey-900', toolbarContainerClassName);
    toolbarLeftClassName = clsx('flex flex-col', toolbarLeftClassName);
    actionsClassName = clsx('flex items-center justify-between gap-3 transition-all tablet:justify-start tablet:gap-5', actionsHidden && 'opacity-0 group-hover/view-container:opacity-100', tabs?.length ? 'pb-1' : (type === 'page' ? 'pb-1' : ''), actionsClassName);
    const primaryActionContents = _jsx(_Fragment, { children: (primaryAction?.title || primaryAction?.icon) && (_jsx(Button, { className: primaryAction.className, color: primaryAction.color || 'black', icon: primaryAction.icon, label: primaryAction.title, size: type === 'page' ? 'md' : 'sm', onClick: primaryAction.onClick })) });
    const headingClassName = clsx(tabs?.length && 'pb-3', type === 'page' && '-mt-2');
    toolbar = (_jsx("div", { className: toolbarWrapperClassName, children: _jsxs("div", { className: toolbarContainerClassName, children: [_jsxs("div", { className: toolbarLeftClassName, children: [headerContent, title && _jsx(Heading, { className: headingClassName, level: type === 'page' ? 1 : 4, children: title }), tabs?.length && (_jsx(TabList, { border: false, buttonBorder: true, handleTabChange: handleTabChange, selectedTab: selectedTab, tabs: tabs, width: 'normal' }))] }), _jsxs("div", { className: actionsClassName, children: [actions, primaryActionContents] })] }) }));
    mainContainerClassName = clsx('group/view-container flex flex-auto flex-col', mainContainerClassName);
    if (singleDynamicTableIsSticky) {
        contentFullBleed = true;
    }
    contentWrapperClassName = clsx('relative mx-auto w-full flex-auto', (!contentFullBleed && type === 'page') && 'max-w-7xl px-[4vw] tablet:px-12', contentWrapperClassName, (!title && !actions) && 'pt-[3vmin]');
    return (_jsxs("section", { className: mainContainerClassName, children: [(title || actions || headerContent || tabs) && toolbar, _jsx("div", { className: contentWrapperClassName, children: mainContent })] }));
};
export default ViewContainer;
