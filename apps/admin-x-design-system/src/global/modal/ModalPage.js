import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import Heading from '../Heading';
const ModalPage = ({ heading, children, className }) => {
    className = clsx('w-full p-[8vmin] pt-5', className);
    return (_jsxs("div", { className: className, children: [heading && _jsx(Heading, { className: 'mb-8', children: heading }), children] }));
};
export default ModalPage;
