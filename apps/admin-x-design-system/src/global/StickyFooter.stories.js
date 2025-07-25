import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import StickyFooter from './StickyFooter';
const meta = {
    title: 'Global / Sticky Footer',
    component: StickyFooter,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsxs("div", { style: {
                maxWidth: '600px',
                margin: '0 auto 80px',
                background: '#efefef'
            }, children: [_jsx("div", { style: {
                        height: '1500px'
                    } }), _story()] }))]
};
export default meta;
const footerContents = (_jsx("div", { className: 'p-6', children: "Hello sticky footer" }));
export const Default = {
    args: {
        children: footerContents,
        contentBgColorClass: 'bg-[#efefef]'
    }
};
