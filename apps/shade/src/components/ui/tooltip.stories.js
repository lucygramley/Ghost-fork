import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
const meta = {
    title: 'Components / Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(TooltipProvider, { children: _jsx(Story, {}) }))
    ],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const Default = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(TooltipTrigger, { children: "Hover me" }), _jsx(TooltipContent, { children: "Tooltip content" })] }))
    }
};
