import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';
const Tooltip = ({ content, size = 'sm', children, containerClassName, tooltipClassName, origin = 'center' }) => {
    containerClassName = clsx('will-change-[opacity]', containerClassName);
    tooltipClassName = clsx('z-[9999] select-none rounded-sm bg-black px-2 py-0.5 leading-normal text-white will-change-[transform,opacity]', size === 'sm' && 'text-xs', size === 'md' && 'text-sm');
    return (_jsx(TooltipPrimitive.Provider, { delayDuration: 0, children: _jsxs(TooltipPrimitive.Root, { children: [_jsx(TooltipPrimitive.Trigger, { className: containerClassName, onClick: event => event.preventDefault(), children: children }), _jsx(TooltipPrimitive.Content, { align: origin, className: tooltipClassName, sideOffset: 4, onPointerDownOutside: event => event.preventDefault(), children: content })] }) }));
};
export default Tooltip;
