import { jsx as _jsx } from "react/jsx-runtime";
import ColorPickerField from './ColorPickerField';
const meta = {
    title: 'Global / Form / Color Picker Field',
    component: ColorPickerField,
    tags: ['autodocs'],
    argTypes: {},
    render: (args) => {
        return (_jsx("div", { className: "w-48", children: _jsx(ColorPickerField, { ...args }) }));
    }
};
export default meta;
export const Basic = {
    args: {}
};
export const WithTitle = {
    args: {
        title: 'Colour'
    }
};
export const WithHint = {
    args: {
        title: 'Colour',
        hint: 'Pick a colour'
    }
};
export const WithError = {
    args: {
        title: 'Colour',
        hint: 'Please select a colour',
        error: true
    }
};
export const WithValue = {
    args: {
        title: 'Colour',
        value: '#ff0000'
    }
};
export const RightToLeft = {
    args: {
        title: 'Colour',
        direction: 'rtl'
    }
};
export const RightToLeftHint = {
    args: {
        title: 'Colour',
        hint: 'Pick a colour',
        direction: 'rtl'
    }
};
export const WithSwatches = {
    args: {
        title: 'Colour',
        direction: 'rtl',
        swatches: [
            { hex: '#ff0000', title: 'Red' },
            { hex: '#00ff00', title: 'Green' },
            { hex: '#0000ff', title: 'Blue' }
        ]
    }
};
