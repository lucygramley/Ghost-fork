import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Toggle from './Toggle';
import ToggleGroup from './ToggleGroup';
const meta = {
    title: 'Global / Form / Toggle Group',
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))],
    component: ToggleGroup,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        children: _jsxs(_Fragment, { children: [_jsx(Toggle, { direction: 'rtl', label: 'Minci' }), _jsx(Toggle, { direction: 'rtl', label: 'Conker' }), _jsx(Toggle, { direction: 'rtl', label: 'Kevin' })] })
    }
};
