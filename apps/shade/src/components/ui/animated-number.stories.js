import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from './button';
import { AnimatedNumber } from './animated-number';
const meta = {
    title: 'Components / Animated number',
    component: AnimatedNumber,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    render: () => {
        const InteractiveExample = () => {
            const [count, setCount] = useState(0);
            return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(AnimatedNumber, { value: count }), _jsxs("div", { className: "flex gap-2", children: [_jsx(Button, { size: "sm", onClick: () => setCount(count + 1), children: "+1" }), _jsx(Button, { size: "sm", onClick: () => setCount(count + 10), children: "+10" }), _jsx(Button, { size: "sm", onClick: () => setCount(count + 100), children: "+100" }), _jsx(Button, { size: "sm", variant: "outline", onClick: () => setCount(0), children: "Reset" })] })] }));
        };
        return _jsx(InteractiveExample, {});
    }
};
export const WithFormatting = {
    render: () => {
        const FormattingExample = () => {
            const [value, setValue] = useState(1234567.89);
            const values = [1234567.89, 2500000.50, 999.99, 150000.75];
            return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(AnimatedNumber, { format: {
                            style: 'currency',
                            currency: 'USD'
                        }, value: value }), _jsx("div", { className: "flex gap-2", children: values.map(val => (_jsxs(Button, { size: "sm", onClick: () => setValue(val), children: ["$", val.toLocaleString()] }, val))) })] }));
        };
        return _jsx(FormattingExample, {});
    }
};
export const Percentage = {
    render: () => {
        const PercentageExample = () => {
            const [value, setValue] = useState(0.1234);
            const values = [0.1234, 0.456, 0.789, 0.025];
            return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(AnimatedNumber, { format: {
                            style: 'percent',
                            minimumFractionDigits: 2
                        }, value: value }), _jsx("div", { className: "flex gap-2", children: values.map(val => (_jsxs(Button, { size: "sm", onClick: () => setValue(val), children: [(val * 100).toFixed(1), "%"] }, val))) })] }));
        };
        return _jsx(PercentageExample, {});
    }
};
export const CompactNotation = {
    render: () => {
        const CompactExample = () => {
            const [value, setValue] = useState(1234567);
            const values = [1234567, 5400000, 12000000, 850000];
            return (_jsxs("div", { className: "flex flex-col gap-4", children: [_jsx(AnimatedNumber, { format: {
                            notation: 'compact',
                            compactDisplay: 'short',
                            roundingMode: 'trunc'
                        }, value: value, willChange: true }), _jsx("div", { className: "flex gap-2", children: values.map(val => (_jsxs(Button, { size: "sm", onClick: () => setValue(val), children: [(val / 1000000).toFixed(1), "M"] }, val))) })] }));
        };
        return _jsx(CompactExample, {});
    }
};
