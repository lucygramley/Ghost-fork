import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
/**
 * Triggers a callback when the user scrolls close to the end of an element
 * (exactly how close is configurable with `offset`). The parent element must have
 * position: relative/absolute/etc.
 */
const InfiniteScrollListener = ({ offset, onTrigger }) => {
    const ref = useRef(null);
    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if (entries[0].intersectionRatio <= 0) {
                return;
            }
            onTrigger();
        });
        if (ref.current) {
            intersectionObserver.observe(ref.current);
        }
        return () => intersectionObserver.disconnect();
    }, [onTrigger]);
    return _jsx("div", { ref: ref, className: "absolute w-full", style: { bottom: offset } });
};
export default InfiniteScrollListener;
