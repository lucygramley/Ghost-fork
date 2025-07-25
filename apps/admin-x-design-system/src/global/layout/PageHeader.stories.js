import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import PageHeader from './PageHeader';
const meta = {
    title: 'Global / Layout / Page Header',
    component: PageHeader,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        left: 'Left content',
        center: 'Center content',
        right: 'Right content'
    }
};
export const CustomContainer = {
    args: {
        left: 'Left content',
        center: 'Center content',
        right: 'Right content',
        containerClassName: 'bg-grey-50'
    }
};
export const LeftAndRight = {
    args: {
        left: 'Left content',
        right: 'Right content'
    }
};
export const LeftOnly = {
    args: {
        left: 'Left content'
    }
};
export const CenterOnly = {
    args: {
        center: 'Center content'
    }
};
export const RightOnly = {
    args: {
        right: 'Right content'
    }
};
export const CustomContent = {
    args: {
        children: (_jsxs("div", { className: 'flex justify-between', children: [_jsx("div", { className: 'basis-1/4', children: "This" }), _jsx("div", { className: 'basis-1/4', children: "is" }), _jsx("div", { className: 'basis-1/4', children: "custom" }), _jsx("div", { className: 'basis-1/4', children: "content!" })] }))
    }
};
