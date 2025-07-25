import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import Heading from '../Heading';
import Hint from '../Hint';
import { useId } from 'react';
import Separator from '../Separator';
const Checkbox = ({ title, label, value, onChange, disabled, error, hint, checked, separator, testId }) => {
    const id = useId();
    const handleCheckedChange = (isChecked) => {
        onChange(isChecked === true);
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: `flex flex-col gap-1 ${separator && 'pb-2'}`, children: [title && _jsx(Heading, { grey: true, level: 6, children: title }), _jsxs("label", { className: `flex cursor-pointer items-start ${title && '-mb-1 mt-1'}`, htmlFor: id, children: [_jsx(CheckboxPrimitive.Root, { className: "mt-0.5 flex h-4 w-4 cursor-pointer appearance-none items-center justify-center rounded-[3px] border border-solid border-grey-500 bg-white outline-none data-[state=checked]:border-black data-[state=indeterminate]:border-black data-[state=checked]:bg-black data-[state=indeterminate]:bg-black", "data-testid": testId, defaultChecked: checked, disabled: disabled, id: id, value: value, onCheckedChange: handleCheckedChange, children: _jsx(CheckboxPrimitive.Indicator, { children: _jsx("svg", { fill: "none", height: "11", viewBox: "0 0 10 11", width: "10", children: _jsx("path", { d: "M1 5.88889L4.6 9L9 1", stroke: "white", strokeLinecap: "round", strokeWidth: "2" }) }) }) }), _jsxs("div", { className: `ml-2 flex flex-col ${hint && 'mb-2'}`, children: [_jsx("span", { className: `inline-block text-[1.425rem] dark:text-white ${hint && '-mb-1'}`, children: label }), hint && _jsx(Hint, { color: error ? 'red' : '', children: hint })] })] })] }), (separator || error) && _jsx(Separator, { className: error ? 'border-red' : '' })] }));
};
export default Checkbox;
