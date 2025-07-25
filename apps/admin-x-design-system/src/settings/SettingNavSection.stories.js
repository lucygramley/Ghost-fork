import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import SettingNavItem from './SettingNavItem';
import SettingNavSection from './SettingNavSection';
import { Default as DefaultNavItem } from './SettingNavItem.stories';
const meta = {
    title: 'Settings / Sidebar Navigation Section',
    component: SettingNavSection,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        title: 'Setting section',
        children: _jsxs(_Fragment, { children: [_jsx(SettingNavItem, { ...DefaultNavItem.args }), _jsx(SettingNavItem, { ...DefaultNavItem.args }), _jsx(SettingNavItem, { ...DefaultNavItem.args }), _jsx(SettingNavItem, { ...DefaultNavItem.args }), _jsx(SettingNavItem, { ...DefaultNavItem.args })] })
    }
};
