import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import { cn } from '@/lib/utils';
function Skeleton({ containerClassName, count = 1, randomize = false, minWidth = 70, maxWidth = 100, className, ...props }) {
    const { randomWidths, keys } = useMemo(() => {
        const widths = [];
        const uniqueKeys = [];
        for (let i = 0; i < count; i++) {
            if (randomize) {
                const steps = Math.floor((maxWidth - minWidth) / 5);
                const randomStep = Math.floor(Math.random() * (steps + 1));
                const randomWidth = minWidth + (randomStep * 5);
                widths.push(`${randomWidth}%`);
            }
            uniqueKeys.push(`skeleton-${crypto.randomUUID()}`);
        }
        return {
            randomWidths: widths,
            keys: uniqueKeys
        };
    }, [count, randomize, minWidth, maxWidth]);
    return (_jsx("span", { className: containerClassName, children: Array.from({ length: count }).map((_, index) => (_jsxs(React.Fragment, { children: [_jsx("span", { className: cn('inline-flex w-full leading-none animate-pulse rounded-[2px] bg-primary/10', className), style: randomize ? { width: randomWidths[index] } : undefined, ...props, children: "\u200C" }), _jsx("br", {})] }, keys[index]))) }));
}
const SkeletonTable = React.forwardRef(({ className, lines = 5, ...props }, ref) => {
    if (lines < 1) {
        return _jsx(_Fragment, {});
    }
    return (_jsx("div", { ref: ref, className: cn('flex flex-col gap-2', className), ...props, children: Array.from({ length: lines }, (_, i) => {
            let skeletonMaxWidth = '66%';
            switch (i % 5) {
                case 0:
                    skeletonMaxWidth = '57%';
                    break;
                case 1:
                    skeletonMaxWidth = '33%';
                    break;
                case 2:
                    skeletonMaxWidth = '40%';
                    break;
                case 3:
                    skeletonMaxWidth = '48%';
                    break;
                case 4:
                    skeletonMaxWidth = '24%';
                    break;
            }
            return (_jsxs("div", { className: 'flex justify-between gap-6', children: [_jsx("div", { className: 'grow', style: {
                            maxWidth: skeletonMaxWidth
                        }, children: _jsx(Skeleton, {}) }), _jsx(Skeleton, { className: 'w-[60px] self-end' })] }, i));
        }) }));
});
SkeletonTable.displayName = 'SkeletonTable';
export { Skeleton, SkeletonTable };
