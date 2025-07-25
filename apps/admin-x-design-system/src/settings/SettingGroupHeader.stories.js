import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import ButtonGroup from '../global/ButtonGroup';
import SettingGroupHeader from './SettingGroupHeader';
import Heading from '../global/Heading';
const meta = {
    title: 'Settings / Setting Group / Header',
    component: SettingGroupHeader,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        title: 'Section group title',
        description: 'Section group description',
        children: _jsx(ButtonGroup, { buttons: [{ label: 'Edit', color: 'green' }], link: true })
    }
};
export const Editing = {
    args: {
        title: 'Section group title',
        description: 'Section group description',
        children: _jsx(ButtonGroup, { buttons: [
                { label: 'Cancel' },
                { label: 'Save', color: 'green' }
            ], link: true })
    }
};
export const CustomHeader = {
    args: {
        children: _jsxs(_Fragment, { children: [_jsxs("div", { className: 'flex flex-col', children: [_jsx(Heading, { level: 5, children: "Users" }), _jsxs("span", { className: 'mt-4 text-sm', children: ["Cristofer Vaccaro \u2014 ", _jsx("strong", { children: "Owner" })] }), _jsx("span", { className: 'text-xs text-grey-500', children: "cristofer@example.com" })] }), _jsx(ButtonGroup, { buttons: [{ label: 'Invite users', color: 'green' }], link: true })] })
    }
};
