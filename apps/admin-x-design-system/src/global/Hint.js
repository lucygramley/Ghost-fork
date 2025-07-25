import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const Hint = ({ children, color, className, ...props }) => {
    if (!children) {
        return null;
    }
    let colorClassName = 'text-grey-700 dark:text-grey-600';
    switch (color) {
        case 'red':
            colorClassName = 'text-red dark:text-red-500';
            break;
        case 'green':
            colorClassName = 'text-green dark:text-green-500';
            break;
    }
    className = clsx('mt-1 inline-block text-xs leading-snug', colorClassName, className);
    return (_jsx("span", { className: className, ...props, children: children }));
};
export default Hint;
