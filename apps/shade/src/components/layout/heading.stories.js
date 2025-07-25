import { jsx as _jsx } from "react/jsx-runtime";
import { H1, H2, H3, H4 } from './heading';
const meta = {
    title: 'Layout / Heading',
    tags: ['autodocs']
};
export default meta;
export const HeadingOne = {
    render: (args) => {
        return (_jsx(H1, { ...args, children: "The Joke Tax Chronicles" }));
    }
};
export const HeadingTwo = {
    render: (args) => {
        return (_jsx(H2, { ...args, children: "The Plan" }));
    }
};
export const HeadingThree = {
    render: (args) => {
        return (_jsx(H3, { ...args, children: "The Joke Tax" }));
    }
};
export const HeadingFour = {
    render: (args) => {
        return (_jsx(H4, { ...args, children: "Jokester Revolt" }));
    }
};
