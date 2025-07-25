import { jsx as _jsx } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import MultiSelect from './MultiSelect';
const meta = {
    title: 'Global / Form / Multiselect',
    component: MultiSelect,
    tags: ['autodocs']
};
export default meta;
const options = [
    { value: 'steph', label: 'Steph Curry' },
    { value: 'klay', label: 'Klay Thompson' },
    { value: 'dray', label: 'Draymond Green' }
];
export const Default = {
    args: {
        options: options,
        placeholder: 'Select your players'
    }
};
export const Black = {
    args: {
        options: options,
        color: 'black'
    }
};
export const WithTitle = {
    args: {
        title: 'Choose your players',
        options: options,
        color: 'black'
    }
};
export const WithTitleAndHint = {
    args: {
        title: 'Choose your players',
        options: options,
        color: 'black',
        hint: 'I knew you\'d choose all'
    }
};
export const WithValues = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(MultiSelect, { ...args, onChange: values => updateArgs({ values }) });
    },
    args: {
        title: 'Choose your players',
        options: options,
        color: 'black',
        hint: 'I knew you\'d choose all',
        values: [options[0]]
    }
};
