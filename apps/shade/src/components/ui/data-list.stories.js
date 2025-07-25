import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DataList, DataListBar, DataListBody, DataListHead, DataListHeader, DataListItemContent, DataListItemValue, DataListItemValueAbs, DataListItemValuePerc, DataListRow } from './data-list';
const meta = {
    title: 'Components / Data List',
    component: DataList,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        className: '',
        children: [
            _jsxs(DataListHeader, { children: [_jsx(DataListHead, { children: "Title" }), _jsx(DataListHead, { children: "Visitors" })] }),
            _jsxs(DataListBody, { className: 'group/datalist', children: [_jsxs(DataListRow, { children: [_jsx(DataListBar, {}), _jsx(DataListItemContent, { children: _jsxs("div", { className: 'flex items-center space-x-4 overflow-hidden', children: [_jsx("div", { children: "\uD83C\uDDFA\uD83C\uDDF8" }), _jsx("div", { className: 'truncate font-medium', children: "Clean Monochrome Workspace in D\u00FCsseldorf, Germany A Designer\u2019s Dual Apple Studio Display Workspace in Canada" })] }) }), _jsxs(DataListItemValue, { children: [_jsx(DataListItemValueAbs, { children: "997,999,999" }), _jsx(DataListItemValuePerc, { children: "100%" })] })] }), _jsxs(DataListRow, { children: [_jsx(DataListBar, { style: {
                                    width: '93%'
                                } }), _jsx(DataListItemContent, { children: _jsxs("div", { className: 'flex items-center space-x-4 overflow-hidden', children: [_jsx("div", { children: "\uD83C\uDDFA\uD83C\uDDF8" }), _jsx("div", { className: 'truncate font-medium', children: "No percentage value, no animation" })] }) }), _jsx(DataListItemValue, { children: _jsx(DataListItemValueAbs, { children: "846.26" }) })] }), _jsxs(DataListRow, { children: [_jsx(DataListBar, { style: {
                                    width: '74%'
                                } }), _jsx(DataListItemContent, { children: _jsx("div", { className: 'flex items-center space-x-4 overflow-hidden', children: _jsxs("div", { className: 'flex items-center gap-3 truncate', children: [_jsx("div", { children: "\uD83C\uDFF4\u200D\u2620\uFE0F" }), _jsxs("div", { className: 'overflow-hidden', children: [_jsx("div", { className: 'truncate font-medium', children: "Clean Monochrome Workspace in D\u00FCsseldorf, Germany A Designer\u2019s Dual Apple Studio Display Workspace in Canada" }), _jsx("div", { className: 'truncate text-muted-foreground', children: "Published" })] })] }) }) }), _jsxs(DataListItemValue, { children: [_jsx(DataListItemValueAbs, { children: "662" }), _jsx(DataListItemValuePerc, { children: "74%" })] })] }), _jsxs(DataListRow, { children: [_jsx(DataListItemContent, { children: "No bar, no animation, no nothing" }), _jsx(DataListItemValue, { children: _jsx(DataListItemValueAbs, { children: "19" }) })] })] })
        ]
    }
};
