import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { useCallback, useEffect, useRef } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { ReactComponent as EyedropperIcon } from '../../assets/icons/eyedropper.svg';
import Button from '../Button';
/** Should usually be used via [ColorPickerField](?path=/docs/global-form-color-picker-field--docs) */
const ColorPicker = ({ hexValue, eyedropper, clearButtonValue, containerClassName, onChange }) => {
    // HexColorInput doesn't support adding a ref on the input itself
    const inputWrapperRef = useRef(null);
    const stopPropagation = useCallback((e) => {
        e.stopPropagation();
        const inputElement = inputWrapperRef.current?.querySelector('input');
        const isInputField = e.target === inputElement;
        // Allow text selection for events on the input field
        if (isInputField) {
            return;
        }
        // Prevent closing the color picker when clicking somewhere inside it
        inputWrapperRef.current?.querySelector('input')?.focus();
        e.preventDefault();
    }, []);
    const isUsingColorPicker = useRef(false);
    const stopUsingColorPicker = useCallback(() => {
        isUsingColorPicker.current = false;
        inputWrapperRef.current?.querySelector('input')?.focus();
        document.removeEventListener('mouseup', stopUsingColorPicker);
        document.removeEventListener('touchend', stopUsingColorPicker);
    }, []);
    const startUsingColorPicker = useCallback(() => {
        isUsingColorPicker.current = true;
        document.addEventListener('mouseup', stopUsingColorPicker);
        document.addEventListener('touchend', stopUsingColorPicker);
    }, [stopUsingColorPicker]);
    const openColorPicker = useCallback((e) => {
        e.preventDefault();
        if (!window.EyeDropper) {
            return;
        }
        isUsingColorPicker.current = true;
        document.body.style.setProperty('pointer-events', 'none');
        const eyeDropper = new window.EyeDropper();
        eyeDropper.open()
            .then(result => onChange?.(result.sRGBHex))
            .finally(() => {
            isUsingColorPicker.current = false;
            document.body.style.removeProperty('pointer-events');
            inputWrapperRef.current?.querySelector('input')?.focus();
        });
    }, [onChange]);
    useEffect(() => {
        inputWrapperRef.current?.querySelector('input')?.focus();
    }, []);
    const focusHexInputOnClick = useCallback(() => {
        inputWrapperRef.current?.querySelector('input')?.focus();
    }, []);
    containerClassName = clsx('mt-2', containerClassName);
    /*
    position: absolute;
    z-index: 300;
    background: white;
    padding: 10px;
    border-radius: 12px;
    top: 230px;
    right: 50px;
    min-width: 240px;
    */
    return (_jsxs("div", { className: containerClassName, onMouseDown: stopPropagation, onTouchStart: stopPropagation, children: [_jsx(HexColorPicker, { className: 'w-full', color: hexValue || '#ffffff', onChange: onChange, onMouseDown: startUsingColorPicker, onTouchStart: startUsingColorPicker }), _jsxs("div", { className: "mt-3 flex gap-2", children: [_jsxs("div", { ref: inputWrapperRef, className: 'peer relative order-2 flex h-10 w-full items-center', onClick: focusHexInputOnClick, children: [_jsx("span", { className: 'absolute left-2 top-[9px] z-10 ml-1 mr-2 text-grey-700', children: "#" }), _jsx(HexColorInput, { "aria-label": "Color value", className: 'z-[1] w-full rounded-md border border-transparent bg-grey-150 p-2 pl-6 transition-all hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_1px_rgba(48,207,67,1)] dark:bg-grey-900 dark:text-white dark:focus:bg-grey-925', color: hexValue, onChange: onChange }), eyedropper && !!window.EyeDropper && (_jsx("button", { className: "absolute inset-y-0 right-3 z-50 my-auto h-4 w-4 p-[1px]", type: "button", onClick: openColorPicker, children: _jsx(EyedropperIcon, { className: "h-full w-full" }) }))] }), clearButtonValue !== undefined && _jsx(Button, { color: 'grey', value: 'Clear', onClick: () => onChange?.(clearButtonValue) })] })] }));
};
export default ColorPicker;
