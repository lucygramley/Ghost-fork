import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './dropdown-menu';
import { Button } from './button';
const meta = {
    title: 'Components / Dropdown menu',
    component: DropdownMenu,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        children: [
            _jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: "Open" }) }, "trigger"),
            _jsxs(DropdownMenuContent, { className: "w-56", children: [_jsx(DropdownMenuLabel, { children: "My Account" }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuGroup, { children: [_jsxs(DropdownMenuItem, { children: ["Profile", _jsx(DropdownMenuShortcut, { children: "\u21E7\u2318P" })] }), _jsxs(DropdownMenuItem, { children: ["Billing", _jsx(DropdownMenuShortcut, { children: "\u2318B" })] }), _jsxs(DropdownMenuItem, { children: ["Settings", _jsx(DropdownMenuShortcut, { children: "\u2318S" })] }), _jsxs(DropdownMenuItem, { children: ["Keyboard shortcuts", _jsx(DropdownMenuShortcut, { children: "\u2318K" })] })] }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuGroup, { children: [_jsx(DropdownMenuItem, { children: "Team" }), _jsxs(DropdownMenuSub, { children: [_jsx(DropdownMenuSubTrigger, { children: "Invite users" }), _jsx(DropdownMenuPortal, { children: _jsxs(DropdownMenuSubContent, { children: [_jsx(DropdownMenuItem, { children: "Email" }), _jsx(DropdownMenuItem, { children: "Message" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "More..." })] }) })] }), _jsxs(DropdownMenuItem, { children: ["New Team", _jsx(DropdownMenuShortcut, { children: "\u2318+T" })] })] }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "GitHub" }), _jsx(DropdownMenuItem, { children: "Support" }), _jsx(DropdownMenuItem, { disabled: true, children: "API" }), _jsx(DropdownMenuSeparator, {}), _jsxs(DropdownMenuItem, { children: ["Log out", _jsx(DropdownMenuShortcut, { children: "\u21E7\u2318Q" })] })] }, "content")
        ]
    }
};
