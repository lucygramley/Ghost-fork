import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Heading from '../global/Heading';
const SettingValue = ({ heading, value, hint, hideEmptyValue, ...props }) => {
    if (!value && hideEmptyValue) {
        return _jsx(_Fragment, {});
    }
    return (_jsxs("div", { className: 'flex flex-col', ...props, children: [heading && _jsx(Heading, { grey: false, level: 6, children: heading }), _jsx("div", { className: `flex items-center ${heading && `mt-1`}`, children: value }), hint && _jsx("p", { className: 'mt-1 text-xs', children: hint })] }));
};
export default SettingValue;
