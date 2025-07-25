import Breadcrumbs from './Breadcrumbs';
const meta = {
    title: 'Global / Breadcrumbs',
    component: Breadcrumbs,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        items: [
            { label: 'Hello', onClick: () => {
                    alert('Hello');
                } },
            { label: 'Nice', onClick: () => {
                    alert('Nice');
                } },
            { label: 'Turtleneck' }
        ]
    }
};
