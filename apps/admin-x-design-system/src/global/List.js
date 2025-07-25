import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import Heading from './Heading';
import Hint from './Hint';
import ListHeading from './ListHeading';
import Separator from './Separator';
const List = ({ title, titleSeparator = true, titleSize = 'sm', children, actions, hint, hintSeparator = true, borderTop, pageTitle, className }) => {
    const listClasses = clsx((borderTop || pageTitle) && 'border-t border-grey-300', pageTitle && 'mt-5', className);
    return (_jsxs(_Fragment, { children: [pageTitle && _jsx(Heading, { children: pageTitle }), _jsxs("section", { className: listClasses, children: [title && _jsx(ListHeading, { actions: actions, title: title, titleSeparator: !pageTitle && titleSeparator && !borderTop, titleSize: titleSize }), _jsx("div", { className: 'flex flex-col', children: children }), hint &&
                        _jsxs("div", { className: '-mt-px', children: [hintSeparator && _jsx(Separator, {}), _jsx(Hint, { children: hint })] })] })] }));
};
export default List;
