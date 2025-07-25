import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import Button from '../Button';
import Modal from './Modal';
import ModalPage from './ModalPage';
const ModalContainer = ({ children, ...props }) => {
    const modal = NiceModal.create(() => {
        return (_jsx(Modal, { ...props, children: _jsx("div", { className: 'py-4', children: children }) }));
    });
    return (_jsx("div", { children: _jsx(Button, { color: 'black', label: 'Open modal', onClick: () => {
                NiceModal.show(modal);
            } }) }));
};
const meta = {
    title: 'Global / Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        topRightContent: {
            control: {
                type: 'text'
            }
        }
    },
    decorators: [(_story, context) => (_jsx(NiceModal.Provider, { children: _jsx(ModalContainer, { ...context.args }) }))]
};
export default meta;
const modalContent = (_jsx("div", { children: "Modal content" }));
export const Default = {
    args: {
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        topRightContent: 'close',
        title: 'Modal dialog',
        children: modalContent
    }
};
export const Small = {
    args: {
        size: 'sm',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Small modal',
        children: modalContent
    }
};
export const Medium = {
    args: {
        size: 'md',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Medium modal (default size)',
        children: modalContent
    }
};
export const Large = {
    args: {
        size: 'lg',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Large modal',
        children: modalContent
    }
};
export const ExtraLarge = {
    args: {
        size: 'xl',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Extra large modal',
        children: modalContent
    }
};
export const Full = {
    args: {
        size: 'full',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Full modal',
        children: modalContent
    }
};
export const Bleed = {
    args: {
        size: 'bleed',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Full bleed modal',
        children: modalContent
    }
};
export const CustomWidth = {
    args: {
        width: 600,
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Custom width modal',
        children: modalContent
    }
};
export const CustomHeight = {
    args: {
        size: 'md',
        height: 'full',
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Custom height modal',
        children: modalContent
    }
};
export const Square = {
    args: {
        width: 320,
        height: 320,
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Square modal',
        children: modalContent
    }
};
export const CompletePage = {
    args: {
        size: 'full',
        footer: _jsx(_Fragment, {}),
        padding: false,
        children: _jsx(_Fragment, { children: _jsx(ModalPage, { heading: 'Hey there full page', children: _jsx("p", { children: "This is a full page in a modal" }) }) })
    }
};
export const CustomButtons = {
    args: {
        leftButtonProps: {
            label: 'Left button',
            onClick: () => {
                alert('Left button click');
            }
        },
        cancelLabel: 'Nope',
        okLabel: 'Yep',
        onOk: () => {
            alert('Clicked Yep!');
        },
        onCancel: undefined,
        title: 'Custom buttons',
        children: modalContent
    }
};
export const RightDrawer = {
    args: {
        size: 'bleed',
        align: 'right',
        animate: false,
        width: 600,
        footer: _jsx(_Fragment, {}),
        children: _jsx(_Fragment, { children: _jsx("p", { children: "This is a drawer style on the right" }) })
    }
};
export const LeftDrawer = {
    args: {
        size: 'bleed',
        align: 'left',
        animate: false,
        width: 600,
        footer: _jsx(_Fragment, {}),
        children: _jsx(_Fragment, { children: _jsx("p", { children: "This is a drawer style on the right" }) })
    }
};
const longContent = (_jsxs(_Fragment, { children: [_jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure. Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure. Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { className: 'mb-6', children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." }), _jsx("p", { children: "Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure. Esse ex officia ipsum et magna reprehenderit ullamco dolore cillum cupidatat ullamco culpa. In et irure irure est id cillum officia pariatur et proident. Nulla nulla dolore qui excepteur magna eu adipisicing mollit. Eiusmod eu irure cupidatat consequat consectetur irure." })] }));
export const StickyHeader = {
    args: {
        size: 'md',
        stickyHeader: true,
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Sticky header',
        stickyFooter: true,
        children: longContent
    }
};
export const StickyFooter = {
    args: {
        size: 'md',
        stickyFooter: true,
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Sticky footer',
        children: longContent
    }
};
export const Dirty = {
    args: {
        size: 'md',
        dirty: true,
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        title: 'Dirty modal',
        children: _jsx("p", { children: "Simulates if there were unsaved changes of a form. Click on Cancel" })
    }
};
export const FormSheet = {
    args: {
        onOk: () => {
            alert('Clicked OK!');
        },
        onCancel: undefined,
        size: 'sm',
        title: 'Form sheet',
        formSheet: true,
        children: _jsxs("p", { children: ["Slightly differently styled modal that can be used to display small forms ", _jsx("em", { children: "inside other modals" }), ". Use it sparingly!"] })
    }
};
