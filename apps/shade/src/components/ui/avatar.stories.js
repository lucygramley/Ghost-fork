import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
const meta = {
    title: 'Components / Avatar',
    component: Avatar,
    tags: ['autodocs'],
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
        children: _jsx(AvatarFallback, { children: "AG" })
    }
};
export const WithImage = {
    args: {
        children: (_jsxs(_Fragment, { children: [_jsx(AvatarImage, { src: "https://avatars.githubusercontent.com/u/2178663?s=200&v=4" }), _jsx(AvatarFallback, { children: "AG" })] }))
    }
};
