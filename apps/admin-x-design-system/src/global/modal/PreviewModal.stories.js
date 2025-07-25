import { jsx as _jsx } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import Button from '../Button';
import Heading from '../Heading';
import PreviewModal from './PreviewModal';
const PreviewModalContainer = ({ ...props }) => {
    return (_jsx(Button, { color: 'black', label: 'Open preview modal', onClick: () => {
            NiceModal.show(PreviewModal, { ...props });
        } }));
};
const meta = {
    title: 'Global / Modal / Preview Modal',
    component: PreviewModal,
    tags: ['autodocs'],
    decorators: [(_story, context) => (_jsx(NiceModal.Provider, { children: _jsx(PreviewModalContainer, { ...context.args }) }))],
    argTypes: {
        sidebar: { control: 'text' },
        preview: { control: 'text' },
        sidebarButtons: { control: 'text' },
        sidebarHeader: { control: 'text' }
    }
};
export default meta;
const previewURLs = [
    { id: 'homepage', title: 'Homepage' },
    { id: 'post', title: 'Post' },
    { id: 'page', title: 'Page' },
    { id: 'tag-archive', title: 'Tag archive' },
    { id: 'author-archive', title: 'Author archive' }
];
export const Default = {
    args: {
        title: 'Preview modal',
        preview: (_jsx("div", { className: 'flex h-[150%] items-center justify-center text-sm text-grey-500', children: "Scrollable preview area" })),
        sidebar: (_jsx("div", { className: 'flex h-full items-center justify-center text-sm text-grey-500', children: "Scrollable sidebar area" })),
        previewToolbarTabs: previewURLs,
        onSelectURL: (id) => {
            alert(id);
        }
    }
};
export const NoPreviewToolbar = {
    args: {
        ...Default.args,
        previewToolbar: false
    }
};
export const CustomButtons = {
    args: {
        ...Default.args,
        cancelLabel: 'Meh',
        okLabel: 'Alrite',
        okColor: 'green'
    }
};
export const CustomSidebarHeader = {
    args: {
        ...Default.args,
        sidebarHeader: (_jsx("div", { className: 'border-b border-grey-100 bg-black p-10 text-center text-white', children: _jsx(Heading, { level: 3, children: "A custom header here" }) }))
    }
};
export const FullBleed = {
    args: {
        ...Default.args,
        size: 'bleed'
    }
};
export const BreadcrumbsToolbar = {
    args: {
        ...Default.args,
        previewToolbarTabs: undefined,
        previewToolbarBreadcrumbs: [{ label: 'Previous', onClick: () => { } }, { label: 'Current' }]
    }
};
