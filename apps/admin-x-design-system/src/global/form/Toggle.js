import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { useId } from 'react';
import { Heading6StylesGrey } from '../Heading';
import Separator from '../Separator';
import * as TogglePrimitive from '@radix-ui/react-switch';
const Toggle = ({ size, direction, label, labelStyle = 'value', containerClasses, labelClasses, toggleBg = 'black', hint, separator, error, checked, disabled, name, onChange, gap = 'gap-2', testId }) => {
    const id = useId();
    let sizeStyles = '';
    let thumbSizeStyles = '';
    let labelStyles = '';
    switch (size) {
        case 'sm':
            sizeStyles = ' h-3 w-5';
            thumbSizeStyles = ' h-2 w-2 data-[state=checked]:translate-x-[10px]';
            labelStyles = 'mt-[-5.5px]';
            break;
        case 'lg':
            sizeStyles = ' h-5 w-8';
            thumbSizeStyles = ' h-4 w-4 data-[state=checked]:translate-x-[14px]';
            labelStyles = 'mt-[-1px]';
            break;
        default:
            sizeStyles = ' min-w-[28px] h-4 w-7';
            thumbSizeStyles = ' h-3 w-3 data-[state=checked]:translate-x-[14px]';
            labelStyles = 'mt-[-3px]';
            break;
    }
    labelStyles = clsx(labelClasses, labelStyles);
    if (labelStyle === 'heading') {
        direction = 'rtl';
    }
    let toggleBgClass;
    switch (toggleBg) {
        case 'stripetest':
            toggleBgClass = 'data-[state=checked]:bg-[#EC6803] dark:data-[state=checked]:bg-[#EC6803]';
            break;
        case 'green':
            toggleBgClass = 'data-[state=checked]:bg-green';
            break;
        default:
            toggleBgClass = 'data-[state=checked]:bg-black dark:data-[state=checked]:bg-green';
            break;
    }
    const handleCheckedChange = (isChecked) => {
        if (onChange) {
            const event = {
                target: { checked: isChecked }
            };
            onChange(event);
        }
    };
    return (_jsxs("div", { children: [_jsxs("div", { className: `group flex items-start ${gap} dark:text-white ${direction === 'rtl' && 'justify-between'} ${separator && 'pb-2'} ${containerClasses}`, children: [_jsx(TogglePrimitive.Root, { className: clsx(toggleBgClass, 'appearance-none rounded-full bg-grey-300 transition duration-100 dark:bg-grey-800', 'enabled:hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 enabled:group-hover:opacity-80', sizeStyles, direction === 'rtl' && ' order-2'), "data-testid": testId, defaultChecked: checked, disabled: disabled, id: id, name: name, onCheckedChange: handleCheckedChange, children: _jsx(TogglePrimitive.Thumb, { className: clsx(thumbSizeStyles, 'block translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform') }) }), label &&
                        _jsxs("label", { className: `flex grow flex-col ${!disabled && 'hover:cursor-pointer'} ${direction === 'rtl' && 'order-1'} ${labelStyles}`, htmlFor: id, children: [labelStyle === 'heading' ?
                                    _jsx("span", { className: `${Heading6StylesGrey} mt-1`, children: label })
                                    :
                                        _jsx("span", { children: label }), hint && _jsx("span", { className: `text-xs ${error ? 'text-red' : 'text-grey-700 dark:text-grey-600'}`, children: hint })] })] }), (separator || error) && _jsx(Separator, { className: error ? 'border-red' : '' })] }));
};
export default Toggle;
