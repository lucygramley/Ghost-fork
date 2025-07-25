import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Separator } from '..';
const SettingNavSection = ({ title, isVisible, children }) => {
    if (!isVisible) {
        return null;
    }
    return (_jsxs(_Fragment, { children: [title && _jsx("h2", { className: 'mb-4 ml-2 text-base font-semibold tracking-normal text-black dark:text-grey-400', children: title }), children &&
                _jsxs(_Fragment, { children: [_jsx("ul", { className: "-mt-1 mb-7", children: children }), _jsx(Separator, { className: 'mx-2 mb-7 border-grey-300 dark:border-grey-950' })] })] }));
};
export default SettingNavSection;
