import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import TextField from './TextField';
/**
 * A CurrencyField is a special type of [TextField](?path=/docs/global-form-textfield--docs) with
 * some parsing to input currency values. While editing you can enter any number of decimals, but
 * the value in `onChange` will be rounded and multiplied to get an integer number of cents.
 *
 * Available options are generally the same as TextField.
 */
const CurrencyField = ({ valueInCents, onChange, ...props }) => {
    const [localValue, setLocalValue] = useState(valueInCents === '' ? '' : ((valueInCents || 0) / 100).toString());
    // While the user is editing we allow more lenient input, e.g. "1.32.566" to make it easier to type and change
    const stripNonNumeric = (input) => input.replace(/[^\d.]+/g, '');
    // The saved value is strictly a number with 2 decimal places
    const forceCurrencyValue = (input) => {
        return Math.round(parseFloat(input.match(/[\d]+\.?[\d]{0,2}/)?.[0] || '0') * 100);
    };
    return _jsx(TextField, { ...props, value: localValue, onBlur: (e) => {
            setLocalValue((forceCurrencyValue(e.target.value) / 100).toString());
            props.onBlur?.(e);
        }, onChange: (e) => {
            setLocalValue(stripNonNumeric(e.target.value));
            onChange?.(forceCurrencyValue(e.target.value));
        } });
};
export default CurrencyField;
