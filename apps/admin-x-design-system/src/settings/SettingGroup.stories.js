import { jsx as _jsx } from "react/jsx-runtime";
import * as SettingGroupContentStories from './SettingGroupContent.stories';
import * as SettingGroupHeaderStories from './SettingGroupHeader.stories';
import ButtonGroup from '../global/ButtonGroup';
import SettingGroup from './SettingGroup';
import SettingGroupContent from './SettingGroupContent';
import SettingGroupHeader from './SettingGroupHeader';
const meta = {
    title: 'Settings / Setting Group',
    component: SettingGroup,
    tags: ['autodocs'],
    decorators: [(_story) => _jsx("div", { style: { maxWidth: '780px' }, children: _story() })],
    argTypes: {
        description: {
            control: 'text'
        }
    }
};
export default meta;
const customButtons = _jsx(ButtonGroup, { buttons: [{ label: 'My action', color: 'green' }], link: true });
const customHeader = _jsx(SettingGroupHeader, { ...SettingGroupHeaderStories.CustomHeader.args });
const singleColContent = _jsx(SettingGroupContent, { ...SettingGroupContentStories.SingleColumn.args });
const twoColView = _jsx(SettingGroupContent, { ...SettingGroupContentStories.TwoColumns.args });
const twoColEdit = _jsx(SettingGroupContent, { ...SettingGroupContentStories.Editing.args });
export const SingleColumn = {
    args: {
        title: 'Setting title',
        description: 'Setting description',
        children: singleColContent
    }
};
export const TwoColumns = {
    args: {
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        children: twoColView
    }
};
export const Editing = {
    args: {
        isEditing: true,
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        children: twoColEdit
    }
};
export const Unsaved = {
    args: {
        isEditing: true,
        saveState: 'unsaved',
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        children: twoColEdit
    }
};
export const CustomActions = {
    args: {
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        customButtons: customButtons
    }
};
export const CustomHeader = {
    args: {
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        customHeader: customHeader
    }
};
export const NoBorders = {
    args: {
        title: SingleColumn.args?.title,
        description: SingleColumn.args?.description,
        children: twoColView
    }
};
