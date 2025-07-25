import { jsx as _jsx } from "react/jsx-runtime";
const NoValueLabel = ({ className = '', children }) => {
    return (_jsx("div", { className: `my-10 flex flex-col items-center gap-1 text-sm text-grey-600 ${className}`, children: children }));
};
const NoValueLabelIcon = ({ className = '', children }) => {
    return (_jsx("div", { className: `text-grey-500 [&>svg]:size-8 [&>svg]:stroke-[1px] ${className}`, children: children }));
};
export { NoValueLabel, NoValueLabelIcon };
