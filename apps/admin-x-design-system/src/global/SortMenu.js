import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Button from './Button';
import Popover from './Popover';
import { Icon } from '..';
const SortMenu = ({ items, direction, onSortChange, onDirectionChange, trigger, triggerButtonProps, position = 'start' }) => {
    const [localItems, setLocalItems] = useState(items);
    const [localDirection, setLocalDirection] = useState(direction || 'desc');
    useEffect(() => {
        setLocalItems(items);
    }, [items]);
    const handleSortChange = (selectedValue) => {
        const updatedItems = localItems.map(item => ({
            ...item,
            selected: item.id === selectedValue ? true : false
        }));
        setLocalItems(updatedItems);
        if (localItems.find(item => item.id === selectedValue)?.direction) {
            setLocalDirection(localItems.find(item => item.id === selectedValue)?.direction || 'desc');
            onDirectionChange(localDirection);
        }
        onSortChange(selectedValue);
    };
    const handleSortDirection = (e) => {
        e?.stopPropagation();
        setLocalDirection(currentDirection => (currentDirection === 'desc' ? 'asc' : 'desc'));
        onDirectionChange(localDirection);
    };
    if (!trigger) {
        trigger = _jsx(Button, { className: 'flex-row-reverse', icon: `${localDirection === 'asc' ? 'arrow-up' : 'arrow-down'}`, iconColorClass: '!w-3 !h-3 !mr-0 ml-1.5', label: `${localItems.find(item => item.selected)?.label}`, ...triggerButtonProps });
    }
    return (_jsx(Popover, { position: position, trigger: trigger, children: _jsxs("div", { className: 'flex flex-col', children: [_jsx("div", { className: 'cursor-default select-none border-b border-b-grey-200 p-2 pl-3 text-sm font-semibold dark:border-b-grey-800', children: "Sort by" }), _jsx("div", { className: "flex min-w-[160px] flex-col justify-stretch py-1", role: "none", children: localItems.map(item => (_jsxs("button", { className: "group relative mx-1 flex grow cursor-pointer items-center rounded-[2.5px] px-8 py-1.5 pr-12 text-left text-sm hover:bg-grey-100 dark:hover:bg-grey-800", type: "button", onClick: () => {
                            handleSortChange(item.id);
                        }, children: [item.selected ? _jsx(Icon, { className: 'absolute left-2', name: 'check', size: 'xs' }) : null, item.label, item.selected ? _jsx("button", { className: 'absolute right-1 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full hover:bg-grey-300 dark:hover:bg-grey-700', title: `${localDirection === 'asc' ? 'Ascending' : 'Descending'}`, type: 'button', onClick: handleSortDirection, children: localDirection === 'asc' ? _jsx(Icon, { name: 'arrow-up', size: 'xs' }) : _jsx(Icon, { name: 'arrow-down', size: 'xs' }) }) : null] }, item.id))) })] }) }));
};
export default SortMenu;
