import { jsx as _jsx } from "react/jsx-runtime";
import List from './List';
import NoValueLabel from './NoValueLabel';
const meta = {
    title: 'Global / No value label',
    component: NoValueLabel,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        icon: 'single-user-block',
        children: 'No availble entry'
    }
};
export const InList = {
    args: {
        icon: 'single-user-block',
        children: 'No availble entry'
    },
    decorators: [
        ThisStory => (_jsx(List, { hint: "And a hint for the empty list", title: "Here's an empty list", children: _jsx(ThisStory, {}) }))
    ]
};
