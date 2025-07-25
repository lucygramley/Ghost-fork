import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { TrendingDown, TrendingUp } from 'lucide-react';
const CardsVariantContext = React.createContext('outline');
const cardVariants = cva('flex flex-col bg-card text-card-foreground', {
    variants: {
        variant: {
            outline: 'rounded-xl border transition-all hover:shadow-xs',
            plain: ''
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
});
const Card = React.forwardRef(({ variant = 'outline', className, ...props }, ref) => (_jsx(CardsVariantContext.Provider, { value: variant, children: _jsx("div", { ref: ref, className: cn(cardVariants({ variant, className })), ...props }) })));
Card.displayName = 'Card';
const cardHeaderVariants = cva('flex flex-col space-y-1.5', {
    variants: {
        variant: {
            outline: 'p-6',
            plain: 'border-b py-5'
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
});
const CardHeader = React.forwardRef(({ className, ...props }, ref) => {
    const variant = React.useContext(CardsVariantContext);
    return (_jsx("div", { ref: ref, className: cn(cardHeaderVariants({ variant, className })), ...props }));
});
CardHeader.displayName = 'CardHeader';
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('tracking-tight font-semibold leading-none', className), ...props })));
CardTitle.displayName = 'CardTitle';
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('text-sm text-muted-foreground', className), ...props })));
CardDescription.displayName = 'CardDescription';
const cardContentVariants = cva('', {
    variants: {
        variant: {
            outline: 'p-6 pt-0',
            plain: 'border-b'
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
});
const CardContent = React.forwardRef(({ className, ...props }, ref) => {
    const variant = React.useContext(CardsVariantContext);
    return (_jsx("div", { ref: ref, className: cn(cardContentVariants({ variant, className })), ...props }));
});
CardContent.displayName = 'CardContent';
const cardFooterVariants = cva('flex w-full items-center', {
    variants: {
        variant: {
            outline: 'p-6 pt-0',
            plain: 'py-5'
        }
    },
    defaultVariants: {
        variant: 'outline'
    }
});
const CardFooter = React.forwardRef(({ className, ...props }, ref) => {
    const variant = React.useContext(CardsVariantContext);
    return (_jsx("div", { className: 'flex grow items-end', children: _jsx("div", { ref: ref, className: cn(cardFooterVariants({ variant, className })), ...props }) }));
});
CardFooter.displayName = 'CardFooter';
const KpiCardHeader = ({ children, className, ...props }) => {
    return (_jsx("div", { className: cn('flex flex-col border-r border-border last:border-none items-start gap-4 px-6 py-5 transition-all', className), ...props, children: children }));
};
const KpiCardHeaderLabel = ({ children, className, color, ...props }) => {
    return (_jsxs("div", { className: cn('[&_svg]:size-4 flex items-center gap-1.5 text-base text-muted-foreground h-[22px] font-medium', className), ...props, children: [color && _jsx("div", { className: 'ml-1 size-2 rounded-full opacity-50', style: { backgroundColor: color } }), children] }));
};
const KpiCardHeaderValue = ({ value, diffDirection, diffValue, diffTooltip }) => {
    const diffContainerClassName = cn('flex items-center gap-1 text-xs h-[22px] px-1.5 rounded-sm group/diff cursor-default', diffDirection === 'up' && `text-green-600 bg-green/10 ${diffTooltip && 'hover:bg-green/20'}`, diffDirection === 'down' && `text-red-600 bg-red/10 ${diffTooltip && 'hover:bg-red/20'}`, diffDirection === 'same' && 'text-gray-700 bg-muted');
    return (_jsxs("div", { className: 'relative flex flex-col items-start gap-2 lg:flex-row lg:gap-3', children: [_jsx("div", { className: 'text-[2.2rem] font-semibold leading-none tracking-tighter', children: value }), diffDirection && diffDirection !== 'hidden' &&
                _jsx(_Fragment, { children: _jsxs("div", { className: diffContainerClassName, children: [_jsx("span", { className: 'font-medium leading-none', children: diffValue }), diffDirection === 'up' &&
                                _jsx(TrendingUp, { className: '!size-[12px]', size: 14, strokeWidth: 2 }), diffDirection === 'down' &&
                                _jsx(TrendingDown, { className: '!size-[12px]', size: 14, strokeWidth: 2 }), diffTooltip &&
                                _jsx("div", { className: 'pointer-events-none absolute inset-x-0 top-0 z-50 -translate-y-full rounded-sm bg-background px-3 py-2 text-sm text-foreground opacity-0 shadow-md transition-all group-hover/diff:translate-y-[calc(-100%-8px)] group-hover/diff:opacity-100', children: diffTooltip })] }) })] }));
};
const EmptyCard = React.forwardRef(({ className, ...props }, ref) => (_jsx("div", { ref: ref, className: cn('p-6 transition-all hover:shadow-xs rounded-xl border flex flex-col bg-card text-card-foreground', className), ...props })));
EmptyCard.displayName = 'EmptyCard';
export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, KpiCardHeader, KpiCardHeaderLabel, KpiCardHeaderValue, EmptyCard, cardVariants };
