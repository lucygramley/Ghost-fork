import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReactComponent as UserIcon } from '../assets/icons/single-user-fill.svg';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
const Avatar = ({ image, label, labelColor, bgColor, size, className }) => {
    let avatarSize = '';
    let fallbackPosition = ' -mb-2 ';
    switch (size) {
        case 'sm':
            avatarSize = ' w-7 h-7 text-sm ';
            break;
        case 'lg':
            avatarSize = ' w-12 h-12 text-xl ';
            break;
        case 'xl':
            avatarSize = ' w-16 h-16 text-2xl ';
            fallbackPosition = ' -mb-3 ';
            break;
        case '2xl':
            avatarSize = ' w-20 h-20 text-2xl ';
            fallbackPosition = ' -mb-3 ';
            break;
        default:
            avatarSize = ' w-10 h-10 text-md ';
            break;
    }
    return (_jsxs(AvatarPrimitive.Root, { className: `relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${avatarSize}`, children: [image ?
                _jsx(AvatarPrimitive.Image, { className: `absolute z-20 h-full w-full object-cover ${className && className}`, src: image }) :
                _jsx("span", { className: `${labelColor && `text-${labelColor}`} relative z-10 inline-flex h-full w-full items-center justify-center p-2 font-semibold ${className && className}`, style: bgColor ? { backgroundColor: bgColor } : {}, children: label }), _jsx(AvatarPrimitive.Fallback, { asChild: true, children: _jsx(UserIcon, { className: `${fallbackPosition} absolute z-0 h-full w-full text-grey-300` }) })] }));
};
export default Avatar;
