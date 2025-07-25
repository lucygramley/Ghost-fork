import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { forwardRef, useEffect } from 'react';
import ButtonGroup from '../global/ButtonGroup';
import SettingGroupHeader from './SettingGroupHeader';
const SettingGroup = forwardRef(function SettingGroup({ navid, testId, title, description, isVisible = true, isEditing, saveState, customHeader, customButtons, beta = false, children, hideEditButton, alwaysShowSaveButton = true, border = true, highlight = false, highlightOnModalClose = true, styles, onEditingChange, onSave, onCancel, enableCMDS = true }, ref) {
    const handleEdit = () => {
        onEditingChange?.(true);
    };
    const handleCancel = () => {
        onCancel?.();
        onEditingChange?.(false);
    };
    const handleSave = () => {
        onSave?.();
    };
    styles += ' border-grey-250 dark:border-grey-925';
    // The links visible before editing
    const viewButtons = [];
    if (!hideEditButton) {
        let label = 'Edit';
        if (saveState === 'saved') {
            label = 'Saved';
        }
        viewButtons.push({
            label,
            key: 'edit',
            color: 'clear',
            onClick: handleEdit
        });
    }
    else if (saveState === 'saved') {
        viewButtons.push({
            label: 'Saved',
            key: 'edit',
            color: 'green',
            onClick: handleEdit
        });
    }
    // The buttons that show when you are editing
    const editButtons = [
        {
            label: 'Cancel',
            key: 'cancel',
            onClick: handleCancel
        }
    ];
    if (saveState === 'unsaved' || alwaysShowSaveButton) {
        let label = 'Save';
        if (saveState === 'saving') {
            label = 'Saving...';
        }
        editButtons.push({
            label: label,
            key: 'save',
            color: saveState === 'unsaved' ? 'green' : 'light-grey',
            disabled: saveState !== 'unsaved',
            onClick: handleSave
        });
    }
    useEffect(() => {
        const handleCMDS = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                e.preventDefault();
                handleSave();
            }
        };
        if (enableCMDS) {
            window.addEventListener('keydown', handleCMDS);
            return () => {
                window.removeEventListener('keydown', handleCMDS);
            };
        }
    });
    const containerClasses = clsx('relative flex-col gap-6 rounded-xl transition-all hover:border-grey-200', border && 'border p-5 hover:shadow-sm md:p-7', isVisible ? 'flex' : 'hidden', (highlight && highlightOnModalClose) && 'border-grey-200 shadow-sm', !isEditing ? 'is-not-editing group/setting-group' : 'border-grey-200 shadow-sm', styles);
    if (!isEditing) {
        return (_jsxs("div", { className: containerClasses, "data-testid": testId, children: [_jsx("div", { ref: ref, className: 'absolute', id: navid && navid }), customHeader ? customHeader :
                    _jsx(SettingGroupHeader, { beta: beta, description: description, title: title, children: customButtons ? customButtons :
                            (onEditingChange && _jsx(ButtonGroup, { buttons: isEditing ? editButtons : viewButtons, className: isEditing ? 'mt-[-5px]  ' : '-mr-1 mt-[-5px]', size: 'sm' })) }), children] }));
    }
    else {
        return (_jsxs("div", { className: containerClasses, "data-testid": testId, children: [_jsx("div", { ref: ref, className: 'absolute', id: navid && navid }), customHeader ? customHeader :
                    _jsx(SettingGroupHeader, { beta: beta, description: description, title: title, children: customButtons ? customButtons :
                            (onEditingChange && _jsx(ButtonGroup, { buttons: isEditing ? editButtons : viewButtons, className: isEditing ? 'mt-[-5px]  ' : '-mr-1 mt-[-5px]', size: 'sm' })) }), children] }));
    }
});
export default SettingGroup;
