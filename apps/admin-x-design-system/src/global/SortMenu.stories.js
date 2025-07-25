import { jsx as _jsx } from "react/jsx-runtime";
import SortMenu from './SortMenu';
const meta = {
    title: 'Global / SortMenu',
    component: SortMenu,
    tags: ['autodocs']
};
export default meta;
const items = [
    { id: 'date-added', label: 'Date added', selected: true },
    { id: 'name', label: 'Name' },
    { id: 'redemptions', label: 'Redemptions' }
];
export const Default = {
    args: {
        items: items,
        onSortChange: () => { },
        onDirectionChange: () => { },
        position: 'start'
    },
    decorators: [
        ThisStory => (_jsx("div", { style: { maxWidth: '100px', margin: '0 auto' }, children: _jsx(ThisStory, {}) }))
    ]
};
