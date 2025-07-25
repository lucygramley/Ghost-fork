import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Heading from '../Heading';
import Hint from '../Hint';
import Checkbox from './Checkbox';
const CheckboxGroup = ({ title, checkboxes, hint, error }) => {
    return (_jsxs("div", { children: [title && _jsx(Heading, { grey: true, level: 6, children: title }), _jsx("div", { className: 'mt-2 flex flex-col gap-1', children: checkboxes?.map(({ key, ...props }) => (_jsx(Checkbox, { ...props }, key))) }), _jsx("div", { className: `flex flex-col ${hint && 'mb-2'}`, children: hint && _jsx(Hint, { color: error ? 'red' : '', children: hint }) })] }));
};
export default CheckboxGroup;
