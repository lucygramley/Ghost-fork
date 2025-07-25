import CheckboxGroup from './CheckboxGroup';
const meta = {
    title: 'GLobal / Form / Checkbox group',
    component: CheckboxGroup,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        checkboxes: [
            {
                onChange: () => { },
                label: 'Kevin',
                value: 'kevin'
            },
            {
                onChange: () => { },
                label: 'Minci',
                value: 'minci'
            },
            {
                onChange: () => { },
                label: 'Conker',
                value: 'conker'
            }
        ]
    }
};
export const WithTitle = {
    args: {
        title: 'Gimme pets',
        checkboxes: [
            {
                onChange: () => { },
                label: 'Kevin',
                value: 'kevin'
            },
            {
                onChange: () => { },
                label: 'Minci',
                value: 'minci'
            },
            {
                onChange: () => { },
                label: 'Conker',
                value: 'conker'
            }
        ]
    }
};
export const WithTitleAndHint = {
    args: {
        title: 'Gimme pets',
        checkboxes: [
            {
                onChange: () => { },
                label: 'Kevin',
                value: 'kevin'
            },
            {
                onChange: () => { },
                label: 'Minci',
                value: 'minci'
            },
            {
                onChange: () => { },
                label: 'Conker',
                value: 'conker'
            }
        ],
        hint: 'Who you gonna pet?'
    }
};
export const Error = {
    args: {
        title: 'Gimme pets',
        error: true,
        checkboxes: [
            {
                onChange: () => { },
                label: 'Kevin',
                value: 'kevin'
            },
            {
                onChange: () => { },
                label: 'Minci',
                value: 'minci'
            },
            {
                onChange: () => { },
                label: 'Conker',
                value: 'conker'
            }
        ],
        hint: 'Please select one'
    }
};
