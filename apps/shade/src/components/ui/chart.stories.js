import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './chart';
import React from 'react';
import { Label, Pie, PieChart } from 'recharts';
const meta = {
    title: 'Components / Charts',
    component: ChartContainer,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false
        }
    }
};
export default meta;
export const Default = {
    render: function ChartStory() {
        const chartData = React.useMemo(() => {
            return [
                { browser: 'chrome', visitors: 98, fill: 'var(--color-chrome)' },
                { browser: 'safari', visitors: 17, fill: 'var(--color-safari)' }
            ];
        }, []);
        const chartConfig = {
            visitors: {
                label: 'Reactions'
            },
            chrome: {
                label: 'More like this',
                color: 'hsl(var(--chart-blue))'
            },
            safari: {
                label: 'Less like this',
                color: 'hsl(var(--chart-orange))'
            }
        };
        const totalVisitors = React.useMemo(() => {
            return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
        }, [chartData]);
        return (_jsxs(_Fragment, { children: [_jsx(ChartContainer, { className: "mx-auto aspect-square h-[250px] min-h-[250px] w-full", config: chartConfig, children: _jsxs(PieChart, { children: [_jsx(ChartTooltip, { content: _jsx(ChartTooltipContent, { hideLabel: true }), cursor: false }), _jsx(Pie, { data: chartData, dataKey: "visitors", innerRadius: 60, nameKey: "browser", strokeWidth: 5, children: _jsx(Label, { content: ({ viewBox }) => {
                                        if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                                            return (_jsxs("text", { dominantBaseline: "middle", textAnchor: "middle", x: viewBox.cx, y: viewBox.cy, children: [_jsx("tspan", { className: "fill-foreground text-2xl font-semibold tracking-tight", x: viewBox.cx, y: viewBox.cy, children: totalVisitors.toLocaleString() }), _jsx("tspan", { className: "fill-muted-foreground", x: viewBox.cx, y: (viewBox.cy || 0) + 20, children: "Reactions" })] }));
                                        }
                                    } }) })] }) }), _jsxs("div", { className: 'text-center', children: ["Visit ", _jsx("a", { className: "underline", href: "https://ui.shadcn.com/docs/components/chart", rel: "noreferrer", target: "_blank", children: "ShadCN/UI Charts docs" }), " for usage details."] })] }));
    }
};
