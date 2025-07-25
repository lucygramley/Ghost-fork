import { jsx as _jsx } from "react/jsx-runtime";
import { Input } from './input';
const meta = {
    title: 'Components / Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
    decorators: [
        Story => (_jsx("div", { style: { padding: '24px' }, children: _jsx(Story, {}) }))
    ]
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Type something...'
    }
};
