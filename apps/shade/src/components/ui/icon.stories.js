import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Icon from '@/components/ui/icon';
import { useState } from 'react';
const meta = {
    title: 'Components / Icons',
    component: Icon.Close,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md'
        }
    }
};
export default meta;
export const IconGallery = {
    render: (args) => {
        const icons = Object.keys(Icon);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [copiedIcon, setCopiedIcon] = useState(null);
        const copyToClipboard = (iconName) => {
            const componentString = `<Icon.${iconName}${args?.size ? ` size="${args.size}"` : ''} />`;
            navigator.clipboard.writeText(componentString);
            setCopiedIcon(iconName);
            setTimeout(() => setCopiedIcon(null), 2000);
        };
        return (_jsx("div", { className: 'sb-icon-grid', children: icons.map((iconName) => {
                const IconComponent = Icon[iconName];
                return (_jsxs("div", { className: 'sb-icon', title: 'Click to copy component code', onClick: () => copyToClipboard(iconName), children: [_jsx(IconComponent, { ...args }), _jsx("span", { className: "mt-2 text-sm", children: copiedIcon === iconName ? 'Copied!' : iconName })] }, iconName));
            }) }));
    }
};
