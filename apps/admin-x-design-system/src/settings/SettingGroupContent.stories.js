import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import SettingGroupContent from './SettingGroupContent';
import * as SettingValueStories from './SettingValue.stories';
import * as TextFieldStories from '../global/form/TextField.stories';
import TextField from '../global/form/TextField';
const meta = {
    title: 'Settings / Setting Group / Content',
    component: SettingGroupContent,
    tags: ['autodocs']
};
export default meta;
const values = [
    { ...SettingValueStories.Default.args, key: '1', heading: 'Setting one', value: 'Value one' },
    { ...SettingValueStories.Default.args, key: '2', heading: 'Setting two', value: 'Value two' },
    { ...SettingValueStories.Default.args, key: '3', heading: 'Setting three', value: 'Value three' },
    { ...SettingValueStories.Default.args, key: '4', heading: 'Setting four', value: 'Value four' }
];
export const SingleColumn = {
    args: {
        values: values
    }
};
export const TwoColumns = {
    args: {
        values: values,
        columns: 2
    }
};
export const Editing = {
    args: {
        columns: 2,
        children: (_jsxs(_Fragment, { children: [_jsx(TextField, { ...TextFieldStories.WithHint.args }), _jsx(TextField, { ...TextFieldStories.WithHint.args }), _jsx(TextField, { ...TextFieldStories.WithHint.args }), _jsx(TextField, { ...TextFieldStories.WithHint.args })] }))
    }
};
