import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as CheckboxGroupStories from './CheckboxGroup.stories';
import * as TextFieldStories from './TextField.stories';
import CheckboxGroup from './CheckboxGroup';
import Form from './Form';
import TextField from './TextField';
const meta = {
    title: 'Global / Form / Form (group)',
    component: Form,
    tags: ['autodocs']
};
export default meta;
const formElements = _jsxs(_Fragment, { children: [_jsx(CheckboxGroup, { ...CheckboxGroupStories.WithTitleAndHint.args }), _jsx(TextField, { ...TextFieldStories.WithHeading.args })] });
export const Default = {
    args: {
        children: formElements
    }
};
export const SmallGap = {
    args: {
        children: formElements,
        gap: 'sm'
    }
};
export const LargeGap = {
    args: {
        children: formElements,
        gap: 'lg'
    }
};
export const WithTitle = {
    args: {
        title: 'Form group',
        children: formElements
    }
};
export const Grouped = {
    args: {
        title: 'Form group',
        children: formElements,
        grouped: true
    }
};
