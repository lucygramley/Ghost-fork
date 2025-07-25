import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { Fragment, useRef } from 'react';
import Heading from '../Heading';
const ColorSwatch = ({ hex, value, title, size = 'md', isSelected, onSelect }) => {
    const ref = useRef(null);
    const onSelectHandler = (e) => {
        e.preventDefault();
        if (value !== undefined) {
            onSelect(value);
        }
        else {
            onSelect(hex);
        }
    };
    const isTransparent = (hex.length === 4 && hex[3] === '0') || (hex.length === 8 && hex.slice(6) === '00');
    let sizeClass = 'h-5 w-5';
    switch (size) {
        case 'lg':
            sizeClass = 'w-6 h-6';
            break;
    }
    return (_jsx("button", { ref: ref, className: clsx(`relative flex shrink-0 cursor-pointer items-center rounded-full border border-grey-300 dark:border-grey-800`, sizeClass, isSelected && 'outline outline-2 outline-green'), style: { backgroundColor: hex }, title: title, type: "button", onClick: onSelectHandler, children: isTransparent && _jsx("div", { className: "absolute left-0 top-0 z-10 w-[136%] origin-left rotate-45 border-b border-b-red" }) }));
};
/** Should usually be used via [ColorPickerField](?path=/docs/global-form-color-picker-field--docs) */
const ColorIndicator = ({ title, value, swatches, swatchSize = 'md', onSwatchChange, onTogglePicker, isExpanded, picker = true, containerClassName }) => {
    const selectedSwatch = swatches.find(swatch => swatch.value === value || swatch.hex === value);
    containerClassName = clsx('flex flex-col gap-3');
    const showSwatches = isExpanded || !picker;
    return (_jsxs("div", { className: containerClassName, children: [title && _jsx(Heading, { useLabelTag: true, children: title }), _jsxs("div", { className: 'flex gap-1', children: [showSwatches && (_jsx("div", { className: `flex items-center gap-1`, children: swatches.map(({ customContent, ...swatch }) => (customContent ? _jsx(Fragment, { children: customContent }, swatch.title) : _jsx(ColorSwatch, { isSelected: selectedSwatch?.title === swatch.title, size: swatchSize, onSelect: onSwatchChange, ...swatch }, swatch.title))) })), picker && (_jsxs("button", { "aria-label": "Pick color", className: "relative size-6 cursor-pointer rounded-full border border-grey-250 dark:border-grey-800", type: "button", onClick: onTogglePicker, children: [_jsx("div", { className: 'absolute inset-0 rounded-full bg-[conic-gradient(hsl(360,100%,50%),hsl(315,100%,50%),hsl(270,100%,50%),hsl(225,100%,50%),hsl(180,100%,50%),hsl(135,100%,50%),hsl(90,100%,50%),hsl(45,100%,50%),hsl(0,100%,50%))]' }), selectedSwatch && (_jsx("div", { className: "absolute inset-[3px] overflow-hidden rounded-full border border-white dark:border-grey-950", style: { backgroundColor: selectedSwatch.hex }, children: selectedSwatch.hex === 'transparent' && _jsx("div", { className: "absolute left-[3px] top-[3px] z-10 w-[136%] origin-left rotate-45 border-b border-b-red" }) })), !selectedSwatch && value && (_jsx("div", { className: "absolute inset-[3px] overflow-hidden rounded-full border border-white dark:border-grey-950", style: { backgroundColor: value }, children: value === 'transparent' && _jsx("div", { className: "absolute left-[3px] top-[3px] z-10 w-[136%] origin-left rotate-45 border-b border-b-red" }) }))] }))] })] }));
};
export default ColorIndicator;
