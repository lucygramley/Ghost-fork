import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { forwardRef } from 'react';
import Icon from '../global/Icon';
const SettingNavItem = forwardRef(function SettingNavItem({ title, navid = '', icon, isCurrent = false, isVisible = true, onClick = () => { }, ...props }, ref) {
    const classNames = clsx('w-100 mt-px flex h-[36px] cursor-pointer items-center rounded-md px-3 py-2 text-left text-[14px] font-medium transition-all hover:bg-grey-200 focus:bg-grey-100 dark:text-grey-600 dark:hover:bg-grey-950 dark:focus:bg-grey-925', isCurrent ? 'bg-grey-200 text-black dark:bg-grey-950 dark:text-white' : 'text-grey-800', !isVisible && 'hidden');
    return (_jsx("li", { ref: ref, ...props, children: _jsxs("a", { className: classNames, id: navid, onClick: onClick, children: [icon && _jsx(Icon, { className: 'mr-[7px] h-[16px] w-[16px]', name: icon, size: 'custom' }), title] }) }));
});
export default SettingNavItem;
