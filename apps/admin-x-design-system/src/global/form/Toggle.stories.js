import { jsx as _jsx } from "react/jsx-runtime";
import Toggle from './Toggle';
const meta = {
    title: 'Global / Form / Toggle',
    component: Toggle,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '400px' }, children: _story() }))]
};
export default meta;
export const Default = {
    args: {}
};
export const Checked = {
    args: {
        checked: true
    }
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
export const WithLabel = {
    args: {
        label: 'Check me'
    }
};
export const HeadingStyleLabel = {
    args: {
        label: 'Heading style label',
        labelStyle: 'heading'
    }
};
export const WithLabelAndHint = {
    args: {
        label: 'Check me',
        hint: 'But only if you dare'
    }
};
export const CustomLabelStyle = {
    args: {
        label: 'Check me',
        labelClasses: 'text-sm translate-y-[1px]'
    }
};
export const LeftToRight = {
    args: {
        label: 'Check me',
        hint: 'But only if you dare',
        direction: 'rtl'
    }
};
export const WithSeparator = {
    args: {
        label: 'Check me',
        hint: 'But only if you dare',
        direction: 'rtl',
        separator: true
    }
};
export const CustomBgColor = {
    args: {
        toggleBg: 'stripetest'
    }
};
export const Error = {
    args: {
        label: 'Check me',
        hint: 'But only if you dare',
        direction: 'rtl',
        error: true,
        separator: true
    }
};
