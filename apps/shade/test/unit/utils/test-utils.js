import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
// Add any providers that components need wrapped around them for testing
function AllTheProviders({ children }) {
    return (_jsx(_Fragment, { children: children }));
}
const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });
// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
