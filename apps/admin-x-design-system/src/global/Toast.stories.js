import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Button from './Button';
import { showToast } from './Toast';
/**
 * This component uses `react-hot-toast` which requires the `<Toaster />` component to be included in the app.
 * The design system already does this so you don't have to — just call `showToast()` in any event and it'll work.
 */
const ToastContainer = ({ ...props }) => {
    return (_jsx(_Fragment, { children: _jsx(Button, { color: 'black', label: 'Toast me!', onClick: () => {
                showToast({ ...props });
            } }) }));
};
const meta = {
    title: 'Global / Toast',
    component: ToastContainer,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx(_Fragment, { children: _story() }))]
};
export default meta;
export const Default = {
    args: {
        title: 'Toast title',
        message: 'Hello notification in a toast'
    }
};
export const TitleOnly = {
    args: {
        title: 'Hello notification in a toast'
    }
};
export const MinWidth = {
    args: {
        title: 'Min toast'
    }
};
export const TitleWithIcon = {
    args: {
        title: 'Hello notification in a toast',
        type: 'info',
        options: {
            duration: Infinity
        }
    }
};
export const MessageOnly = {
    args: {
        message: 'Hey, this is a message in a toast. Almost like a message in a bottle.'
    }
};
export const Info = {
    args: {
        title: 'Toast title',
        message: 'Hello success message in a toast',
        type: 'info'
    }
};
export const Success = {
    args: {
        title: 'Toast title',
        message: 'Hello success message in a toast',
        type: 'success'
    }
};
export const Error = {
    args: {
        title: 'Toast title',
        message: 'Hello error message in a toast',
        type: 'error'
    }
};
export const Infinite = {
    args: {
        title: 'Toast title',
        message: 'Hello error message in a toast',
        type: 'error',
        options: {
            duration: Infinity
        }
    }
};
export const PageError = {
    args: {
        title: 'Toast title',
        message: 'This is a page error which should not be automatically dismissed.',
        type: 'pageError'
    }
};
export const Icon = {
    args: {
        message: 'Custom icon in a toast',
        icon: 'user-add'
    }
};
export const Custom = {
    args: {
        message: (_jsxs("div", { children: ["And here is one with a longer notification and a ", _jsx("a", { className: 'underline', href: "https://ghost.org", rel: "noreferrer", target: "_blank", children: "link" }), ", custom ", _jsx("strong", { children: "formatting" }), ", icon and duration."] })),
        icon: (_jsx(_Fragment, { children: "\uD83D\uDC4B" })),
        options: {
            duration: 10000
        }
    }
};
