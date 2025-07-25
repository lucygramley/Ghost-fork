import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import Heading from '../Heading';
/**
 * A container to group form elements
 */
const Form = ({ title, grouped = false, gap = 'md', margins = 'md', marginTop = false, marginBottom = true, className = '', children }) => {
    let classes = clsx('flex flex-col', (gap === 'xs' && 'gap-4'), (gap === 'sm' && 'gap-6'), (gap === 'md' && 'gap-8'), (gap === 'lg' && 'gap-11'));
    if (!margins) {
        margins = gap;
    }
    if (marginBottom) {
        classes = clsx(classes, (margins === 'sm' && 'mb-7'), (margins === 'md' && 'mb-10'), (margins === 'lg' && 'mb-12'));
    }
    if (marginTop) {
        classes = clsx(classes, (margins === 'sm' && 'mt-7'), (margins === 'md' && 'mt-10'), (margins === 'lg' && 'mt-12'));
    }
    if (grouped) {
        classes = clsx(classes, 'rounded-sm border border-grey-200 p-4 md:p-7 dark:border-grey-900');
    }
    const titleClasses = clsx(grouped ? 'mb-3' : 'mb-4');
    if (grouped || title) {
        return (_jsxs("div", { className: className, children: [title && _jsx(Heading, { className: titleClasses, level: 5, children: title }), _jsx("div", { className: classes, children: children })] }));
    }
    return (_jsx("div", { className: clsx(classes, className), children: children }));
};
export default Form;
