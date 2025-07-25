import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SettingValue from './SettingValue';
const SettingGroupContent = ({ columns, values, children, className }) => {
    let styles = 'flex flex-col gap-x-5';
    if (columns === 2) {
        styles = 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6';
    }
    styles += className ? ` ${className}` : ' gap-y-7';
    return (_jsxs("div", { className: styles, children: [values && values.map(({ key, ...props }) => (_jsx(SettingValue, { ...props }, key))), children] }));
};
export default SettingGroupContent;
