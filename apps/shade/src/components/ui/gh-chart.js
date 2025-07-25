import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { calculateYAxisWidth, cn, formatDisplayDateWithRange, formatNumber, getYRange } from '@/lib/utils';
import { AlignedAxisTick, ChartContainer, ChartTooltip } from './chart';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { TrendingDown, TrendingUp } from 'lucide-react';
const GhCustomTooltipContent = ({ active, payload, range, color }) => {
    if (!active || !payload?.length) {
        return null;
    }
    const { date, formattedValue, label, diffValue, formattedDiffValue } = payload[0].payload;
    const displayValue = formattedValue || payload[0].value;
    return (_jsxs("div", { className: "min-w-[120px] rounded-lg border bg-background px-3 py-2 shadow-lg", children: [date && _jsx("div", { className: "text-sm text-foreground", children: formatDisplayDateWithRange(date, range || 0) }), _jsxs("div", { className: 'flex items-start gap-2', children: [_jsx("span", { className: 'mt-1.5 inline-block size-2 rounded-full opacity-50', style: { backgroundColor: color || 'hsl(var(--chart-blue))' } }), _jsxs("div", { className: 'flex grow items-start justify-between gap-5', children: [label && _jsx("div", { className: "text-sm text-muted-foreground", children: label }), _jsxs("div", { className: "flex flex-col items-end font-mono font-medium", children: [displayValue, diffValue ? diffValue < 0 && (_jsxs("div", { className: 'flex items-center gap-0.5 text-red-600', children: [_jsx(TrendingDown, { size: 14, strokeWidth: 1.5 }), _jsx("span", { children: formattedDiffValue })] })) : _jsx(_Fragment, {}), diffValue ? diffValue > 0 && (_jsxs("div", { className: 'flex items-center gap-0.5 text-green-600', children: [_jsx(TrendingUp, { size: 14, strokeWidth: 1.5 }), _jsx("span", { children: formattedDiffValue })] })) : _jsx(_Fragment, {})] })] })] })] }));
};
const GhAreaChart = ({ data, range, yAxisRange, color = 'hsl(var(--chart-blue))', id, className, syncId, allowDataOverflow = false, showYAxisValues = true, showHorizontalLines = true, dataFormatter = formatNumber }) => {
    const yRange = yAxisRange || [getYRange(data).min, getYRange(data).max];
    const chartConfig = {
        value: {
            label: data[0]?.label || 'Value'
        }
    };
    // Use yRange as domain and set baseValue to the minimum
    const baseValue = yRange[0];
    // Calculate midpoint and create ticks array
    const midValue = (yRange[0] + yRange[1]) / 2;
    const isWholeMid = Number.isInteger(midValue);
    const yTicks = isWholeMid ? [yRange[0], midValue, yRange[1]] : yRange;
    return (_jsx(ChartContainer, { className: cn('w-full', className), config: chartConfig, children: _jsxs(AreaChart, { data: data, margin: {
                left: 4,
                right: 4,
                top: showHorizontalLines ? 24 : 4
            }, syncId: syncId, children: [_jsx(CartesianGrid, { horizontal: showHorizontalLines, vertical: false }), _jsx(XAxis, { axisLine: { stroke: 'hsl(var(--border))', strokeWidth: 1 }, dataKey: "date", interval: 0, tick: props => _jsx(AlignedAxisTick, { ...props, formatter: value => formatDisplayDateWithRange(String(value), range) }), tickFormatter: value => formatDisplayDateWithRange(String(value), range), tickLine: false, tickMargin: 10, ticks: data && data.length > 0 ? [data[0].date, data[data.length - 1].date] : [] }), _jsx(YAxis, { allowDataOverflow: allowDataOverflow, axisLine: false, domain: allowDataOverflow ? undefined : yRange, scale: "linear", tickFormatter: (value) => {
                        return dataFormatter(value);
                    }, tickLine: false, ticks: yTicks, width: showYAxisValues ? calculateYAxisWidth(yRange, dataFormatter) : 0 }), _jsx(ChartTooltip, { content: _jsx(GhCustomTooltipContent, { color: color, range: range }), cursor: true, isAnimationActive: false, position: { y: 10 } }), _jsx("defs", { children: _jsxs("linearGradient", { id: `fillChart-${id}`, x1: "0", x2: "0", y1: "0", y2: "1", children: [_jsx("stop", { offset: '5%', stopColor: color, stopOpacity: 0.8 }), _jsx("stop", { offset: '95%', stopColor: color, stopOpacity: 0.1 })] }) }), _jsx(Area, { baseValue: baseValue, dataKey: "value", fill: `url(#fillChart-${id})`, fillOpacity: 0.2, isAnimationActive: false, stroke: color, strokeWidth: 1.5, type: "linear" })] }) }));
};
export { GhAreaChart, GhCustomTooltipContent };
