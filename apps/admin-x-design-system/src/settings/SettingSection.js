import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import SettingSectionHeader from './SettingSectionHeader';
const SettingSection = ({ title, isVisible = true, children }) => {
    const containerClassNames = clsx('mb-[10vh]', isVisible ? '' : 'hidden');
    return (_jsxs("div", { className: containerClassNames, children: [title && _jsx(SettingSectionHeader, { title: title }), children &&
                _jsx("div", { className: "mb-10 flex flex-col gap-12", children: children })] }));
};
export default SettingSection;
