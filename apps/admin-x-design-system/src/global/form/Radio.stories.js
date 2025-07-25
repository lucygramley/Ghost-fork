import { jsx as _jsx } from "react/jsx-runtime";
import Radio from './Radio';
const meta = {
    title: 'Global / Form / Radio',
    component: Radio,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))],
    argTypes: {
        hint: {
            control: 'text'
        }
    }
};
export default meta;
const radioOptions = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' }
];
const radioOptionsWithHints = [
    { value: 'option-1', label: 'Option 1', hint: 'Here\'s a hint for option 1' },
    { value: 'option-2', label: 'Option 2', hint: 'Here\'s a hint for option 2' },
    { value: 'option-3', label: 'Option 3', hint: 'Here\'s a hint for option 3' }
];
export const Default = {
    args: {
        id: 'my-radio-button',
        options: radioOptions
    }
};
export const WithTitleAndHint = {
    args: {
        title: 'Title',
        options: radioOptions,
        hint: 'Here\'s some hint',
        selectedOption: 'option-1'
    }
};
export const OptionHints = {
    args: {
        title: 'Title',
        options: radioOptionsWithHints,
        selectedOption: 'option-1'
    }
};
export const WithSeparator = {
    args: {
        title: 'Title',
        options: radioOptionsWithHints,
        selectedOption: 'option-1',
        separator: true
    }
};
