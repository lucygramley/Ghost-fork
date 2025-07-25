import { LoadingIndicator } from './LoadingIndicator';
const meta = {
    title: 'Global / Loading indicator',
    component: LoadingIndicator,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        delay: 1000,
        style: {
            height: '400px'
        }
    }
};
export const Small = {
    args: {
        delay: 1000,
        size: 'sm',
        color: 'dark',
        style: {
            height: '400px'
        }
    }
};
export const Medium = {
    args: {
        delay: 1000,
        size: 'md',
        color: 'dark',
        style: {
            height: '400px'
        }
    }
};
export const Large = {
    args: {
        delay: 1000,
        size: 'lg',
        color: 'dark',
        style: {
            height: '400px'
        }
    }
};
export const LightColor = {
    args: {
        delay: 1000,
        size: 'lg',
        color: 'light',
        style: {
            height: '400px',
            backgroundColor: 'tomato'
        }
    }
};
