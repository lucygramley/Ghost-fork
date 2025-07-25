import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as SettingGroupStories from './SettingGroup.stories';
import SettingGroup from './SettingGroup';
import SettingSection from './SettingSection';
const meta = {
    title: 'Settings / Setting Section',
    component: SettingSection,
    tags: ['autodocs'],
    decorators: [(_story) => _jsx("div", { style: { maxWidth: '780px' }, children: _story() })]
};
export default meta;
export const Default = {
    args: {
        title: 'Section header',
        children: _jsxs(_Fragment, { children: [_jsx(SettingGroup, { ...SettingGroupStories.SingleColumn.args }), _jsx(SettingGroup, { ...SettingGroupStories.Editing.args }), _jsx(SettingGroup, { ...SettingGroupStories.Unsaved.args })] })
    }
};
