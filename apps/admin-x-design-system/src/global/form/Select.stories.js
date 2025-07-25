import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import Select from './Select';
const meta = {
    title: 'Global / Form / Select',
    component: Select,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))],
    argTypes: {
        hint: {
            control: 'text'
        }
    }
};
export default meta;
const selectOptions = [
    { value: 'option-1', label: 'Option 1' },
    { value: 'option-2', label: 'Option 2' },
    { value: 'option-3', label: 'Option 3' },
    { value: 'option-4', label: 'Option 4' },
    { value: 'option-5', label: 'Option 5' }
];
export const Default = {
    args: {
        options: selectOptions
    }
};
export const ClearBackground = {
    args: {
        options: selectOptions,
        clearBg: true
    }
};
export const WithPrompt = {
    args: {
        prompt: 'Select a value',
        options: selectOptions
    }
};
export const WithHeading = {
    args: {
        title: 'Title',
        options: selectOptions
    }
};
export const WithHint = {
    args: {
        title: 'Title',
        options: selectOptions,
        hint: 'Here\'s some hint'
    }
};
export const ExtraSmall = {
    args: {
        options: selectOptions,
        size: 'xs'
    }
};
export const WithSelectedOption = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(Select, { ...args, onSelect: value => updateArgs({ selectedOption: value }) });
    },
    args: {
        title: 'Title',
        options: selectOptions,
        selectedOption: selectOptions.find(option => option.value === 'option-3'),
        hint: 'Here\'s some hint'
    }
};
export const WithCallback = {
    args: {
        options: selectOptions,
        onSelect: (value) => {
            alert(value);
        }
    }
};
export const Searchable = {
    args: {
        options: selectOptions,
        isSearchable: true
    }
};
export const Error = {
    args: {
        title: 'Title',
        options: selectOptions,
        hint: 'Invalid value',
        error: true
    }
};
export const Unstyled = {
    args: {
        options: selectOptions,
        unstyled: true
    }
};
