import { jsx as _jsx } from "react/jsx-runtime";
import ButtonGroup from './ButtonGroup';
const ButtonGroupMeta = {
    title: 'Global / Button Group',
    component: ButtonGroup,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { className: 'inline-block', children: _story() }))]
};
export default ButtonGroupMeta;
const defaultButtons = [
    {
        label: 'Cancel',
        key: 'cancel'
    },
    {
        label: 'Save',
        key: 'save',
        color: 'black'
    }
];
export const Default = {
    args: {
        buttons: defaultButtons,
        link: false
    }
};
export const Small = {
    args: {
        buttons: defaultButtons,
        link: false,
        size: 'sm'
    }
};
const linkButtons = [
    {
        label: 'Cancel',
        key: 'cancel'
    },
    {
        label: 'Save',
        key: 'save',
        color: 'green'
    }
];
export const LinkButtons = {
    args: {
        buttons: linkButtons,
        link: true
    }
};
