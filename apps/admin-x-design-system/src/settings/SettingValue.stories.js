import SettingValue from './SettingValue';
const meta = {
    title: 'Settings / Setting Value',
    component: SettingValue,
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text'
        },
        hint: {
            control: 'text'
        }
    }
};
export default meta;
export const Default = {
    args: {
        heading: 'Setting',
        value: 'Setting value'
    }
};
export const WithHint = {
    args: {
        heading: 'Setting',
        value: 'Setting value',
        hint: 'Setting hint text'
    }
};
export const NoHeading = {
    args: {
        value: 'Setting value',
        hint: 'Hint text'
    }
};
