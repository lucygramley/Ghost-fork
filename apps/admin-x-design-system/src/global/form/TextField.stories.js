import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import Button from '../Button';
import Select from './Select';
import TextField from './TextField';
const meta = {
    title: 'Global / Form / Textfield',
    component: TextField,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px', padding: '20px' }, children: _story() }))],
    argTypes: {
        hint: {
            control: 'text'
        },
        rightPlaceholder: {
            control: 'text'
        }
    }
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter something'
    }
};
export const Disabled = {
    args: {
        placeholder: `Here's a disabled field`,
        value: 'Hello disabled field',
        title: 'Disabled',
        disabled: true
    }
};
export const WithValue = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(TextField, { ...args, onChange: e => updateArgs({ value: e.target.value }) });
    },
    args: {
        placeholder: 'Enter something',
        value: 'Value'
    }
};
export const WithHeading = {
    args: {
        title: 'Title',
        placeholder: 'Enter something'
    }
};
export const WithHint = {
    args: {
        title: 'Title',
        placeholder: 'Enter something',
        hint: 'Here\'s some hint'
    }
};
export const WithRightPlaceholder = {
    args: {
        title: 'Monthly price',
        placeholder: '0',
        rightPlaceholder: 'USD/month'
    }
};
export const WithDropdown = {
    args: {
        title: 'Monthly price',
        placeholder: '0',
        rightPlaceholder: (_jsx(Select, { border: false, clearBg: true, containerClassName: 'w-14', fullWidth: false, options: [
                { label: 'USD', value: 'usd' },
                { label: 'EUR', value: 'eur' }
            ], onSelect: () => { } }))
    }
};
export const WithButton = {
    args: {
        title: 'Get this URL',
        value: 'https://ghost.org',
        containerClassName: 'group',
        rightPlaceholder: (_jsx(Button, { className: 'invisible mt-1 rounded-md group-hover:visible', color: 'white', label: 'Copy', size: 'sm' }))
    }
};
export const PasswordType = {
    args: {
        title: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        hint: 'Here\'s some hint'
    }
};
export const Error = {
    args: {
        title: 'Title',
        placeholder: 'Enter something',
        hint: 'Invalid value',
        value: 'Value',
        error: true
    }
};
