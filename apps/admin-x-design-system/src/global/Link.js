import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Standard link with default styling
 */
const Link = ({ href, color, className, children, ...props }) => {
    if (!color) {
        color = 'green';
    }
    let styles = (color === 'black') ? `transition text-black hover:text-black-700` : `text-${color} hover:text-${color}-400`;
    if (className) {
        styles = `${styles} ${className}`;
    }
    return _jsx("a", { className: styles, href: href, ...props, children: children });
};
export default Link;
