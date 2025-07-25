import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PageMenu, PageMenuItem } from './pagemenu';
const meta = {
    title: 'Components/PageMenu',
    component: PageMenu,
    parameters: {
        layout: 'padded'
    },
    tags: ['autodocs'],
    argTypes: {
        responsive: {
            control: 'boolean',
            description: 'When true, items that do not fit horizontally are hidden in a dropdown'
        },
        value: {
            control: 'text',
            description: 'Currently selected item value'
        }
    }
};
export default meta;
// Basic story
export const Default = {
    render: args => (_jsxs(PageMenu, { ...args, children: [_jsx(PageMenuItem, { value: "overview", children: "Overview" }), _jsx(PageMenuItem, { value: "customers", children: "Customers" }), _jsx(PageMenuItem, { value: "issues", children: "Issues" }), _jsx(PageMenuItem, { value: "analytics", children: "Analytics" })] })),
    args: {
        responsive: false
    }
};
// Responsive story
export const Responsive = {
    render: args => (_jsxs("div", { className: "w-full rounded-lg border border-border p-4", children: [_jsx("h3", { className: "mb-3 text-sm font-medium", children: "Resize this container" }), _jsxs(PageMenu, { ...args, defaultValue: 'overview', children: [_jsx(PageMenuItem, { value: "overview", children: "Overview" }), _jsx(PageMenuItem, { value: "web", children: "Web traffic" }), _jsx(PageMenuItem, { value: "newsletters", children: "Newsletters" }), _jsx(PageMenuItem, { value: "growth", children: "Growth" }), _jsx(PageMenuItem, { value: "locations", children: "Locations" })] })] })),
    args: {
        responsive: true
    }
};
// Small container
export const SmallContainer = {
    render: args => (_jsxs("div", { className: "w-64 rounded-lg border border-border p-4", children: [_jsx("h3", { className: "mb-3 text-sm font-medium", children: "Small container" }), _jsxs(PageMenu, { ...args, value: "analytics", children: [_jsx(PageMenuItem, { value: "overview", children: "Overview" }), _jsx(PageMenuItem, { value: "customers", children: "Customers" }), _jsx(PageMenuItem, { value: "issues", children: "Issues" }), _jsx(PageMenuItem, { value: "analytics", children: "Analytics Service" }), _jsx(PageMenuItem, { value: "reports", children: "Reports" })] })] })),
    args: {
        responsive: true
    }
};
// Many items
export const ManyItems = {
    render: args => (_jsxs("div", { className: "w-full max-w-2xl rounded-lg border border-border p-4", children: [_jsx("h3", { className: "mb-3 text-sm font-medium", children: "Many items" }), _jsxs(PageMenu, { ...args, value: "item-5", children: [_jsx(PageMenuItem, { value: "item-1", children: "Menu Item 1" }), _jsx(PageMenuItem, { value: "item-2", children: "Menu Item 2" }), _jsx(PageMenuItem, { value: "item-3", children: "Menu Item 3" }), _jsx(PageMenuItem, { value: "item-4", children: "Menu Item 4" }), _jsx(PageMenuItem, { value: "item-5", children: "Menu Item 5" }), _jsx(PageMenuItem, { value: "item-6", children: "Menu Item 6" }), _jsx(PageMenuItem, { value: "item-7", children: "Menu Item 7" }), _jsx(PageMenuItem, { value: "item-8", children: "Menu Item 8" }), _jsx(PageMenuItem, { value: "item-9", children: "Menu Item 9" }), _jsx(PageMenuItem, { value: "item-10", children: "Menu Item 10" })] })] })),
    args: {
        responsive: true
    }
};
