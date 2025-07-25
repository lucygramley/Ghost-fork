import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import clsx from 'clsx';
const FileUpload = ({ id, onUpload, children, style, unstyled = false, inputRef, className, dragIndicatorClassName, accept, ...props }) => {
    const [fileKey, setFileKey] = useState(Date.now());
    const [isDragging, setIsDragging] = useState(false);
    const handleFileChange = (event) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            onUpload?.(selectedFile);
        }
        setFileKey(Date.now());
    };
    const handleDrop = (event) => {
        handleStopDragging(event);
        const selectedFile = event.dataTransfer.files?.[0];
        if (selectedFile) {
            onUpload?.(selectedFile);
        }
        setFileKey(Date.now());
    };
    const handleDragging = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };
    const handleStopDragging = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };
    return (_jsxs("label", { className: clsx('relative', className), htmlFor: id, style: style, onDragEnter: handleDragging, onDragLeave: handleStopDragging, onDragOver: handleDragging, onDrop: handleDrop, ...props, children: [_jsx("div", { className: clsx({ 'absolute inset-1 rounded': true, 'border-2 border-dashed border-grey-400/25': isDragging }, isDragging && [dragIndicatorClassName]) }), _jsx("input", { ref: inputRef || null, accept: accept, id: id, type: "file", hidden: true, onChange: handleFileChange }, fileKey), (typeof children === 'string') ?
                _jsx("div", { className: !unstyled ? `inline-flex h-[34px] cursor-pointer items-center justify-center rounded px-4 text-sm font-semibold hover:bg-grey-100 dark:text-white dark:hover:bg-grey-900` : '', children: children })
                :
                    children] }));
};
export default FileUpload;
