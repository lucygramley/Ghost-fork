import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useArgs } from '@storybook/preview-api';
import SortableList from './SortableList';
import clsx from 'clsx';
import { arrayMove } from '@dnd-kit/sortable';
import { useState } from 'react';
const Wrapper = (props) => {
    // Seems like Storybook recreates items on every render, so we need to keep our own state
    const [items, setItems] = useState(props.items);
    return _jsx(SortableList, { ...props, items: items, onMove: (activeId, overId) => {
            if (activeId !== overId) {
                const fromIndex = items.findIndex(item => item.id === activeId);
                const toIndex = overId ? items.findIndex(item => item.id === overId) : 0;
                setItems(arrayMove(items, fromIndex, toIndex));
                // But still update the args so that the storybook panel updates
                props.updateArgs({ items: arrayMove(items, fromIndex, toIndex) });
            }
        } });
};
const meta = {
    title: 'Global / List / Sortable',
    component: SortableList,
    tags: ['autodocs'],
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(Wrapper, { ...args, updateArgs: updateArgs });
    }
};
export default meta;
export const Default = {
    args: {
        title: 'Sortable list',
        titleSeparator: true,
        items: [{ id: 'first item' }, { id: 'second item' }, { id: 'third item' }],
        renderItem: item => _jsx("span", { className: "self-center", children: item.id }),
        hint: 'Drag items to order'
    }
};
export const CustomContainer = {
    args: {
        items: [{ id: 'first item' }, { id: 'second item' }, { id: 'third item' }],
        renderItem: item => _jsx("span", { className: "self-center", children: item.id }),
        container: ({ setRef, isDragging, dragHandleAttributes, dragHandleListeners, style, children }) => (_jsxs("div", { ref: setRef, className: clsx('mb-2 rounded border border-grey-200 p-4', isDragging && 'bg-grey-50'), style: style, ...dragHandleAttributes, ...dragHandleListeners, children: ["Drag this whole row! Item: ", children] }))
    }
};
