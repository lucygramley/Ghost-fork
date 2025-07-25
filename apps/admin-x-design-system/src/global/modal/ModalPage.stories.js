import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import ModalPage from './ModalPage';
const meta = {
    title: 'Global / Modal / Modal page contents',
    component: ModalPage,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        heading: 'Here\'s a modal page',
        children: _jsx(_Fragment, { children: _jsx("p", { children: "Use this component to in full-width or bleed modals in which you build a complete page (e.g. Theme grid)" }) })
    }
};
