import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from './Icon';
/**
 * Used for empty list and table indication
 */
const NoValueLabel = ({ icon, children }) => {
    return (_jsxs("div", { className: 'my-10 flex flex-col items-center gap-1 text-sm text-grey-600', children: [icon && _jsx(Icon, { className: 'stroke-[1px]', colorClass: 'text-grey-500', name: icon, size: 'lg' }), children] }));
};
export default NoValueLabel;
