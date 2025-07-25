import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { toast } from 'react-hot-toast';
import Icon from './Icon';
/**
 * This component uses `react-hot-toast` which requires the `<Toaster />` component to be included in the app.
 * The design system already does this so you don't have to — just call `showToast()` in any event and it'll work.
 */
const Toast = ({ t, children, props }) => {
    let iconColorClass = 'text-grey-500';
    switch (props?.type) {
        case 'info':
            props.icon = props.icon || 'info-fill';
            iconColorClass = 'text-grey-500';
            break;
        case 'success':
            props.icon = props.icon || 'success-fill';
            iconColorClass = 'text-green';
            break;
        case 'error':
            props.icon = props.icon || 'error-fill';
            iconColorClass = 'text-red';
            break;
    }
    const classNames = clsx('relative z-[90] mb-[14px] ml-[6px] flex min-w-[272px] items-start justify-between gap-3 rounded-lg bg-white p-4 text-sm text-black shadow-md-heavy dark:bg-grey-925 dark:text-white', props?.options?.position === 'top-center' ? 'max-w-[520px]' : 'max-w-[320px]', t.visible ? (props?.options?.position === 'top-center' ? 'animate-toaster-top-in' : 'animate-toaster-in') : 'animate-toaster-out');
    return (_jsxs("div", { className: classNames, "data-testid": `toast-${props?.type}`, children: [_jsxs("div", { className: 'mr-7 flex items-start gap-[10px]', children: [props?.icon && (typeof props.icon === 'string' ?
                        _jsx("div", { className: 'mt-px', children: _jsx(Icon, { className: 'grow', colorClass: iconColorClass, name: props.icon, size: 'sm' }) }) : props.icon), children] }), _jsx("button", { className: 'absolute right-5 top-5 -mr-1.5 -mt-1.5 cursor-pointer rounded-full p-2 text-grey-700 hover:text-black dark:hover:text-white', type: 'button', onClick: () => {
                    toast.dismiss(t.id);
                }, children: _jsx("div", { children: _jsx(Icon, { colorClass: 'stroke-2', name: 'close', size: '2xs' }) }) })] }));
};
export default Toast;
export const showToast = ({ title, message, type = 'neutral', icon = '', options = {
    position: 'bottom-left',
    duration: 5000
} }) => {
    if (!options.position) {
        options.position = 'bottom-left';
    }
    if (type === 'pageError') {
        type = 'error';
        options.position = 'top-center';
        options.duration = Infinity;
    }
    toast.custom(t => (_jsx(Toast, { props: {
            type: type,
            icon: icon,
            options: options
        }, t: t, children: _jsxs("div", { children: [title && _jsx("span", { className: 'mt-px block text-md font-semibold leading-tighter tracking-[0.1px]', children: title }), message &&
                    _jsx("div", { className: `text-grey-900 dark:text-grey-300 ${title ? 'mt-1' : ''}`, children: message })] }) })), {
        ...options
    });
};
export const dismissAllToasts = () => {
    toast.dismiss();
};
