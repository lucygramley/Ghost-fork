import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
const ListItem = ({ id, title, detail, action, hideActions, avatar, className, testId, separator = true, bgOnHover = true, paddingRight = true, onClick, children }) => {
    const handleClick = (e) => {
        onClick?.(e);
    };
    const listItemClasses = clsx('group/list-item relative flex items-center justify-between', bgOnHover && 'hover:bg-grey-50 dark:hover:bg-grey-950', separator ? 'border-b border-grey-100 last-of-type:border-b-transparent dark:border-grey-900' : 'border-y border-transparent', onClick && 'cursor-pointer before:absolute before:inset-0 before:content-[""]', 'hover:z-10 hover:border-b-transparent', '-mb-px pb-px', className);
    return (_jsxs("div", { className: listItemClasses, "data-testid": testId, onClick: handleClick, children: [bgOnHover && (_jsx("div", { className: "absolute inset-0 -z-10 -mx-4 rounded-lg bg-grey-50 opacity-0 group-hover/list-item:opacity-100 dark:bg-grey-950" })), _jsxs("div", { className: "relative flex w-full items-center justify-between", children: [children ? children :
                        _jsxs("div", { className: `flex grow items-center gap-3`, children: [avatar && avatar, _jsxs("div", { className: `flex grow flex-col py-3 pr-6`, id: id, children: [_jsx("span", { children: title }), detail && _jsx("span", { className: 'text-xs text-grey-700', children: detail })] })] }), action &&
                        _jsx("div", { className: `visible py-3 md:pl-2 ${paddingRight && 'md:pr-2'} ${hideActions ? 'group-hover/list-item:visible md:invisible' : ''}`, children: action })] })] }));
};
export default ListItem;
