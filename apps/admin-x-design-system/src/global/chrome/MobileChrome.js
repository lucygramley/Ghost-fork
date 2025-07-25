import { jsx as _jsx } from "react/jsx-runtime";
const MobileChrome = ({ children, ...props }) => {
    return (_jsx("div", { className: 'flex h-[775px] w-[380px] flex-col rounded-3xl bg-white p-2 shadow-xl dark:bg-grey-900', ...props, children: _jsx("div", { className: 'w-100 h-100 grow overflow-auto rounded-2xl border border-grey-100 dark:border-grey-950', children: children }) }));
};
export default MobileChrome;
