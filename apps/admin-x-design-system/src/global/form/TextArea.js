import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import clsx from 'clsx';
import { useFocusContext } from '../../providers/DesignSystemProvider';
import Heading from '../Heading';
import Hint from '../Hint';
import * as FormPrimitive from '@radix-ui/react-form';
const TextArea = ({ inputRef, title, value, rows = 3, maxLength, resize = 'none', error, placeholder, hint, fontStyle = 'sans', className, onChange, onFocus, onBlur, ...props }) => {
    const id = useId();
    const { setFocusState } = useFocusContext();
    const handleFocus = (e) => {
        setFocusState(true);
        onFocus?.(e);
    };
    const handleBlur = (e) => {
        setFocusState(false);
        onBlur?.(e);
    };
    let styles = clsx('order-2 rounded-lg border bg-grey-150 px-3 py-2 transition-all dark:bg-grey-900 dark:text-white', error ? 'border-red bg-white' : 'border-transparent placeholder:text-grey-500 hover:bg-grey-100 focus:border-green focus:bg-white focus:shadow-[0_0_0_2px_rgba(48,207,67,0.25)] dark:placeholder:text-grey-800 dark:hover:bg-grey-925 dark:focus:bg-grey-950', title && 'mt-1.5', fontStyle === 'mono' && 'font-mono text-sm', className);
    switch (resize) {
        case 'both':
            styles += ' resize ';
            break;
        case 'vertical':
            styles += ' resize-y ';
            break;
        case 'horizontal':
            styles += ' resize-x ';
            break;
        case 'none':
            styles += ' resize-none ';
            break;
        default:
            styles += ' resize ';
            break;
    }
    return (_jsx(FormPrimitive.Root, { asChild: true, children: _jsxs("div", { className: 'flex flex-col', children: [_jsx(FormPrimitive.Field, { name: id, asChild: true, children: _jsx(FormPrimitive.Control, { asChild: true, children: _jsx("textarea", { ref: inputRef, className: styles, id: id, maxLength: maxLength, placeholder: placeholder, rows: rows, value: value, onBlur: handleBlur, onChange: onChange, onFocus: handleFocus, ...props }) }) }), title && _jsx(Heading, { className: 'order-1', htmlFor: id, useLabelTag: true, children: title }), hint && _jsx(Hint, { className: 'order-3', color: error ? 'red' : '', children: hint })] }) }));
};
export default TextArea;
