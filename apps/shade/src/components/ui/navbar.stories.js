import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Bell, User } from 'lucide-react';
import { Navbar, NavbarActions } from './navbar';
import { Button } from './button';
import { PageMenu, PageMenuItem } from './pagemenu';
const meta = {
    title: 'Components / Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen'
    }
};
export default meta;
export const Default = {
    args: {
        className: 'py-8 px-6 border-none',
        children: (_jsxs(_Fragment, { children: [_jsxs(PageMenu, { defaultValue: 'overview', responsive: true, children: [_jsx(PageMenuItem, { value: "overview", children: "Overview" }), _jsx(PageMenuItem, { value: "web", children: "Web traffic" }), _jsx(PageMenuItem, { value: "newsletters", children: "Newsletters" }), _jsx(PageMenuItem, { value: "growth", children: "Growth" }), _jsx(PageMenuItem, { value: "locations", children: "Locations" })] }), _jsxs(NavbarActions, { children: [_jsxs(Button, { variant: 'outline', children: [_jsx(Bell, {}), " Notifications"] }), _jsxs(Button, { variant: 'outline', children: [_jsx(User, {}), " Log in"] })] })] }))
    }
};
