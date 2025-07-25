import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
/**
 * A simple container to group sequencing toggle switches
 */
const ToggleGroup = ({ children, gap = 'md', className }) => {
    let gapClass = 'gap-3';
    switch (gap) {
        case 'sm':
            gapClass = 'gap-2';
            break;
        case 'md':
            gapClass = 'gap-3';
            break;
        case 'lg':
            gapClass = 'gap-4';
            break;
        default:
            break;
    }
    className = clsx('flex flex-col', gapClass, className);
    return (_jsx("div", { className: className, children: children }));
};
export default ToggleGroup;
