import Button from './Button';
const meta = {
    title: 'Global / Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'select'
        }
    }
};
export default meta;
export const Default = {
    args: {
        label: 'Button'
    }
};
export const Small = {
    args: {
        size: 'sm',
        label: 'Button',
        color: 'black'
    }
};
export const Black = {
    args: {
        label: 'Button',
        color: 'black'
    }
};
export const Grey = {
    args: {
        label: 'Button',
        color: 'grey'
    }
};
export const Green = {
    args: {
        label: 'Button',
        color: 'green'
    }
};
export const Red = {
    args: {
        label: 'Button',
        color: 'red'
    }
};
export const LinkButton = {
    args: {
        label: 'Button',
        color: 'green',
        link: true
    }
};
export const Icon = {
    args: {
        icon: 'ellipsis',
        color: 'green',
        iconColorClass: 'text-white'
    }
};
export const IconSmall = {
    args: {
        size: 'sm',
        icon: 'ellipsis',
        color: 'green',
        iconColorClass: 'text-white'
    }
};
export const Loading = {
    args: {
        loading: true,
        color: 'green',
        label: 'Button'
    }
};
