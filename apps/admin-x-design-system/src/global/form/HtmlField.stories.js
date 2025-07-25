import HtmlField from './HtmlField';
const meta = {
    title: 'Global / Form / Htmlfield',
    component: HtmlField,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        placeholder: 'Enter something'
    }
};
export const WithHeading = {
    args: {
        title: 'Title',
        placeholder: 'Enter something'
    }
};
