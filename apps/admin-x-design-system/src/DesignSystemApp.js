import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import DesignSystemProvider from './providers/DesignSystemProvider';
const DesignSystemApp = ({ darkMode, fetchKoenigLexical, className, children, ...props }) => {
    const appClassName = clsx('admin-x-base', className);
    return (_jsx("div", { className: appClassName, ...props, children: _jsx(DesignSystemProvider, { darkMode: darkMode, fetchKoenigLexical: fetchKoenigLexical, children: children }) }));
};
export default DesignSystemApp;
