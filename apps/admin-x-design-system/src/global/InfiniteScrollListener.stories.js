import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import InfiniteScrollListener from './InfiniteScrollListener';
const meta = {
    title: 'Global / Infinite scroll listener',
    component: InfiniteScrollListener,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        offset: 250
    },
    render: function Component(args) {
        const [wasTriggered, setTriggered] = useState(false);
        return _jsxs("div", { children: [_jsxs("div", { children: ["Try scrolling here ... ", wasTriggered && _jsx("strong", { children: "Near the end, time to load the next page!" })] }), _jsx("div", { style: { overflow: 'auto', height: '300px' }, children: _jsx("div", { style: { position: 'relative', height: '2000px', background: 'linear-gradient(to bottom, #000, #fff)' }, children: _jsx(InfiniteScrollListener, { ...args, onTrigger: () => setTriggered(true) }) }) })] });
    }
};
