import Avatar from './Avatar';
const meta = {
    title: 'Global / Avatar',
    component: Avatar,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        label: 'DV',
        bgColor: 'green',
        labelColor: 'white'
    }
};
export const WithImage = {
    args: {
        image: 'https://www.looper.com/img/gallery/the-untold-truth-of-the-navi-from-avatar/l-intro-1664914107.jpg',
        label: 'DV'
    }
};
export const WithFallback = {
    args: {
        size: 'lg'
    }
};
export const Small = {
    args: {
        label: 'DV',
        bgColor: 'green',
        labelColor: 'white',
        size: 'sm'
    }
};
export const Medium = {
    args: {
        label: 'DV',
        bgColor: 'green',
        labelColor: 'white',
        size: 'md'
    }
};
export const Large = {
    args: {
        label: 'DV',
        bgColor: 'green',
        labelColor: 'white',
        size: 'lg'
    }
};
export const ExtraLarge = {
    args: {
        label: 'DV',
        bgColor: 'green',
        labelColor: 'white',
        size: 'xl'
    }
};
