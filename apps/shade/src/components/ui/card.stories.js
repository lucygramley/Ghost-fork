import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, KpiCardHeader, KpiCardHeaderLabel, KpiCardHeaderValue } from './card';
import { Button } from './button';
import { Eye, User, Coins } from 'lucide-react';
const meta = {
    title: 'Components / Card',
    component: Card,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsxs(CardHeader, { children: [_jsx(CardTitle, { children: "Create project" }), _jsx(CardDescription, { children: "Deploy your new project in one-click." })] }, "header"),
            _jsx(CardContent, { children: "Card contents" }, "content"),
            _jsxs(CardFooter, { className: "flex grow justify-between", children: [_jsx(Button, { variant: "outline", children: "Cancel" }), _jsx(Button, { children: "Deploy" })] }, "footer")
        ]
    }
};
export const KpiCardWithUpTrend = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx(Eye, { size: 16, strokeWidth: 1.5 }), "Unique visitors"] }), _jsx(KpiCardHeaderValue, { diffDirection: "up", diffValue: "+12.5%", value: "2,547" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardWithTrendTooltip = {
    args: {
        className: 'w-[350px] mt-20',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx(Eye, { size: 16, strokeWidth: 1.5 }), "Unique visitors"] }), _jsx(KpiCardHeaderValue, { diffDirection: "up", diffTooltip: "You\u2019re trending up 12.5% from 3,538 compared to the last 30 days", diffValue: "+12.5%", value: "2,547" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardWithDownTrend = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx(User, { size: 16, strokeWidth: 1.5 }), "Members"] }), _jsx(KpiCardHeaderValue, { diffDirection: "down", diffValue: "-3.2%", value: "1,234" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardWithColorIndicator = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx("span", { className: 'inline-block size-2 rounded-full opacity-50', style: { backgroundColor: 'hsl(var(--chart-purple))' } }), _jsx(Coins, { size: 16, strokeWidth: 1.5 }), "MRR"] }), _jsx(KpiCardHeaderValue, { diffDirection: "up", diffValue: "+8.7%", value: "$4,567" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardNoTrend = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx(Eye, { size: 16, strokeWidth: 1.5 }), "Page views"] }), _jsx(KpiCardHeaderValue, { diffDirection: "empty", value: "15,789" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardWithHoverButton = {
    args: {
        className: 'w-[350px] group',
        children: [
            _jsxs(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: [_jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { className: 'transition-all group-hover:text-foreground', children: [_jsx("span", { className: 'inline-block size-2 rounded-full opacity-50', style: { backgroundColor: 'hsl(var(--chart-teal))' } }), _jsx(User, { size: 16, strokeWidth: 1.5 }), "Members"] }), _jsx(KpiCardHeaderValue, { diffDirection: "same", diffValue: "0%", value: "2,456" })] }), _jsx(Button, { className: 'absolute right-6 translate-x-full opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100', size: 'sm', variant: 'outline', children: "View more" })] }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
export const KpiCardHiddenTrend = {
    args: {
        className: 'w-[350px]',
        children: [
            _jsx(KpiCardHeader, { className: 'relative flex grow flex-row items-start justify-between gap-5 border-none pb-4', children: _jsxs("div", { className: 'flex grow flex-col gap-1.5 border-none pb-0', children: [_jsxs(KpiCardHeaderLabel, { children: [_jsx(Coins, { size: 16, strokeWidth: 1.5 }), "All-time revenue"] }), _jsx(KpiCardHeaderValue, { diffDirection: "hidden", value: "$125,890" })] }) }, "kpi-header"),
            _jsx(CardContent, { children: "Chart placeholder content" }, "content")
        ]
    }
};
