import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
// Dynamically import the NumberFlow component
const NumberFlow = lazy(() => import('@number-flow/react'));
// Create a wrapper that preserves the original functionality
const AnimatedNumber = (props) => {
    return (_jsx(Suspense, { fallback: _jsx("div", {}), children: _jsx(NumberFlow, { ...props }) }));
};
// Export the component
export { AnimatedNumber };
