import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import URLTextField from './URLTextField';
const meta = {
    title: 'Global / Form / URL Textfield',
    component: URLTextField,
    tags: ['autodocs'],
    args: {
        baseUrl: 'https://my.site'
    }
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter something'
    }
};
export const WithValue = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(URLTextField, { ...args, onChange: value => updateArgs({ value }) });
    },
    args: {
        placeholder: 'Enter something',
        value: '/test/'
    }
};
export const EmailAddress = {
    args: {
        placeholder: 'Enter something',
        value: 'mailto:test@my.site'
    }
};
export const AnchorLink = {
    args: {
        placeholder: 'Enter something',
        value: '#test'
    }
};
