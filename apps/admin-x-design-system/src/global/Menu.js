import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
import Popover from './Popover';
const Menu = ({ trigger, triggerButtonProps, items, position = 'start', open, setOpen }) => {
    if (!trigger) {
        trigger = _jsx(Button, { icon: 'ellipsis', label: 'Menu', hideLabel: true, ...triggerButtonProps });
    }
    return (_jsx(Popover, { open: open, position: position, setOpen: setOpen, trigger: trigger, closeOnItemClick: true, children: _jsx("div", { className: "flex min-w-[160px] flex-col justify-stretch py-1", role: "none", children: items.map(item => (_jsx("button", { className: `mx-1 block cursor-pointer rounded-[2.5px] px-4 py-1.5 text-left text-sm hover:bg-grey-100 dark:hover:bg-grey-925 ${item.destructive && ' text-red-500'}`, type: "button", onClick: (e) => {
                    if (item.onClick) {
                        item.onClick(e);
                    }
                }, children: item.label }, item.id))) }) }));
};
export default Menu;
