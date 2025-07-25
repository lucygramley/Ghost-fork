import { useCallback, useEffect, useState } from 'react';
const useForm = ({ initialState, savingDelay, savedDelay = 2000, onSave, onSaveError, onSavedStateReset: onSaveCompleted, onValidate }) => {
    const [formState, setFormState] = useState(initialState);
    const [saveState, setSaveState] = useState('');
    const [errors, setErrors] = useState({});
    // Reset saved state after a delay
    // To prevent infinite renders, uses the value of onSaveCompleted from when the form was saved
    useEffect(() => {
        if (saveState === 'saved') {
            setTimeout(() => {
                onSaveCompleted?.();
                setSaveState(state => (state === 'saved' ? '' : state));
            }, savedDelay);
        }
    }, [saveState, savedDelay]); // eslint-disable-line react-hooks/exhaustive-deps
    const isValid = (errs) => Object.values(errs).filter(Boolean).length === 0;
    const validate = useCallback(() => {
        if (!onValidate) {
            return true;
        }
        const newErrors = onValidate(formState);
        setErrors(newErrors);
        return isValid(newErrors);
    }, [formState, onValidate]);
    // function to save the changed settings via API
    const handleSave = useCallback(async (options = {}) => {
        if (!validate()) {
            setSaveState('error');
            return false;
        }
        if (saveState !== 'unsaved' && !options.force && !options.fakeWhenUnchanged) {
            return true;
        }
        const timeBefore = Date.now();
        setSaveState('saving');
        try {
            if (saveState === 'unsaved' || options.force) {
                await onSave(formState);
            }
            const duration = Date.now() - timeBefore;
            if (savingDelay && duration < savingDelay) {
                await new Promise((resolve) => {
                    setTimeout(resolve, savingDelay - duration);
                });
            }
            setSaveState('saved');
            return true;
        }
        catch (e) {
            await onSaveError?.(e);
            setSaveState('unsaved');
            throw e;
        }
    }, [formState, saveState, savingDelay, onSave, onSaveError, validate]);
    const updateForm = useCallback((updater) => {
        setFormState(updater);
        setSaveState('unsaved');
    }, []);
    let okColor = 'black';
    if (saveState === 'saved') {
        okColor = 'green';
    }
    else if (saveState === 'error') {
        okColor = 'red';
    }
    let okLabel = '';
    if (saveState === 'saved') {
        okLabel = 'Saved';
    }
    else if (saveState === 'saving') {
        okLabel = 'Saving...';
    }
    else if (saveState === 'error') {
        okLabel = 'Retry';
    }
    const okProps = {
        disabled: saveState === 'saving',
        color: okColor,
        label: okLabel || undefined
    };
    return {
        formState,
        saveState,
        handleSave,
        updateForm,
        setFormState,
        reset() {
            setFormState(initialState);
            setSaveState('');
        },
        validate,
        isValid: isValid(errors),
        clearError: (field) => {
            setErrors(state => ({ ...state, [field]: '' }));
        },
        errors,
        setErrors,
        okProps
    };
};
export default useForm;
