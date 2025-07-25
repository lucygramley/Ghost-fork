import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsContent, TabsList, TabsTrigger, KpiTabTrigger, KpiTabValue } from './tabs';
const meta = {
    title: 'Components / Tabs',
    component: Tabs,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        defaultValue: 'account',
        variant: 'button-sm',
        children: [
            _jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [_jsx(TabsTrigger, { value: "account", children: "Account" }), _jsx(TabsTrigger, { value: "password", children: "Password" })] }, "list"),
            _jsx(TabsContent, { value: "account", children: "Account contents" }, "account"),
            _jsx(TabsContent, { value: "password", children: "Password contents" }, "password")
        ]
    }
};
export const KPIBasic = {
    args: {
        defaultValue: 'signups',
        variant: 'kpis',
        children: [
            _jsxs(TabsList, { children: [_jsx(KpiTabTrigger, { value: "signups", children: _jsx(KpiTabValue, { diffDirection: "up", diffValue: "+12.5%", label: "Signups", value: "1,247" }) }), _jsx(KpiTabTrigger, { value: "revenue", children: _jsx(KpiTabValue, { diffDirection: "up", diffValue: "+8.2%", label: "Revenue", value: "$54,890" }) }), _jsx(KpiTabTrigger, { value: "engagement", children: _jsx(KpiTabValue, { diffDirection: "down", diffValue: "-2.1%", label: "Engagement", value: "68.4%" }) })] }, "list"),
            _jsx(TabsContent, { value: "signups", children: _jsx("div", { className: "p-6", children: "Signups analytics and charts would go here." }) }, "signups"),
            _jsx(TabsContent, { value: "revenue", children: _jsx("div", { className: "p-6", children: "Revenue analytics and charts would go here." }) }, "revenue"),
            _jsx(TabsContent, { value: "engagement", children: _jsx("div", { className: "p-6", children: "Engagement analytics and charts would go here." }) }, "engagement")
        ]
    }
};
export const KPIWithIcons = {
    args: {
        defaultValue: 'users',
        variant: 'kpis',
        children: [
            _jsxs(TabsList, { children: [_jsx(KpiTabTrigger, { value: "users", children: _jsx(KpiTabValue, { diffDirection: "up", diffValue: "+15.3%", icon: "Users", label: "Active Users", value: "2,847" }) }), _jsx(KpiTabTrigger, { value: "views", children: _jsx(KpiTabValue, { diffDirection: "up", diffValue: "+22.1%", icon: "Eye", label: "Page Views", value: "18.2K" }) }), _jsx(KpiTabTrigger, { value: "bounce", children: _jsx(KpiTabValue, { diffDirection: "same", diffValue: "0%", icon: "MousePointerClick", label: "Bounce Rate", value: "34.2%" }) }), _jsx(KpiTabTrigger, { value: "conversion", children: _jsx(KpiTabValue, { diffDirection: "down", diffValue: "-0.5%", icon: "Target", label: "Conversion", value: "3.8%" }) })] }, "list"),
            _jsx(TabsContent, { value: "users", children: _jsx("div", { className: "p-6", children: "Active users analytics would go here." }) }, "users"),
            _jsx(TabsContent, { value: "views", children: _jsx("div", { className: "p-6", children: "Page views analytics would go here." }) }, "views"),
            _jsx(TabsContent, { value: "bounce", children: _jsx("div", { className: "p-6", children: "Bounce rate analytics would go here." }) }, "bounce"),
            _jsx(TabsContent, { value: "conversion", children: _jsx("div", { className: "p-6", children: "Conversion analytics would go here." }) }, "conversion")
        ]
    }
};
export const KPIWithColors = {
    args: {
        defaultValue: 'organic',
        variant: 'kpis',
        children: [
            _jsxs(TabsList, { children: [_jsx(KpiTabTrigger, { value: "organic", children: _jsx(KpiTabValue, { color: "#10B981", diffDirection: "up", diffValue: "+18.7%", label: "Organic Traffic", value: "45.2K" }) }), _jsx(KpiTabTrigger, { value: "paid", children: _jsx(KpiTabValue, { color: "#3B82F6", diffDirection: "up", diffValue: "+5.3%", label: "Paid Traffic", value: "12.8K" }) }), _jsx(KpiTabTrigger, { value: "social", children: _jsx(KpiTabValue, { color: "#8B5CF6", diffDirection: "down", diffValue: "-3.2%", label: "Social Traffic", value: "8.4K" }) }), _jsx(KpiTabTrigger, { value: "direct", children: _jsx(KpiTabValue, { color: "#F59E0B", diffDirection: "up", diffValue: "+9.1%", label: "Direct Traffic", value: "15.6K" }) })] }, "list"),
            _jsx(TabsContent, { value: "organic", children: _jsx("div", { className: "p-6", children: "Organic traffic breakdown would go here." }) }, "organic"),
            _jsx(TabsContent, { value: "paid", children: _jsx("div", { className: "p-6", children: "Paid traffic breakdown would go here." }) }, "paid"),
            _jsx(TabsContent, { value: "social", children: _jsx("div", { className: "p-6", children: "Social traffic breakdown would go here." }) }, "social"),
            _jsx(TabsContent, { value: "direct", children: _jsx("div", { className: "p-6", children: "Direct traffic breakdown would go here." }) }, "direct")
        ]
    }
};
export const KPIWithoutTrends = {
    args: {
        defaultValue: 'subscribers',
        variant: 'kpis',
        children: [
            _jsxs(TabsList, { children: [_jsx(KpiTabTrigger, { value: "subscribers", children: _jsx(KpiTabValue, { diffDirection: "hidden", icon: "UserPlus", label: "Total Subscribers", value: "12,847" }) }), _jsx(KpiTabTrigger, { value: "posts", children: _jsx(KpiTabValue, { diffDirection: "hidden", icon: "FileText", label: "Published Posts", value: "89" }) }), _jsx(KpiTabTrigger, { value: "comments", children: _jsx(KpiTabValue, { diffDirection: "hidden", icon: "MessageSquare", label: "Total Comments", value: "2,156" }) })] }, "list"),
            _jsx(TabsContent, { value: "subscribers", children: _jsx("div", { className: "p-6", children: "Subscriber details would go here." }) }, "subscribers"),
            _jsx(TabsContent, { value: "posts", children: _jsx("div", { className: "p-6", children: "Posts overview would go here." }) }, "posts"),
            _jsx(TabsContent, { value: "comments", children: _jsx("div", { className: "p-6", children: "Comments overview would go here." }) }, "comments")
        ]
    }
};
