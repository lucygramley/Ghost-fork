import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Square, RectangleVertical } from 'lucide-react';
const meta = {
    title: 'Components / Toggle group',
    component: ToggleGroup,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: false,
            table: {
                defaultValue: { summary: 'single' }
            }
        }
    }
};
export default meta;
const TextFormattingComponent = () => {
    const [value, setValue] = useState('bold');
    return (_jsxs(ToggleGroup, { type: "single", value: value, onValueChange: (newValue) => {
            if (newValue) {
                setValue(newValue);
            }
        }, children: [_jsx(ToggleGroupItem, { "aria-label": "Bold", value: "bold", children: _jsx(Bold, { className: "size-4" }) }), _jsx(ToggleGroupItem, { "aria-label": "Italic", value: "italic", children: _jsx(Italic, { className: "size-4" }) }), _jsx(ToggleGroupItem, { "aria-label": "Underline", value: "underline", children: _jsx(Underline, { className: "size-4" }) })] }));
};
export const TextFormatting = {
    render: () => _jsx(TextFormattingComponent, {})
};
const TextAlignmentComponent = () => {
    const [value, setValue] = useState('left');
    return (_jsxs(ToggleGroup, { type: "single", value: value, onValueChange: (newValue) => {
            if (newValue) {
                setValue(newValue);
            }
        }, children: [_jsx(ToggleGroupItem, { "aria-label": "Align left", value: "left", children: _jsx(AlignLeft, { className: "size-4" }) }), _jsx(ToggleGroupItem, { "aria-label": "Align center", value: "center", children: _jsx(AlignCenter, { className: "size-4" }) }), _jsx(ToggleGroupItem, { "aria-label": "Align right", value: "right", children: _jsx(AlignRight, { className: "size-4" }) })] }));
};
export const TextAlignment = {
    render: () => _jsx(TextAlignmentComponent, {})
};
const ViewModeComponent = () => {
    const [value, setValue] = useState('vertical');
    return (_jsxs(ToggleGroup, { type: "single", value: value, onValueChange: (newValue) => {
            if (newValue) {
                setValue(newValue);
            }
        }, children: [_jsx(ToggleGroupItem, { "aria-label": "Vertical view", value: "vertical", children: _jsx(RectangleVertical, { className: "size-4" }) }), _jsx(ToggleGroupItem, { "aria-label": "Square view", value: "square", children: _jsx(Square, { className: "size-4" }) })] }));
};
export const ViewMode = {
    render: () => _jsx(ViewModeComponent, {})
};
const WithTextComponent = () => {
    const [value, setValue] = useState('preview');
    return (_jsxs(ToggleGroup, { type: "single", value: value, onValueChange: (newValue) => {
            if (newValue) {
                setValue(newValue);
            }
        }, children: [_jsx(ToggleGroupItem, { "aria-label": "Preview", value: "preview", children: "Preview" }), _jsx(ToggleGroupItem, { "aria-label": "Code", value: "code", children: "Code" })] }));
};
export const WithText = {
    render: () => _jsx(WithTextComponent, {})
};
const NoSelectionComponent = () => {
    const [value, setValue] = useState('');
    return (_jsxs(ToggleGroup, { type: "single", value: value, onValueChange: setValue, children: [_jsx(ToggleGroupItem, { "aria-label": "Option 1", value: "option1", children: "Option 1" }), _jsx(ToggleGroupItem, { "aria-label": "Option 2", value: "option2", children: "Option 2" }), _jsx(ToggleGroupItem, { "aria-label": "Option 3", value: "option3", children: "Option 3" })] }));
};
export const NoSelection = {
    render: () => _jsx(NoSelectionComponent, {})
};
