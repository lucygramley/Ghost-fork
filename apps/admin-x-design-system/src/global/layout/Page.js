import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { TabList } from '../TabView';
import clsx from 'clsx';
import AppMenu from './AppMenu';
import GlobalActions from './GlobalActions';
import Button from '../Button';
import PageHeader from './PageHeader';
/**
 * The page component is the main container in Ghost Admin. It consists of a
 * page level toolbar (`pageToolbar` — unused ATM, it's for page level views and
 * navigation in the future), and the main content area.
 *
 * ### Examples
 * You can find several examples in the sidebar. If you're building a page for the
 * current Admin you can use the ["List in Current Admin"](/story/global-layout-page--example-current-admin-list)
 * example as a starting point. The rest of the examples are showing a potential direction for a
 * future structure.
 */
const Page = ({ fullBleedPage = true, mainContainerClassName, mainClassName, pageToolbarClassName, fullBleedToolbar = true, showAppMenu = false, showGlobalActions = false, customGlobalActions, breadCrumbs, pageTabs, selectedTab, onTabChange, children }) => {
    const handleTabChange = (e) => {
        const newTab = e.currentTarget.id;
        onTabChange(newTab);
    };
    if (pageTabs?.length && !selectedTab) {
        selectedTab = pageTabs[0].id;
    }
    const left = ((showAppMenu || breadCrumbs || pageTabs?.length) && _jsxs("div", { className: 'flex items-center gap-10', children: [showAppMenu && (_jsx(AppMenu, {})), breadCrumbs, pageTabs?.length && (_jsx(TabList, { border: false, buttonBorder: false, handleTabChange: handleTabChange, selectedTab: selectedTab, tabs: pageTabs, width: 'normal' }))] }));
    mainClassName = clsx('flex w-full flex-auto flex-col', mainClassName);
    const globalActions = ((customGlobalActions?.length || showGlobalActions) &&
        _jsxs("div", { className: 'sticky flex items-center gap-7', children: [(customGlobalActions?.map((action) => {
                    return (_jsx(Button, { icon: action.iconName, iconColorClass: 'text-black dark:text-white', size: 'sm', link: true, onClick: action.onClick }));
                })), showGlobalActions && _jsx(GlobalActions, {})] }));
    mainContainerClassName = clsx('flex h-[100vh] w-full flex-col overflow-y-auto overflow-x-hidden', !fullBleedPage && 'mx-auto max-w-7xl', mainContainerClassName);
    pageToolbarClassName = clsx('sticky top-0 z-50 flex h-22 min-h-[92px] w-full items-center justify-between gap-5 bg-white p-8 dark:bg-black', !fullBleedToolbar && 'mx-auto max-w-7xl', pageToolbarClassName);
    return (_jsxs("div", { className: mainContainerClassName, children: [(left || globalActions) &&
                _jsx(PageHeader, { containerClassName: pageToolbarClassName, left: left, right: globalActions }), _jsx("main", { className: mainClassName, children: children })] }));
};
export default Page;
