import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Heading from './Heading';
import Separator from './Separator';
const ListHeading = ({ title, titleSize = 'sm', actions, titleSeparator }) => {
    let heading;
    if (title) {
        const headingTitle = titleSize === 'sm' ?
            _jsx(Heading, { grey: true, level: 6, children: title })
            :
                _jsx(Heading, { level: 5, children: title });
        heading = actions ? (_jsxs("div", { className: 'flex items-end justify-between gap-2', children: [headingTitle, actions] })) : headingTitle;
    }
    if (heading || titleSeparator) {
        return (_jsxs("div", { className: 'flex flex-col items-stretch gap-1', children: [heading, titleSeparator && _jsx(Separator, {})] }));
    }
    return _jsx(_Fragment, {});
};
export default ListHeading;
