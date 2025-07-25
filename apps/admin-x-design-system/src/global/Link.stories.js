import Link from './Link';
const meta = {
    title: 'Global / Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {
        color: {
            control: 'text'
        }
    }
};
export default meta;
export const Default = {
    args: {
        href: 'https://ghost.org',
        children: 'Click me'
    }
};
