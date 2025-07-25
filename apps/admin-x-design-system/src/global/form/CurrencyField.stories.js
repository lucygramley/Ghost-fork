import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import CurrencyField from './CurrencyField';
const meta = {
    title: 'Global / Form / Currency field',
    component: CurrencyField,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))],
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
export const WithValue = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(CurrencyField, { ...args, onChange: valueInCents => updateArgs({ valueInCents }) });
    },
    args: {
        title: 'Amount',
        hint: 'Notice how the value is the integer number of cents',
        valueInCents: 500
    }
};
