import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import TextArea from './TextArea';
const meta = {
    title: 'Global / Form / Textarea',
    component: TextArea,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))],
    argTypes: {
        hint: {
            control: 'text'
        }
    }
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter description'
    }
};
export const WithValue = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(TextArea, { ...args, onChange: e => updateArgs({ value: e.target.value }) });
    },
    args: {
        placeholder: 'Enter description',
        value: 'Describe your product'
    }
};
export const WithTitle = {
    args: {
        placeholder: 'Enter description',
        title: 'Description'
    }
};
export const WithHint = {
    args: {
        title: 'Description',
        placeholder: 'Enter description',
        hint: 'Here\'s some hint'
    }
};
export const Monospace = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(TextArea, { ...args, onChange: e => updateArgs({ value: e.target.value }) });
    },
    args: {
        title: 'Code',
        fontStyle: 'mono',
        value: `<html><body><h1>✨</h1></body></html>`
    }
};
export const Resizeable = {
    args: {
        title: 'Description',
        placeholder: 'Try do resize this, I dare you...',
        resize: 'both'
    }
};
export const ResizeDisabled = {
    args: {
        title: 'Description',
        placeholder: 'Try do resize this, I dare you...',
        resize: 'none'
    }
};
export const Error = {
    args: {
        title: 'Description',
        placeholder: 'Enter something',
        hint: 'Invalid value',
        value: 'Value',
        error: true
    }
};
