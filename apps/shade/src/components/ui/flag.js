import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from '@/lib/utils';
import ReactFlag from 'react-world-flags';
const Flag = ({ className, countryCode, width = '22px', height = '14px', fallback }) => {
    const sizeStyle = {
        width: width,
        height: height
    };
    return (_jsx("div", { className: cn('relative flex items-center justify-center overflow-hidden rounded-[2px]', className), style: sizeStyle, children: _jsx(ReactFlag, { className: 'absolute w-auto max-w-none rounded-[2px]', code: `${countryCode}`, fallback: fallback || _jsx("span", { className: 'h-[14px] w-[22px] rounded-[2px] bg-muted-foreground/20', style: sizeStyle }), style: {
                height: height
            } }) }));
};
export { Flag };
