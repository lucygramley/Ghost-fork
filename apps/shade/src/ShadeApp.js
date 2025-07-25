import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
// import {FetchKoenigLexical} from './global/form/HtmlEditor';
import ShadeProvider from './providers/ShadeProvider';
/**
 * The className is used to scope the styles of the app to the app's namespace.
 * Some components in radixUI/ShadCN need to be wrapped in a div with the className
 * in order to work correctly.
 */
export const SHADE_APP_NAMESPACES = 'shade shade-activitypub shade-stats shade-posts';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ShadeApp = ({ darkMode, fetchKoenigLexical, className, children, ...props }) => {
    const appClassName = clsx('shade', className);
    return (_jsx("div", { className: appClassName, ...props, children: _jsx(ShadeProvider, { darkMode: darkMode, children: children }) }));
};
export default ShadeApp;
