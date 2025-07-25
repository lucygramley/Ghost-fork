import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from './Icon';
const IconLabel = ({ icon, iconColorClass, children }) => {
    return (_jsxs("div", { className: 'flex items-center gap-2', children: [_jsx(Icon, { colorClass: iconColorClass, name: icon, size: 'sm' }), children] }));
};
export default IconLabel;
