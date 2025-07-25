import { jsx as _jsx } from "react/jsx-runtime";
import { html } from '@codemirror/lang-html';
import { useArgs } from '@storybook/preview-api';
import CodeEditor from './CodeEditor';
const meta = {
    title: 'Global / Form / Code Editor',
    component: CodeEditor,
    tags: ['autodocs'],
    // decorators: [(_story: () => ReactNode) => (<div style={{maxWidth: '400px'}}>{_story()}</div>)],
    argTypes: {
        hint: {
            control: 'text'
        },
        extensions: {
            table: {
                disable: true
            }
        }
    }
};
export default meta;
export const WithValue = {
    render: function Component(args) {
        const [, updateArgs] = useArgs();
        return _jsx(CodeEditor, { ...args, onChange: value => updateArgs({ value }) });
    },
    args: {
        extensions: [html()],
        value: '<p>HTML goes here</p>'
    }
};
export const WithTitle = {
    args: {
        extensions: [html()],
        title: 'Header code'
    }
};
export const WithHint = {
    args: {
        extensions: [html()],
        hint: 'Here\'s some hint'
    }
};
export const Error = {
    args: {
        title: 'Header code',
        extensions: [html()],
        hint: 'Don\'t use script tags',
        value: '<script>alert("bad")</script>',
        error: true
    }
};
