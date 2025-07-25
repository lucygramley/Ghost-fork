import { jsx as _jsx } from "react/jsx-runtime";
import ErrorBoundary from './ErrorBoundary';
const meta = {
    title: 'Global / Error Boundary',
    component: ErrorBoundary,
    tags: ['autodocs']
};
export default meta;
const RaisesError = () => {
    throw new Error('Something went wrong');
};
export const WithError = {
    args: {
        name: 'Test Section',
        children: _jsx(RaisesError, {})
    }
};
