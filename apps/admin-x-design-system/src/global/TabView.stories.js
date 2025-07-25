import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import TabView from './TabView';
const meta = {
    title: 'Global / Tab view',
    component: TabView,
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(TabView, { ...args, onTabChange: (tab) => {
                updateArgs({ selectedTab: tab });
                args.onTabChange?.(tab);
            } });
    },
    tags: ['autodocs']
};
export default meta;
const tabs = [
    { id: 'tab-1', title: 'Tab one', contents: _jsx("div", { className: 'py-5', children: "Contents one" }) },
    { id: 'tab-2', title: 'Tab two', contents: _jsx("div", { className: 'py-5', children: "Contents two" }) },
    { id: 'tab-3', title: 'Tab three', contents: _jsx("div", { className: 'py-5', children: "Contents three" }) },
    { id: 'tab-4', title: 'Tab four', contents: _jsx("div", { className: 'py-5', children: "Contents one" }) },
    { id: 'tab-5', title: 'Tab five', contents: _jsx("div", { className: 'py-5', children: "Contents two" }) },
    { id: 'tab-6', title: 'Backstreet boys', contents: _jsx("div", { className: 'py-5', children: "Contents three" }) }
];
const tabsWithIcons = [
    { id: 'tab-1', title: 'Some items', icon: 'at-sign', contents: _jsx("div", { className: 'py-5', children: "Contents one" }) },
    { id: 'tab-2', title: 'Lots of items', icon: 'hamburger', contents: _jsx("div", { className: 'py-5', children: "Contents two" }) },
    { id: 'tab-3', title: 'No items', icon: 'laptop', contents: _jsx("div", { className: 'py-5', children: "Contents three" }) }
];
const tabsWithCounters = [
    { id: 'tab-1', title: 'Some items', counter: 4, contents: _jsx("div", { className: 'py-5', children: "Contents one" }) },
    { id: 'tab-2', title: 'Lots of items', counter: 12, contents: _jsx("div", { className: 'py-5', children: "Contents two" }) },
    { id: 'tab-3', title: 'No items', counter: 0, contents: _jsx("div", { className: 'py-5', children: "Contents three" }) }
];
export const Default = {
    args: {
        tabs: tabs,
        selectedTab: 'tab-2'
    }
};
export const NoBorder = {
    args: {
        tabs: tabs,
        border: false
    }
};
export const WithIcon = {
    args: {
        tabs: tabsWithIcons
    }
};
export const WithCounter = {
    args: {
        tabs: tabsWithCounters
    }
};
export const WithTopRightContent = {
    args: {
        tabs: tabs,
        topRightContent: _jsx("p", { children: "Some content" })
    }
};
