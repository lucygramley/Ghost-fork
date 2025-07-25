import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback, useContext, useEffect, useId, useState } from 'react';
const GlobalDirtyStateContext = React.createContext({ isDirty: false, setGlobalDirtyState: () => { } });
export const GlobalDirtyStateProvider = ({ children }) => {
    // Allows each component to register itself as dirty with a unique ID, so when one is reset/saved the overall page dirty state persists
    const [dirtyIds, setDirtyIds] = useState([]);
    const setGlobalDirtyState = useCallback((id, dirty) => {
        setDirtyIds((current) => {
            if (dirty && !current.includes(id)) {
                return [...current, id];
            }
            if (!dirty && current.includes(id)) {
                return current.filter(currentId => currentId !== id);
            }
            return current;
        });
    }, []);
    return (_jsx(GlobalDirtyStateContext.Provider, { value: { isDirty: dirtyIds.length > 0, setGlobalDirtyState }, children: children }));
};
const useGlobalDirtyState = () => {
    const id = useId();
    const { isDirty, setGlobalDirtyState } = useContext(GlobalDirtyStateContext);
    useEffect(() => {
        // Make sure the state is reset when the component unmounts
        return () => setGlobalDirtyState(id, false);
    }, [id, setGlobalDirtyState]);
    const setDirty = useCallback((dirty) => setGlobalDirtyState(id, dirty), [id, setGlobalDirtyState]);
    return {
        isDirty,
        setGlobalDirtyState: setDirty
    };
};
export default useGlobalDirtyState;
