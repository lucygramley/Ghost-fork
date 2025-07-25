import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import Button from '../Button';
import ButtonGroup from '../ButtonGroup';
import DesktopChromeHeader from './DesktopChromeHeader';
import Select from '../form/Select';
const meta = {
    title: 'Global / Chrome / Desktop Header',
    component: DesktopChromeHeader,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {}
};
export const Small = {
    args: {
        size: 'sm'
    }
};
export const Large = {
    args: {
        size: 'lg'
    }
};
export const Empty = {
    args: {
        toolbarLeft: _jsx(_Fragment, {})
    }
};
export const WithTitle = {
    args: {
        toolbarCenter: 'Hello title'
    }
};
const selectOptions = [
    { value: 'homepage', label: 'Homepage' },
    { value: 'post', label: 'Post' },
    { value: 'page', label: 'Page' },
    { value: 'tag-archive', label: 'Tag archive' },
    { value: 'author-archive', label: 'Author archive' }
];
export const CustomToolbar = {
    args: {
        toolbarLeft: _jsx(Button, { icon: 'arrow-left', link: true, size: 'sm' }),
        toolbarCenter: _jsx(Select, { options: selectOptions, onSelect: (value) => {
                alert(value);
            } }),
        toolbarRight: _jsx(ButtonGroup, { buttons: [
                { icon: 'laptop', link: true, size: 'sm' },
                { icon: 'mobile', link: true, size: 'sm', iconColorClass: 'text-grey-500' }
            ] })
    }
};
