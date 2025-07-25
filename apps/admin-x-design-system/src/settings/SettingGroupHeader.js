import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Heading from '../global/Heading';
const SettingGroupHeader = ({ title, description, children, beta = false }) => {
    return (_jsxs("div", { className: "flex items-start justify-between gap-4", children: [(title || description) &&
                _jsxs("div", { children: [_jsxs(Heading, { className: 'font-semibold', level: 5, children: [title, beta && _jsx("sup", { className: 'ml-0.5 text-[10px] font-semibold uppercase tracking-wide', children: "Beta" })] }), description && _jsx("p", { className: "mr-5 mt-1 hidden text-pretty group-[.is-not-editing]/setting-group:!visible group-[.is-not-editing]/setting-group:!block md:!visible md:!block", children: description })] }), _jsx("div", { children: children })] }));
};
export default SettingGroupHeader;
