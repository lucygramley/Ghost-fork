import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
const PageHeader = ({ left, center, right, sticky = true, containerClassName, children }) => {
    const containerClasses = clsx('z-50 h-22 min-h-[92px] p-8', !children && 'flex items-center justify-between gap-3', sticky && 'sticky top-0', containerClassName);
    if (!children) {
        if (left) {
            const leftClasses = clsx('flex flex-auto items-center', (right && center) && 'basis-1/3', ((!right && center)) && 'basis-1/2');
            left = _jsx("div", { className: leftClasses, children: left });
        }
        if (center) {
            const centerClasses = clsx('flex flex-auto items-center justify-center', (left && right) && 'basis-1/3', ((left && !right) || (!left && right)) && 'basis-1/2');
            center = _jsx("div", { className: centerClasses, children: center });
        }
        if (right) {
            const rightClasses = clsx('flex flex-auto items-center justify-end', (left && center) && 'basis-1/3', ((!left && center)) && 'basis-1/2');
            right = _jsx("div", { className: rightClasses, children: right });
        }
    }
    return (_jsx("div", { className: containerClasses, children: children ? children :
            _jsxs(_Fragment, { children: [left, center, right] }) }));
};
export default PageHeader;
