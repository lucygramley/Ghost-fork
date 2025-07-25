import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import { useId, useMemo, useEffect } from 'react';
import ReactSelect, { components } from 'react-select';
import AsyncSelect from 'react-select/async';
import { useFocusContext } from '../../providers/DesignSystemProvider';
import Heading from '../Heading';
import Hint from '../Hint';
import Icon from '../Icon';
const DropdownIndicator = ({ clearBg, ...props }) => (_jsx(components.DropdownIndicator, { ...props, children: _jsx("div", { className: `absolute top-1/2 mt-[-5px] block size-2 rotate-45 border-[1px] border-l-0 border-t-0 border-grey-900 content-[''] dark:border-grey-400 ${clearBg ? 'right-2' : 'right-[14px]'} ` }) }));
const ClearIndicator = props => (_jsx(components.ClearIndicator, { ...props, children: _jsx(Icon, { className: 'mr-2', name: 'close', size: 'xs' }) }));
const Option = ({ children, ...optionProps }) => (_jsxs(components.Option, { ...optionProps, children: [_jsxs("span", { className: optionProps.isSelected ? 'relative flex w-full items-center justify-between gap-2' : '', "data-testid": "select-option", "data-value": optionProps.data.value, children: [children, optionProps.isSelected && _jsx("span", { children: _jsx(Icon, { name: 'check', size: 14 }) })] }), optionProps.data.hint && _jsx("span", { className: "block text-xs text-grey-700 dark:text-grey-300", children: optionProps.data.hint })] }));
const Select = ({ async, title, hideTitle, size = 'md', prompt, options, selectedOption, onSelect, error, hint, clearBg = false, fullWidth = true, isSearchable = false, containerClassName, controlClasses, unstyled, disabled = false, testId, ...props }) => {
    const id = useId();
    const { setFocusState, isAnyTextFieldFocused } = useFocusContext();
    const handleFocus = () => {
        setFocusState(true);
    };
    const handleBlur = () => {
        setFocusState(false);
    };
    useEffect(() => {
        if (isAnyTextFieldFocused) {
            const handleEscapeKey = (event) => {
                if (event.key === 'Escape') {
                    // Fix for Safari - if an element in the modal is focused, closing it will jump to
                    // the bottom of the page because Safari tries to focus the "next" element in the DOM
                    if (document.activeElement && document.activeElement instanceof HTMLElement) {
                        document.activeElement.blur();
                    }
                    setFocusState(false);
                    // Prevent the event from bubbling up to the window level
                    event.stopPropagation();
                }
            };
            document.addEventListener('keydown', handleEscapeKey);
            // Clean up the event listener when the modal is closed
            return () => {
                document.removeEventListener('keydown', handleEscapeKey);
            };
        }
    }, [setFocusState, isAnyTextFieldFocused]);
    let containerClasses = '';
    if (!unstyled) {
        containerClasses = clsx('dark:text-white', fullWidth && 'w-full', disabled && 'cursor-not-allowed opacity-40');
    }
    containerClasses = clsx(containerClasses, containerClassName);
    const customClasses = {
        control: clsx(controlClasses?.control, 'h-9 min-h-[36px] w-full appearance-none rounded-lg border outline-none md:h-[38px] md:min-h-[38px] dark:text-white', size === 'xs' ? 'py-0 pr-2 text-xs' : 'py-1 pr-4', clearBg ? '' : 'bg-grey-150 px-3 dark:bg-grey-900', error ? 'border-red' : `border-transparent ${!clearBg && 'hover:bg-grey-100 dark:hover:bg-grey-925'}`, !disabled && 'cursor-pointer', (title && !clearBg) && 'mt-1.5'),
        valueContainer: clsx('mr-1.5 gap-1', controlClasses?.valueContainer),
        placeHolder: clsx('text-grey-700 dark:text-grey-800', controlClasses?.placeHolder),
        menu: clsx('z-[300] mt-0.5 overflow-hidden rounded-lg bg-white shadow-lg dark:border dark:border-grey-900 dark:bg-black', size === 'xs' && 'text-xs', controlClasses?.menu),
        option: clsx('group px-3 py-[7px] hover:cursor-pointer hover:bg-grey-100 dark:text-white dark:hover:bg-grey-900', controlClasses?.option),
        noOptionsMessage: clsx('nowrap p-3 text-grey-600', controlClasses?.noOptionsMessage),
        groupHeading: clsx('px-3 py-[7px] text-2xs font-semibold uppercase tracking-wide text-grey-700', controlClasses?.groupHeading),
        clearIndicator: clsx('', controlClasses?.clearIndicator)
    };
    const dropdownIndicatorComponent = useMemo(() => {
        return function DropdownIndicatorComponent(ddiProps) {
            return _jsx(DropdownIndicator, { ...ddiProps, clearBg: clearBg });
        };
    }, [clearBg]);
    const { components: propComponents = {}, ...restProps } = props;
    // Define your default components
    const defaultComponents = {
        DropdownIndicator: dropdownIndicatorComponent,
        Option,
        ClearIndicator
    };
    // Merge the default components with those passed via props
    const allComponents = {
        ...defaultComponents,
        ...propComponents
    };
    const customProps = {
        classNames: {
            menuList: () => 'z-[300]',
            valueContainer: () => customClasses.valueContainer,
            control: () => customClasses.control,
            placeholder: () => customClasses.placeHolder,
            menu: () => customClasses.menu,
            /* eslint-disable @typescript-eslint/no-explicit-any */
            option: (state) => {
                if (state.data.className) {
                    return clsx(customClasses.option, state.data.className);
                }
                return customClasses.option;
            },
            noOptionsMessage: () => customClasses.noOptionsMessage,
            groupHeading: () => customClasses.groupHeading,
            clearIndicator: () => customClasses.clearIndicator
        },
        // components: {DropdownIndicator: dropdownIndicatorComponent, Option, ClearIndicator},
        inputId: id,
        isClearable: false,
        isSearchable: isSearchable,
        options,
        placeholder: prompt ? prompt : '',
        value: selectedOption,
        isDisabled: disabled,
        unstyled: true,
        onChange: onSelect,
        onFocus: handleFocus,
        onBlur: handleBlur,
        menuPlacement: 'auto'
    };
    const select = (_jsxs(_Fragment, { children: [title && _jsx(Heading, { className: hideTitle ? 'sr-only' : '', grey: selectedOption || !prompt ? true : false, htmlFor: id, useLabelTag: true, children: title }), _jsx("div", { className: containerClasses, "data-testid": testId, children: async ?
                    _jsx(AsyncSelect, { ...customProps, ...props }) :
                    _jsx(ReactSelect, { ...customProps, ...restProps, components: allComponents }) }), hint && _jsx(Hint, { color: error ? 'red' : '', children: hint })] }));
    return (unstyled ? select : (title || hint ? (_jsx("div", { children: select })) : select));
};
export default Select;
