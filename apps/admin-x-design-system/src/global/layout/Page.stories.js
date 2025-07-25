import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import Page from './Page';
import ViewContainer from './ViewContainer';
import { testColumns, testRows } from '../table/DynamicTable.stories';
import { exampleActions as exampleActionButtons } from './ViewContainer.stories';
import DynamicTable from '../table/DynamicTable';
import Hint from '../Hint';
import Heading from '../Heading';
import { tableRowHoverBgClasses } from '../TableRow';
import Breadcrumbs from '../Breadcrumbs';
import Avatar from '../Avatar';
import Button from '../Button';
import { Toggle } from '../..';
const meta = {
    title: 'Global / Layout / Page',
    component: Page,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    },
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(Page, { ...args, onTabChange: (tab) => {
                updateArgs({ selectedTab: tab });
                args.onTabChange?.(tab);
            } });
    }
};
export default meta;
const dummyContent = _jsx("div", { className: 'w-full bg-grey-100 p-5 text-center', children: "Placeholder content" });
const customGlobalActions = [
    {
        iconName: 'heart',
        onClick: () => {
            alert('Clicked on custom action');
        }
    }
];
const pageTabs = [
    {
        id: 'active',
        title: 'Active'
    },
    {
        id: 'archive',
        title: 'Archive'
    }
];
export const Default = {
    args: {
        pageTabs: pageTabs,
        children: dummyContent
    }
};
export const LimitToolbarWidth = {
    args: {
        pageTabs: pageTabs,
        children: dummyContent,
        fullBleedToolbar: false
    }
};
export const WithHamburger = {
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        children: dummyContent
    }
};
export const WithGlobalActions = {
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: dummyContent
    }
};
export const CustomGlobalActions = {
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: dummyContent,
        customGlobalActions: customGlobalActions
    }
};
const currentAdminExample = _jsx(ViewContainer, { title: 'Members', type: 'page', children: _jsx(DynamicTable, { columns: testColumns, pageHasSidebar: false, rows: testRows(100) }) });
export const ExampleCurrentAdminList = {
    name: 'Example: List in Current Admin',
    args: {
        children: currentAdminExample
    }
};
const simpleList = _jsx(ViewContainer, { firstOnPage: false, title: 'Members', type: 'page', children: _jsx(DynamicTable, { columns: testColumns, footer: _jsx(Hint, { children: "Just a regular table footer" }), pageHasSidebar: false, rows: testRows(100) }) });
export const ExampleSimpleList = {
    name: 'Example: Simple List',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: simpleList
    }
};
const stickyList = _jsx(ViewContainer, { firstOnPage: false, title: 'Members', type: 'page', children: _jsx(DynamicTable, { columns: testColumns, footer: _jsx(Hint, { children: "Sticky footer" }), pageHasSidebar: false, rows: testRows(40), stickyFooter: true, stickyHeader: true }) });
export const ExampleStickyList = {
    name: 'Example: Sticky Header/Footer List',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: stickyList
    }
};
const examplePrimaryAction = _jsx(ViewContainer, { firstOnPage: false, primaryAction: {
        title: 'Add member',
        color: 'black',
        onClick: () => {
            alert('Clicked primary action');
        }
    }, title: 'Members', type: 'page', children: _jsx(DynamicTable, { columns: testColumns, footer: _jsx(Hint, { children: "Sticky footer" }), pageHasSidebar: false, rows: testRows(40), stickyFooter: true, stickyHeader: true }) });
export const ExamplePrimaryAction = {
    name: 'Example: Primary Action',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: examplePrimaryAction
    }
};
const exampleActionsContent = _jsx(ViewContainer, { actions: exampleActionButtons, firstOnPage: false, primaryAction: {
        title: 'Add member',
        icon: 'add',
        color: 'black',
        onClick: () => {
            alert('Clicked primary action');
        }
    }, title: 'Members', type: 'page', children: _jsx(DynamicTable, { columns: testColumns, footer: _jsx(Hint, { children: "Sticky footer" }), pageHasSidebar: false, rows: testRows(40), stickyFooter: true, stickyHeader: true }) });
export const ExampleActions = {
    name: 'Example: Custom Actions',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: exampleActionsContent
    }
};
const mockIdeaCards = () => {
    const cards = [];
    for (let i = 0; i < 11; i++) {
        cards.push(_jsxs("div", { className: 'min-h-[30vh] rounded-sm bg-grey-100 p-7 transition-all hover:bg-grey-200', children: [_jsxs(Heading, { level: 5, children: [i % 3 === 0 && 'Sunset drinks cruise eat sleep repeat', i % 3 === 1 && 'Elegance Rolls Royce on my private jet', i % 3 === 2 && 'Down to the wire Bathurst 5000 Le Tour'] }), _jsxs("div", { className: 'mt-4', children: [i % 3 === 0 && 'Numea captain’s table crystal waters paradise island the scenic route great adventure. Pirate speak the road less travelled seas the day ', i % 3 === 1 && 'Another day in paradise cruise life adventure bound gap year cruise time languid afternoons let the sea set you free', i % 3 === 2 && _jsx("span", { className: 'text-grey-500', children: "No body text" })] })] }));
    }
    return cards;
};
const exampleCardViewContent = (_jsx(ViewContainer, { actions: exampleActionButtons, firstOnPage: false, primaryAction: {
        title: 'New idea',
        icon: 'add'
    }, title: 'Ideas', type: 'page', children: _jsx("div", { className: 'grid grid-cols-2 gap-7 py-7 tablet:grid-cols-4', children: mockIdeaCards() }) }));
export const ExampleCardView = {
    name: 'Example: Card View',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: exampleCardViewContent
    }
};
const mockPosts = () => {
    const posts = [];
    for (let i = 0; i < 11; i++) {
        posts.push(_jsxs("div", { className: `group grid grid-cols-[96px_auto_120px_120px_60px] items-center gap-7 border-b border-grey-200 py-5 ${tableRowHoverBgClasses}`, children: [_jsx("div", { className: 'flex h-24 w-24 items-center justify-center rounded-sm bg-grey-100' }), _jsx("div", { className: 'overflow-hidden', children: _jsxs("div", { className: 'flex flex-col', children: [_jsxs(Heading, { className: 'truncate', level: 5, children: [i % 3 === 0 && 'Sunset drinks cruise eat sleep repeat', i % 3 === 1 && 'Elegance Rolls Royce on my private jet', i % 3 === 2 && 'Down to the wire Bathurst 5000 Le Tour'] }), _jsxs("div", { className: 'truncate', children: [i % 3 === 0 && 'Numea captain’s table crystal waters paradise island the scenic route great adventure. Pirate speak the road less travelled seas the day ', i % 3 === 1 && 'Another day in paradise cruise life adventure bound gap year cruise time languid afternoons let the sea set you free', i % 3 === 2 && 'Grand Prix gamble responsibly intensity is not a perfume The Datsun 180B Aerial ping pong knock for six watch with the boys total hospital pass.'] })] }) }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("strong", { children: "15%" }), "viewed"] }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("strong", { children: "55%" }), "opened"] }), _jsx("div", { className: 'flex justify-end pr-7', children: _jsx(Button, { className: 'group-hover:bg-grey-200', icon: 'ellipsis' }) })] }));
    }
    return posts;
};
const examplePostsContent = (_jsx(ViewContainer, { actions: exampleActionButtons, firstOnPage: false, primaryAction: {
        title: 'New post',
        icon: 'add'
    }, title: 'Posts', type: 'page', children: _jsx("div", { className: 'mb-10', children: _jsx(_Fragment, { children: mockPosts() }) }) }));
export const ExampleAlternativeList = {
    name: 'Example: Alternative List',
    args: {
        pageTabs: pageTabs,
        showAppMenu: true,
        showGlobalActions: true,
        children: examplePostsContent
    }
};
export const ExampleDetailScreen = {
    name: 'Example: Detail Page',
    args: {
        showAppMenu: true,
        breadCrumbs: _jsx(Breadcrumbs, { items: [
                {
                    label: 'Members',
                    onClick: () => {
                        alert('Clicked back');
                    }
                },
                {
                    label: 'Emerson Vaccaro'
                }
            ], backIcon: true }),
        showGlobalActions: true,
        children: _jsx(_Fragment, { children: _jsxs(ViewContainer, { firstOnPage: false, headerContent: _jsxs("div", { children: [_jsx(Avatar, { bgColor: '#A5D5F7', label: 'EV', labelColor: 'white', size: 'xl' }), _jsx(Heading, { className: 'mt-2', level: 1, children: "Emerson Vaccaro" }), _jsx("div", { className: '', children: "Colombus, OH" })] }), primaryAction: {
                    icon: 'ellipsis',
                    color: 'outline'
                }, type: 'page', children: [_jsxs("div", { className: 'grid grid-cols-3 border-b border-grey-200 pb-5 tablet:grid-cols-4', children: [_jsxs("div", { className: 'col-span-3 -ml-5 mb-5 hidden h-full gap-4 px-5 tablet:col-span-1 tablet:mb-0 tablet:!flex tablet:flex-col tablet:gap-0', children: [_jsxs("span", { children: ["Last seen on ", _jsx("strong", { children: "22 June 2023" })] }), _jsxs("span", { className: 'tablet:mt-2', children: ["Created on ", _jsx("strong", { children: "27 Jan 2021" })] })] }), _jsxs("div", { className: 'flex h-full flex-col tablet:px-5', children: [_jsx(Heading, { level: 6, children: "Emails received" }), _jsx("span", { className: 'mt-1 text-4xl font-bold leading-none', children: "181" })] }), _jsxs("div", { className: 'flex h-full flex-col tablet:px-5', children: [_jsx(Heading, { level: 6, children: "Emails opened" }), _jsx("span", { className: 'mt-1 text-4xl font-bold leading-none', children: "104" })] }), _jsxs("div", { className: '-mr-5 flex h-full flex-col tablet:px-5', children: [_jsx(Heading, { level: 6, children: "Average open rate" }), _jsx("span", { className: 'mt-1 text-4xl font-bold leading-none', children: "57%" })] })] }), _jsxs("div", { className: 'grid grid-cols-2 items-baseline border-b border-grey-200 py-5 tablet:grid-cols-4', children: [_jsxs("div", { className: '-ml-5 flex h-full flex-col gap-6 border-r border-grey-200 px-5', children: [_jsxs("div", { className: 'flex justify-between', children: [_jsx(Heading, { level: 5, children: "Member data" }), _jsx(Button, { color: 'green', label: 'Edit', link: true })] }), _jsxs("div", { children: [_jsx(Heading, { level: 6, children: "Name" }), _jsx("div", { children: "Emerson Vaccaro" })] }), _jsxs("div", { children: [_jsx(Heading, { level: 6, children: "Email" }), _jsx("div", { children: "emerson@vaccaro.com" })] }), _jsxs("div", { children: [_jsx(Heading, { level: 6, children: "Labels" }), _jsxs("div", { className: 'mt-2 flex gap-1', children: [_jsx("div", { className: 'inline-block rounded-sm bg-grey-200 px-1.5 text-xs font-medium', children: "VIP" }), _jsx("div", { className: 'inline-block rounded-sm bg-grey-200 px-1.5 text-xs font-medium', children: "Inner Circle" })] })] }), _jsxs("div", { children: [_jsx(Heading, { level: 6, children: "Notes" }), _jsx("div", { className: 'text-grey-500', children: "No notes." })] })] }), _jsxs("div", { className: 'flex h-full flex-col gap-6 border-grey-200 px-5 tablet:border-r', children: [_jsx(Heading, { level: 5, children: "Newsletters" }), _jsxs("div", { className: 'flex flex-col gap-3', children: [_jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Toggle, {}), _jsx("span", { children: "Daily news" })] }), _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Toggle, {}), _jsx("span", { children: "Weekly roundup" })] }), _jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Toggle, { checked: true }), _jsx("span", { children: "The Inner Circle" })] }), _jsx("div", { className: 'mt-5 rounded border border-red p-4 text-sm text-red', children: "This member cannot receive emails due to permanent failure (bounce)." })] })] }), _jsxs("div", { className: '-ml-5 flex h-full flex-col gap-6 border-r border-grey-200 px-5 pt-10 tablet:ml-0 tablet:pt-0', children: [_jsx(Heading, { level: 5, children: "Subscriptions" }), _jsxs("div", { className: 'flex items-center gap-3', children: [_jsxs("div", { className: 'flex h-16 w-16 flex-col items-center justify-center rounded-md bg-grey-200', children: [_jsx(Heading, { level: 5, children: "$5" }), _jsx("span", { className: 'text-xs text-grey-700', children: "Yearly" })] }), _jsxs("div", { className: 'flex flex-col', children: [_jsx("span", { className: 'font-semibold', children: "Gold" }), _jsx("span", { className: 'text-sm text-grey-500', children: "Renews 21 Jan 2024" })] })] })] }), _jsxs("div", { className: '-mr-5 flex h-full flex-col gap-6 px-5 pt-10 tablet:pt-0', children: [_jsxs("div", { className: 'flex justify-between', children: [_jsx(Heading, { level: 5, children: "Activity" }), _jsx(Button, { color: 'green', label: 'View all', link: true })] }), _jsxs("div", { className: 'flex flex-col text-sm', children: [_jsx("span", { className: 'font-semibold', children: "Logged in" }), _jsx("span", { className: 'text-sm text-grey-500', children: "13 days ago" })] }), _jsxs("div", { className: 'flex flex-col text-sm', children: [_jsx("span", { className: 'font-semibold', children: "Subscribed to Daily News" }), _jsx("span", { className: 'text-sm text-grey-500', children: "17 days ago" })] }), _jsxs("div", { className: 'flex flex-col text-sm', children: [_jsx("span", { className: 'font-semibold', children: "Logged in" }), _jsx("span", { className: 'text-sm text-grey-500', children: "21 days ago" })] })] })] })] }) })
    }
};
