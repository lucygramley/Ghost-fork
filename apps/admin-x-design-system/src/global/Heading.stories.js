import Heading from './Heading';
const meta = {
    title: 'Global / Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        level: {
            control: 'select'
        }
    }
};
export default meta;
export const H1 = {
    args: {
        children: 'Heading 1'
    }
};
export const H2 = {
    args: {
        children: 'Heading 2',
        level: 2
    }
};
export const H3 = {
    args: {
        children: 'Heading 3',
        level: 3
    }
};
export const H4 = {
    args: {
        children: 'Heading 4',
        level: 4
    }
};
export const H5 = {
    args: {
        children: 'Heading 5',
        level: 5
    }
};
export const H6 = {
    args: {
        children: 'Heading 6',
        level: 6
    }
};
export const H6Grey = {
    args: {
        children: 'Grey heading 6',
        level: 6,
        grey: true
    }
};
export const H6WithSeparator = {
    args: {
        children: 'Heading 6 with separator',
        level: 6,
        separator: true
    }
};
