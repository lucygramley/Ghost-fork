import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// FocusContext.tsx
import NiceModal from '@ebay/nice-modal-react';
import { createContext, useContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalDirtyStateProvider } from '../hooks/useGlobalDirtyState';
const DesignSystemContext = createContext({
    isAnyTextFieldFocused: false,
    setFocusState: () => { },
    fetchKoenigLexical: async () => { },
    darkMode: false
});
export const useDesignSystem = () => useContext(DesignSystemContext);
export const useFocusContext = () => {
    const context = useDesignSystem();
    if (!context) {
        throw new Error('useFocusContext must be used within a FocusProvider');
    }
    return context;
};
const DesignSystemProvider = ({ fetchKoenigLexical, darkMode, children }) => {
    const [isAnyTextFieldFocused, setIsAnyTextFieldFocused] = useState(false);
    const setFocusState = (value) => {
        setIsAnyTextFieldFocused(value);
    };
    return (_jsx(DesignSystemContext.Provider, { value: { isAnyTextFieldFocused, setFocusState, fetchKoenigLexical, darkMode }, children: _jsxs(GlobalDirtyStateProvider, { children: [_jsx(Toaster, {}), _jsx(NiceModal.Provider, { children: children })] }) }));
};
export default DesignSystemProvider;
