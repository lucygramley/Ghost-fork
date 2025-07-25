import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import clsx from 'clsx';
import React, { useState } from 'react';
import Heading from './Heading';
import Hint from './Hint';
import Icon from './Icon';
import Separator from './Separator';
export const DragIndicator = ({ isDragging, dragHandleAttributes, dragHandleListeners, dragHandleClass, className, ...props }) => (_jsx("button", { className: clsx('opacity-50 group-hover:opacity-100', isDragging ? 'cursor-grabbing' : 'cursor-grab', dragHandleClass, className), type: 'button', ...dragHandleAttributes, ...dragHandleListeners, ...props, children: _jsx(Icon, { colorClass: 'text-grey-500', name: 'hamburger', size: 'sm' }) }));
const DefaultContainer = ({ setRef, isDragging, style, separator, children, ...props }) => (_jsxs("div", { ref: setRef, className: clsx('group flex w-full items-center gap-3 bg-white py-1 dark:bg-black', separator && 'border-b border-grey-200', isDragging && 'opacity-75'), style: style, children: [_jsx(DragIndicator, { className: 'h-7', isDragging: isDragging, ...props }), children] }));
const SortableItem = ({ id, children, separator, dragHandleClass, container }) => {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };
    return container({
        id,
        setRef: setNodeRef,
        isDragging: false,
        separator: separator,
        dragHandleClass: dragHandleClass,
        dragHandleAttributes: attributes,
        dragHandleListeners: listeners,
        style,
        children
    });
};
/**
 * Note: For lists which don't have an ID, you can use `useSortableIndexedList` to give items a consistent index-based ID.
 */
const SortableList = ({ title, titleSeparator, hint, items, itemSeparator = true, dragHandleClass, onMove, renderItem, container = props => _jsx(DefaultContainer, { ...props }), wrapper: Wrapper = React.Fragment, dragOverlayWrapper, ...props }) => {
    const [draggingId, setDraggingId] = useState(null);
    if (!items.length) {
        return _jsx(_Fragment, {});
    }
    return (_jsxs("div", { ...props, children: [title && _jsx(Heading, { level: 6, separator: titleSeparator, grey: true, children: title }), _jsx("div", { className: `${title && titleSeparator ? '-mt-2' : ''}`, children: _jsxs(DndContext, { collisionDetection: closestCenter, onDragEnd: (event) => {
                        onMove(event.active.id, event.over?.id);
                        setDraggingId(null);
                    }, onDragStart: event => setDraggingId(event.active.id), children: [_jsx(Wrapper, { children: _jsx(SortableContext, { items: items, strategy: verticalListSortingStrategy, children: items.map(item => (_jsx(SortableItem, { container: container, dragHandleClass: dragHandleClass, id: item.id, separator: itemSeparator, children: renderItem(item) }, item.id))) }) }), _jsx(DragOverlay, { wrapperElement: dragOverlayWrapper, children: draggingId ? container({
                                id: draggingId,
                                isDragging: true,
                                children: renderItem(items.find(({ id }) => id === draggingId))
                            }) : null })] }) }), hint &&
                _jsxs(_Fragment, { children: [!itemSeparator && _jsx(Separator, {}), _jsx(Hint, { children: hint })] })] }));
};
export default SortableList;
