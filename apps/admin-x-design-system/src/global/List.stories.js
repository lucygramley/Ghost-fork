import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import * as ListItemStories from './ListItem.stories';
import List from './List';
import ListItem from './ListItem';
const meta = {
    title: 'Global / List',
    component: List,
    tags: ['autodocs']
};
export default meta;
const { /*id,*/ ...listItemProps } = ListItemStories.HiddenActions.args || {};
const listItems = (_jsxs(_Fragment, { children: [_jsx(ListItem, { id: 'list-item-1', ...listItemProps }), _jsx(ListItem, { id: 'list-item-2', ...listItemProps }), _jsx(ListItem, { id: 'list-item-3', separator: false, ...listItemProps })] }));
export const Default = {
    args: {
        title: 'This is a list',
        children: listItems,
        hint: 'And here is a hint for the whole list'
    },
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '600px' }, children: _story() }))]
};
export const PageLevel = {
    args: {
        pageTitle: 'A page with a list',
        children: listItems,
        hint: 'And here is a hint for the whole list'
    }
};
