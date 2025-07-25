import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { cn } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
const PageMenuContext = React.createContext(null);
const PageMenu = React.forwardRef(({ children, responsive = false, value, defaultValue, onValueChange, className, ...props }, ref) => {
    const [visibleCount, setVisibleCount] = React.useState(React.Children.count(children));
    const [resizeKey, setResizeKey] = React.useState(0);
    const containerRef = React.useRef(null);
    const measureRef = React.useRef(null);
    React.useLayoutEffect(() => {
        if (!responsive || !containerRef.current || !measureRef.current) {
            setVisibleCount(React.Children.count(children));
            return;
        }
        // Use requestAnimationFrame to ensure DOM is fully rendered
        const calculateSizes = () => {
            if (!containerRef.current || !measureRef.current) {
                return;
            }
            const container = containerRef.current;
            const measureContainer = measureRef.current;
            const containerWidth = container.clientWidth;
            const dropdownWidth = 60; // Space needed for dropdown button
            const gap = 6; // Gap between items (gap-1.5)
            // Get all child elements from the measure container
            const items = Array.from(measureContainer.children);
            // First, check if ALL items fit without any dropdown
            let totalWidth = 0;
            for (let i = 0; i < items.length; i++) {
                const itemWidth = items[i].getBoundingClientRect().width;
                const gapWidth = i > 0 ? gap : 0;
                totalWidth += gapWidth + itemWidth;
            }
            // If all items fit with some buffer space, show them all
            const safetyBuffer = 8; // Add 8px buffer for safe rendering
            if (totalWidth <= containerWidth - safetyBuffer) {
                setVisibleCount(items.length);
                return;
            }
            // Otherwise, calculate how many fit with dropdown space reserved
            let currentWidth = 0;
            let count = 0;
            for (let i = 0; i < items.length; i++) {
                const itemWidth = items[i].getBoundingClientRect().width;
                const gapWidth = i > 0 ? gap : 0;
                const newWidth = currentWidth + gapWidth + itemWidth;
                // Reserve space for dropdown (since we know not all items fit)
                const totalNeededWidth = newWidth + dropdownWidth;
                if (totalNeededWidth <= containerWidth) {
                    currentWidth = newWidth;
                    count += 1;
                }
                else {
                    break;
                }
            }
            setVisibleCount(count);
        };
        requestAnimationFrame(calculateSizes);
    }, [responsive, children, resizeKey]);
    React.useLayoutEffect(() => {
        if (!responsive || !containerRef.current) {
            return;
        }
        const resizeObserver = new ResizeObserver(() => {
            // Trigger re-calculation by updating the resize key
            setResizeKey(prev => prev + 1);
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, [responsive]);
    const childrenArray = React.Children.toArray(children);
    const visibleItems = childrenArray.slice(0, visibleCount);
    const hiddenItems = childrenArray.slice(visibleCount);
    const hasOverflow = hiddenItems.length > 0;
    // Find selected hidden item
    const selectedHiddenItem = hiddenItems.find(child => React.isValidElement(child) && child.props?.value === value);
    if (!responsive) {
        return (_jsx(PageMenuContext.Provider, { value: { defaultValue }, children: _jsx("div", { ref: ref, className: cn('flex items-center gap-2', className), ...props, children: children }) }));
    }
    return (_jsxs(PageMenuContext.Provider, { value: { defaultValue }, children: [_jsx("div", { ref: measureRef, "aria-hidden": "true", className: "pointer-events-none absolute flex items-center gap-2 opacity-0", style: { top: -9999, left: -9999 }, children: children }), _jsxs("div", { ref: containerRef, className: "flex w-full min-w-0 flex-1 items-center gap-1.5", children: [_jsx("div", { ref: ref, className: cn('flex items-center gap-1.5 min-w-0', className), ...props, children: visibleItems }), hasOverflow && (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsx(Button, { className: cn('h-[30px] flex-shrink-0 px-3 py-2', selectedHiddenItem && 'bg-accent text-accent-foreground'), variant: "ghost", children: selectedHiddenItem ? (_jsx("span", { className: "max-w-[100px] truncate", children: selectedHiddenItem.props.children })) : (_jsx(MoreHorizontal, { className: "size-6" })) }) }), _jsx(DropdownMenuContent, { align: "end", children: hiddenItems.map((item, index) => {
                                    if (!React.isValidElement(item) || !item.props?.value) {
                                        return null;
                                    }
                                    return (_jsx(DropdownMenuItem, { className: cn(item.props.value === value && 'bg-accent text-accent-foreground'), onClick: () => {
                                            onValueChange?.(item.props.value);
                                            item.props.onClick?.();
                                        }, children: item.props.children }, item.props.value || index));
                                }) })] }))] })] }));
});
PageMenu.displayName = 'PageMenu';
const PageMenuItem = React.forwardRef(({ children, value, className, ...props }, ref) => {
    const pageMenuProps = React.useContext(PageMenuContext);
    const isActive = pageMenuProps?.defaultValue === value;
    return (_jsx(Button, { ref: ref, className: cn('relative h-[30px] rounded-md px-3 text-md font-medium text-gray-800 hover:text-foreground focus-visible:ring-0', 'data-[state=active]:bg-muted-foreground/15 data-[state=active]:font-semibold data-[state=active]:text-foreground dark:text-gray-500 dark:data-[state=active]:text-foreground', className), "data-state": isActive ? 'active' : undefined, variant: "ghost", ...props, children: children }));
});
PageMenuItem.displayName = 'PageMenuItem';
export { PageMenu, PageMenuItem };
