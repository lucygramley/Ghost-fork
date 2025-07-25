import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import { Toaster } from '../components/ui/sonner';
import { createPortal } from 'react-dom';
// import {FetchKoenigLexical} from '../global/form/HtmlEditor';
import { GlobalDirtyStateProvider } from '../hooks/use-global-dirty-state';
import Icon from '../components/ui/icon';
import { SHADE_APP_NAMESPACES } from '@/ShadeApp';
const ShadeContext = createContext({
    isAnyTextFieldFocused: false,
    setFocusState: () => { },
    // fetchKoenigLexical: async () => {},
    darkMode: false
});
export const useShade = () => useContext(ShadeContext);
export const useFocusContext = () => {
    const context = useShade();
    if (!context) {
        throw new Error('useFocusContext must be used within a FocusProvider');
    }
    return context;
};
const ToasterPortal = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    return mounted
        ? createPortal(_jsx("div", { className: SHADE_APP_NAMESPACES, children: _jsx(Toaster, { icons: {
                    error: _jsx(Icon.ErrorFill, { className: 'text-red' }),
                    success: _jsx(Icon.SuccessFill, { className: 'text-green' }),
                    info: _jsx(Icon.InfoFill, { className: 'text-gray-500' })
                }, position: 'bottom-left', toastOptions: {
                    classNames: {
                        title: '!mt-[-1px] !text-md !font-semibold !leading-tighter !tracking-[0.1px]',
                        description: '!text-gray-900 dark:!text-gray-300 !text-sm !mt-px',
                        icon: '!ml-0'
                    },
                    style: {
                        alignItems: 'flex-start',
                        maxWidth: '290px'
                    }
                } }) }), document.body)
        : null;
};
const ShadeProvider = ({ darkMode, children }) => {
    const [isAnyTextFieldFocused, setIsAnyTextFieldFocused] = useState(false);
    const setFocusState = (value) => {
        setIsAnyTextFieldFocused(value);
    };
    return (_jsx(ShadeContext.Provider, { value: { isAnyTextFieldFocused, setFocusState, darkMode }, children: _jsxs(GlobalDirtyStateProvider, { children: [children, _jsx(ToasterPortal, {})] }) }));
};
export default ShadeProvider;
