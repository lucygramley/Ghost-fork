import { jsx as _jsx } from "react/jsx-runtime";
import Avatar from './Avatar';
import Button from './Button';
import ListItem from './ListItem';
const meta = {
    title: 'Global / List / List Item',
    component: ListItem,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '600px' }, children: _story() }))],
    argTypes: {
        title: { control: 'text' },
        detail: { control: 'text' }
    }
};
export default meta;
export const Default = {
    args: {
        id: 'list-item',
        title: 'A list item',
        detail: 'Some details',
        action: _jsx(Button, { color: 'green', label: 'Edit', link: true }),
        separator: true,
        onClick: (e) => {
            const clickedDiv = e.currentTarget;
            alert(`Clicked on "${clickedDiv.id}"`);
        }
    }
};
export const HiddenActions = {
    args: {
        id: 'list-item',
        title: 'A list item',
        detail: 'Some details',
        action: _jsx(Button, { color: 'green', label: 'Edit', link: true }),
        separator: true,
        hideActions: true,
        onClick: (e) => {
            const clickedDiv = e.currentTarget;
            alert(`Clicked on "${clickedDiv.id}"`);
        }
    }
};
export const WithAvatar = {
    args: {
        ...HiddenActions.args,
        avatar: (_jsx(Avatar, { bgColor: 'green', label: 'DV', labelColor: 'white' })),
        hideActions: false
    }
};
