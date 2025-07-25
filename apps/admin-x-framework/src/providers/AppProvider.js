import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
const AppContext = createContext(undefined);
export const AppProvider = ({ appSettings, children }) => {
    const appContextValue = {
        appSettings,
        externalNavigate: (url) => {
            window.location.href = url;
        }
    };
    return (_jsx(AppContext.Provider, { value: appContextValue, children: children }));
};
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
