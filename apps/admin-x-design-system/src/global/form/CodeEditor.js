import { jsx as _jsx } from "react/jsx-runtime";
import React, { Suspense, forwardRef } from 'react';
// Imported asynchronously to avoid including CodeMirror in the main bundle
const CodeEditorView = React.lazy(() => import('./CodeEditorView'));
const CodeEditor = forwardRef(function CodeEditor(props, ref) {
    return (_jsx(Suspense, { fallback: null, children: _jsx(CodeEditorView, { ...props, ref: ref }) }));
});
export default CodeEditor;
