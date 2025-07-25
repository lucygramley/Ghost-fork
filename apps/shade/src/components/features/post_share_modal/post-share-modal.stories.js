import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PostShareModal from './post-share-modal';
const meta = {
    title: 'Features / Post Share Modal',
    component: PostShareModal,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
const defaultProps = {
    description: _jsxs(_Fragment, { children: ["Your post was published on your site and sent to ", _jsx("strong", { children: "3 subscribers" }), " of ", _jsx("strong", { children: "Handcrafted questioner" }), ", on ", _jsx("strong", { children: "June 13th" }), " at ", _jsx("strong", { children: "12:02" }), "."] }),
    featureImageURL: 'https://loremflickr.com/800/600',
    faviconURL: 'https://www.google.com/s2/favicons?domain=ghost.org&sz=64',
    postURL: 'https://ghost.org/sample-post-url',
    postTitle: 'How to Build Amazing React Components',
    postExcerpt: 'Learn the best practices for creating reusable and maintainable React components that scale with your application.',
    siteTitle: 'Ghost Blog',
    author: 'John Doe',
    onClose: () => {
        alert('Modal closed');
    }
};
export const Default = {
    args: {
        children: _jsx(Button, { children: "Share Post" }),
        ...defaultProps
    }
};
export const WithCustomTrigger = {
    args: {
        children: (_jsx(Button, { size: "sm", variant: "outline", children: "Open Share Modal" })),
        ...defaultProps
    }
};
export const NoFeatureImage = {
    args: {
        children: (_jsx(Button, { size: "sm", variant: "outline", children: "Open Share Modal" })),
        ...defaultProps,
        featureImageURL: ''
    }
};
export const OpenByDefault = {
    args: {
        defaultOpen: true,
        children: _jsx(Button, { children: "Share Post (Open)" }),
        ...defaultProps
    }
};
export const WithWorkingCloseButton = {
    render: () => {
        const InteractiveExample = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (_jsx(PostShareModal, { author: "John Doe", faviconURL: "https://www.google.com/s2/favicons?domain=ghost.org&sz=64", featureImageURL: "https://loremflickr.com/800/600", open: isOpen, postExcerpt: "Learn the best practices for creating reusable and maintainable React components that scale with your application.", postTitle: "How to Build Amazing React Components", postURL: "https://myblog.com/amazing-react-components", siteTitle: "Ghost Blog", onClose: () => setIsOpen(false), onOpenChange: setIsOpen, children: _jsx(Button, { onClick: () => setIsOpen(true), children: "Open Modal (Working Close & Copy)" }) }));
        };
        return _jsx(InteractiveExample, {});
    }
};
export const CopyLinkDemo = {
    render: () => {
        const CopyExample = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (_jsx("div", { className: "space-y-4", children: _jsx(PostShareModal, { author: "Jane Smith", defaultOpen: isOpen, faviconURL: "https://www.google.com/s2/favicons?domain=example.com&sz=64", featureImageURL: "https://picsum.photos/800/600?random=1", open: isOpen, postExcerpt: "A comprehensive guide to implementing copy-to-clipboard functionality in React applications with proper error handling and user feedback.", postTitle: "Copy to Clipboard in React: Complete Guide", postURL: "https://example.com/copy-clipboard-react-guide", siteTitle: "Tech Blog", onClose: () => setIsOpen(false), onOpenChange: setIsOpen, children: _jsx(Button, { onClick: () => setIsOpen(true), children: "Demo Copy Link Feature" }) }) }));
        };
        return _jsx(CopyExample, {});
    }
};
export const PostSuccess = {
    render: () => {
        const CopyExample = () => {
            const [isOpen, setIsOpen] = useState(false);
            return (_jsx("div", { className: "space-y-4", children: _jsx(PostShareModal, { author: "Jane Smith", defaultOpen: isOpen, description: _jsxs(_Fragment, { children: ["Your post was published on your site of ", _jsx("strong", { children: "The Utegaard" }), ", today at 12:40"] }), faviconURL: "https://www.google.com/s2/favicons?domain=example.com&sz=64", featureImageURL: "https://picsum.photos/800/600?random=1", open: isOpen, postExcerpt: "A comprehensive guide to implementing copy-to-clipboard functionality in React applications with proper error handling and user feedback.", postTitle: "Copy to Clipboard in React: Complete Guide", postURL: "https://example.com/copy-clipboard-react-guide", primaryTitle: "Boom it's out there", secondaryTitle: "That's 519 post published", siteTitle: "Tech Blog", onClose: () => setIsOpen(false), onOpenChange: setIsOpen, children: _jsx(Button, { onClick: () => setIsOpen(true), children: "Post success dialog" }) }) }));
        };
        return _jsx(CopyExample, {});
    }
};
