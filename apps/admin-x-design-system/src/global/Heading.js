import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import React from 'react';
import Separator from './Separator';
export const Heading6Styles = clsx('text-sm font-medium tracking-normal');
export const Heading6StylesGrey = clsx(Heading6Styles, 'text-grey-900 dark:text-grey-500');
const Heading = ({ level = 1, children, styles = '', grey = true, separator, useLabelTag, className = '', ...props }) => {
    const newElement = `${useLabelTag ? 'label' : `h${level}`}`;
    styles += (level === 6 || useLabelTag) ? (` block ${grey ? Heading6StylesGrey : Heading6Styles}`) : ' ';
    if (!useLabelTag) {
        switch (level) {
            case 1:
                styles += ' md:text-4xl leading-tighter';
                break;
            case 2:
                styles += ' md:text-3xl';
                break;
            case 3:
                styles += ' md:text-2xl';
                break;
            case 4:
                styles += ' md:text-xl';
                break;
            case 5:
                styles += ' md:text-lg';
                break;
            default:
                break;
        }
    }
    className = clsx(styles, !grey && 'dark:text-white', className);
    const Element = React.createElement(newElement, { className: className, key: 'heading-elem', ...props }, children);
    if (separator) {
        const gap = (!level || level === 1) ? 2 : 1;
        const bottomMargin = (level === 6) ? 2 : 3;
        return (_jsxs("div", { className: `gap-${gap} mb-${bottomMargin} flex flex-col`, children: [Element, _jsx(Separator, {})] }));
    }
    else {
        return Element;
    }
};
export default Heading;
