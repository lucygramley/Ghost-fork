import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as Sentry from '@sentry/react';
import { Suspense, useCallback, useMemo } from 'react';
import { useDesignSystem, useFocusContext } from '../../providers/DesignSystemProvider';
import ErrorBoundary from '../ErrorBoundary';
const loadKoenig = function (fetchKoenigLexical) {
    let status = 'pending';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let response;
    const suspender = fetchKoenigLexical().then((res) => {
        status = 'success';
        response = res;
    }, (err) => {
        status = 'error';
        response = err;
    });
    const read = () => {
        switch (status) {
            case 'pending':
                throw suspender;
            case 'error':
                throw response;
            default:
                return response;
        }
    };
    return { read };
};
const KoenigWrapper = ({ editor, value, onChange, onBlur, placeholder, nodes, emojiPicker = true, darkMode = false }) => {
    const onError = useCallback((error) => {
        try {
            Sentry.captureException({
                error,
                tags: { lexical: true },
                contexts: {
                    koenig: {
                        version: window['@tryghost/koenig-lexical']?.version
                    }
                }
            });
        }
        catch (e) {
            // if this fails, Sentry is probably not initialized
            console.error(e); // eslint-disable-line
        }
        console.error(error); // eslint-disable-line
    }, []);
    const { setFocusState } = useFocusContext();
    const handleBlur = () => {
        if (onBlur) {
            onBlur();
        }
        setFocusState(false);
    };
    const handleFocus = () => {
        setFocusState(true);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const koenig = useMemo(() => new Proxy({}, {
        get: (_target, prop) => {
            return editor.read()[prop];
        }
    }), [editor]);
    const transformers = {
        DEFAULT_NODES: koenig.DEFAULT_TRANSFORMERS,
        BASIC_NODES: koenig.BASIC_TRANSFORMERS,
        MINIMAL_NODES: koenig.MINIMAL_TRANSFORMERS
    };
    const handleSetHtml = (html) => {
        // Workaround for a bug in Lexical where it adds style attributes everywhere with white-space: pre-wrap
        // Likely related: https://github.com/facebook/lexical/issues/4255
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const elements = doc.querySelectorAll('*');
        elements.forEach((element) => {
            element.style.removeProperty('white-space');
            if (!element.getAttribute('style')) {
                element.removeAttribute('style');
            }
        });
        // Koenig sends this event on load without changing the value, so this prevents forms from being marked as unsaved
        if (doc.body.innerHTML !== value) {
            onChange?.(doc.body.innerHTML);
        }
    };
    return (_jsx(koenig.KoenigComposer, { darkMode: darkMode, nodes: koenig[nodes || 'DEFAULT_NODES'], onError: onError, children: _jsxs(koenig.KoenigComposableEditor, { className: 'koenig-lexical koenig-lexical-editor-input', isSnippetsEnabled: false, markdownTransformers: transformers[nodes || 'DEFAULT_NODES'], placeholderClassName: 'koenig-lexical-editor-input-placeholder line-clamp-1', placeholderText: placeholder, singleParagraph: true, onBlur: handleBlur, onFocus: handleFocus, children: [_jsx(koenig.HtmlOutputPlugin, { html: value, setHtml: handleSetHtml }), emojiPicker ? _jsx(koenig.EmojiPickerPlugin, {}) : null] }) }));
};
const HtmlEditor = ({ className, ...props }) => {
    const { fetchKoenigLexical, darkMode } = useDesignSystem();
    const editorResource = useMemo(() => loadKoenig(fetchKoenigLexical), [fetchKoenigLexical]);
    return _jsx("div", { className: className || 'w-full', children: _jsx("div", { className: "koenig-react-editor w-full [&_*]:!font-inherit [&_*]:!text-inherit", children: _jsx(ErrorBoundary, { name: 'editor', children: _jsx(Suspense, { fallback: _jsx("p", { className: "koenig-react-editor-loading", children: "Loading editor..." }), children: _jsx(KoenigWrapper, { ...props, darkMode: darkMode, editor: editorResource }) }) }) }) });
};
export default HtmlEditor;
