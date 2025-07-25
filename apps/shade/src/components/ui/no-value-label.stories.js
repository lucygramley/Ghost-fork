import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NoValueLabel, NoValueLabelIcon } from './no-value-label';
import { Ban } from 'lucide-react';
const meta = {
    title: 'Components / No value label',
    component: NoValueLabel,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {},
    render: () => (_jsxs(NoValueLabel, { children: [_jsx(NoValueLabelIcon, { children: _jsx(Ban, {}) }), "You blocked this domain."] }))
};
