import { jsx as _jsx } from "react/jsx-runtime";
const DesktopChrome = ({ children, ...props }) => {
    return (_jsx("div", { className: 'flex h-full w-full flex-col px-8', ...props, children: _jsx("div", { className: "h-full w-full overflow-hidden rounded-t-[4px] shadow-sm", children: children }) }));
};
export default DesktopChrome;
