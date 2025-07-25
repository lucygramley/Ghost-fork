import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import CodeMirror from '@uiw/react-codemirror';
import clsx from 'clsx';
import React, { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { useFocusContext } from '../../providers/DesignSystemProvider';
import Heading from '../Heading';
import Hint from '../Hint';
const codeMirrorClasses = [
    '[&_.cm-editor]:bg-transparent',
    '[&_.cm-editor]:border-transparent',
    '[&_.cm-scroller]:font-mono',
    '[&_.cm-scroller]:border-transparent',
    '[&_.cm-activeLine]:bg-transparent',
    '[&_.cm-activeLineGutter]:bg-transparent',
    '[&_.cm-gutters]:bg-grey-75 dark:[&_.cm-gutters]:bg-grey-950',
    '[&_.cm-gutters]:text-grey-600 dark:[&_.cm-gutters]:text-grey-500',
    '[&_.cm-gutters]:border-grey-500 dark:[&_.cm-gutters]:border-grey-800',
    '[&_.cm-cursor]:border-grey-900 dark:[&_.cm-cursor]:border-grey-75',
    'dark:[&_.cm-tooltip-autocomplete.cm-tooltip_ul_li:not([aria-selected])]:bg-grey-975'
].join(' ');
// Meant to be imported asynchronously to avoid including CodeMirror in the main bundle
const CodeEditorView = forwardRef(function CodeEditorView({ title, value, height = '200px', error, hint, clearBg = true, extensions, onChange, onFocus, onBlur, className, ...props }, ref) {
    const id = useId();
    const sizeRef = useRef(null);
    const [width, setWidth] = useState(100);
    const [resolvedExtensions, setResolvedExtensions] = React.useState(null);
    const [basicSetup, setBasicSetup] = useState({
        crosshairCursor: false
    });
    const { setFocusState } = useFocusContext();
    const handleFocus = (e) => {
        onFocus?.(e);
        setFocusState(true);
    };
    const handleBlur = (e) => {
        onBlur?.(e);
        setFocusState(false);
    };
    useEffect(() => {
        Promise.all(extensions).then(setResolvedExtensions);
        setBasicSetup(setup => ({ setup, searchKeymap: false }));
    }, [extensions]);
    useEffect(() => {
        const resizeObserver = new ResizeObserver(([entry]) => {
            setWidth(entry.contentRect.width);
        });
        resizeObserver.observe(sizeRef.current);
        return () => resizeObserver.disconnect();
    }, []);
    const styles = clsx('peer order-2 w-full max-w-full overflow-hidden rounded-sm border', clearBg ? 'bg-transparent' : 'bg-grey-75', error ? 'border-red' : 'border-grey-500 dark:border-grey-800', title && 'mt-2', height === 'full' && 'h-full', codeMirrorClasses, className);
    return _jsxs(_Fragment, { children: [_jsx("div", { ref: sizeRef }), resolvedExtensions && _jsxs("div", { className: height === 'full' ? 'h-full' : '', style: { width }, children: [_jsx(CodeMirror, { ref: ref, basicSetup: basicSetup, className: styles, extensions: resolvedExtensions, height: height === 'full' ? '100%' : height, value: value, onBlur: handleBlur, onChange: onChange, onFocus: handleFocus, ...props }), title && _jsx(Heading, { className: 'order-1 !text-grey-700 peer-focus:!text-black', htmlFor: id, useLabelTag: true, children: title }), hint && _jsx(Hint, { className: 'order-3', color: error ? 'red' : '', children: hint })] })] });
});
export default CodeEditorView;
