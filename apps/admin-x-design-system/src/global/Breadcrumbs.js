import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import Button from './Button';
const Breadcrumbs = ({ items, backIcon = false, snapBackIcon = true, onBack, containerClassName, itemClassName, activeItemClassName, separatorClassName }) => {
    const allItems = items.length;
    let i = 0;
    containerClassName = clsx('flex items-center gap-2 text-sm', containerClassName);
    activeItemClassName = clsx('font-bold', activeItemClassName);
    itemClassName = clsx('text-sm', itemClassName);
    return (_jsxs("div", { className: containerClassName, children: [backIcon &&
                _jsx(Button, { className: snapBackIcon ? 'mr-1' : 'mr-6', icon: 'arrow-left', iconColorClass: 'dark:text-white', size: 'sm', link: true, onClick: onBack }), items.map((item) => {
                const bcItem = (i === allItems - 1 ?
                    _jsx("span", { className: activeItemClassName, children: item.label })
                    :
                        _jsxs(_Fragment, { children: [_jsx("button", { className: `${itemClassName} ${item.onClick && '-mx-1 cursor-pointer rounded-sm px-1 py-px hover:bg-grey-100 dark:hover:bg-grey-900'}`, type: "button", onClick: item.onClick, children: item.label }, `bc-${i}`), _jsx("span", { className: separatorClassName, children: "/" })] }));
                i = i + 1;
                return bcItem;
            })] }));
};
export default Breadcrumbs;
