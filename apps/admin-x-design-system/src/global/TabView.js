import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as TabsPrimitive from '@radix-ui/react-tabs';
import clsx from 'clsx';
import Icon from './Icon';
export const TabButton = ({ id, title, onClick, border, icon, counter }) => {
    return (_jsxs(TabsPrimitive.Trigger, { className: clsx('-m-b-px cursor-pointer appearance-none whitespace-nowrap py-1 text-md font-semibold text-grey-700 transition-all after:invisible after:block after:h-px after:overflow-hidden after:font-bold after:text-transparent after:content-[attr(title)] data-[state=active]:text-black dark:text-white [&>span]:data-[state=active]:text-black [&>span]:data-[state=active]:dark:text-white', border && 'border-b-2 border-transparent hover:border-grey-500 data-[state=active]:border-black data-[state=active]:dark:border-white data-[state=active]:dark:text-white'), id: id, role: 'tab', title: title, value: id, onClick: onClick, children: [icon && _jsx(Icon, { className: 'mb-0.5 mr-1.5 inline', name: icon, size: 'sm' }), title, (typeof counter === 'number') &&
                _jsx("span", { className: 'ml-1.5 rounded-full bg-grey-200 px-1.5 py-[2px] text-xs font-medium text-grey-800 dark:bg-grey-900 dark:text-grey-300', children: new Intl.NumberFormat().format(counter) })] }));
};
export const TabList = ({ tabs, width = 'normal', handleTabChange, border, buttonBorder, topRightContent, stickyHeader }) => {
    const containerClasses = clsx('no-scrollbar mb-px flex w-full overflow-x-auto', width === 'narrow' && 'gap-3', width === 'normal' && 'gap-5', width === 'wide' && 'gap-7', border && 'border-b border-grey-300 dark:border-grey-900');
    return (_jsx(TabsPrimitive.List, { className: `${stickyHeader ? 'sticky top-0 z-50 bg-white dark:bg-black' : ''}`, children: _jsxs("div", { className: containerClasses, role: 'tablist', children: [tabs.map(tab => (_jsx("div", { children: _jsx(TabButton, { border: buttonBorder, counter: tab.counter, icon: tab.icon, id: tab.id, title: tab.title, onClick: handleTabChange }) }))), topRightContent !== null ?
                    _jsx("div", { className: 'ml-auto', children: topRightContent }) :
                    null] }) }));
};
function TabView({ testId, tabs, onTabChange, selectedTab, border = true, buttonBorder = border, width = 'normal', containerClassName, topRightContent, stickyHeader }) {
    if (tabs.length !== 0 && selectedTab === undefined) {
        selectedTab = tabs[0].id;
    }
    if (tabs.length === 0) {
        return (_jsx(_Fragment, {}));
    }
    const handleTabChange = (e) => {
        const newTab = e.currentTarget.id;
        onTabChange(newTab);
    };
    return (_jsxs(TabsPrimitive.Root, { className: containerClassName, "data-testid": testId, value: selectedTab, children: [_jsx(TabList, { border: border, buttonBorder: buttonBorder, handleTabChange: handleTabChange, selectedTab: selectedTab, stickyHeader: stickyHeader, tabs: tabs, topRightContent: topRightContent, width: width }), tabs.map((tab) => {
                return (_jsx(TabsPrimitive.Content, { className: tab.tabWrapperClassName, value: tab.id, children: _jsx("div", { className: tab.containerClassName, children: tab.contents }) }));
            })] }));
}
;
export default TabView;
