import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import * as Sentry from '@sentry/react';
import React from 'react';
import Banner from './Banner';
/**
 * Catches errors in child components and displays a banner. Useful to prevent errors in one
 * section from crashing the entire page
 */
class ErrorBoundary extends React.Component {
    state = { hasError: false };
    constructor(props) {
        super(props);
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        Sentry.withScope((scope) => {
            scope.setTag('adminx_settings_component', info.componentStack);
            Sentry.captureException(error);
        });
        // eslint-disable-next-line no-console
        console.error(error);
        // eslint-disable-next-line no-console
        console.error('In component:', info.componentStack);
    }
    render() {
        if (this.state.hasError) {
            return (_jsxs(Banner, { color: 'red', children: ["An error occurred loading ", this.props.name, ". Please refresh and try again."] }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
export const withErrorBoundary = (Component, name) => {
    return function WithErrorBoundary(props) {
        return (_jsx(ErrorBoundary, { name: name, children: _jsx(Component, { ...props }) }));
    };
};
