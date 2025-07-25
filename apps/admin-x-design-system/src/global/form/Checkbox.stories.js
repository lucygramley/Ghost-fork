import { jsx as _jsx } from "react/jsx-runtime";
import Checkbox from './Checkbox';
const meta = {
    title: 'Global / Form / Checkbox',
    component: Checkbox,
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
        label: 'Checkbox 1'
    }
};
export const WithTitleAndHint = {
    args: {
        title: 'Title',
        label: 'Checkbox 1',
        hint: 'Here\'s some hint',
        checked: true
    }
};
export const WithSeparator = {
    args: {
        title: 'Title',
        label: 'Checkbox 1',
        hint: 'Here\'s some hint',
        checked: true,
        separator: true
    }
};
