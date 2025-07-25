import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import assert from 'assert/strict';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { ViewHeader, ViewHeaderActions } from '../../../../src/components/layout/view-header';
import { render } from '../../utils/test-utils';
describe('ViewHeader Components', () => {
    it('renders ViewHeader with correct structure and styling', () => {
        render(_jsxs(ViewHeader, { children: [_jsx("div", { children: "Header Content" }), _jsxs(ViewHeaderActions, { children: [_jsx("button", { children: "Action 1" }), _jsx("button", { children: "Action 2" })] })] }));
        // ViewHeader renders a header element
        const header = screen.getByRole('banner');
        assert.ok(header, 'ViewHeader should be rendered');
        assert.equal(header.tagName.toLowerCase(), 'header', 'Should be a header element');
        assert.ok(header.className.includes('sticky top-0'), 'Should have sticky positioning');
        assert.ok(header.className.includes('backdrop-blur-md'), 'Should have backdrop blur');
        const headerContent = screen.getByText('Header Content');
        assert.ok(headerContent, 'Header content should be rendered');
        const actionButtons = screen.getAllByRole('button');
        assert.equal(actionButtons.length, 2, 'Should render both action buttons');
        assert.equal(actionButtons[0].textContent, 'Action 1', 'First button should have correct text');
        assert.equal(actionButtons[1].textContent, 'Action 2', 'Second button should have correct text');
    });
    it('applies custom className to ViewHeader correctly', () => {
        render(_jsx(ViewHeader, { className: "custom-header-class", children: _jsx("div", { children: "Header Content" }) }));
        const header = screen.getByRole('banner');
        const innerDiv = header.querySelector('div');
        assert.ok(innerDiv?.className.includes('custom-header-class'), 'Should apply custom class to inner div');
    });
    it('renders ViewHeaderActions with correct styling', () => {
        render(_jsx(ViewHeaderActions, { children: _jsx("button", { children: "Action" }) }));
        const actions = screen.getByText('Action').parentElement;
        assert.ok(actions, 'ViewHeaderActions should be rendered');
        assert.ok(actions?.className.includes('flex items-center gap-2'), 'Should have flex layout styling');
        const button = screen.getByRole('button');
        assert.ok(button, 'Action button should be rendered');
        assert.equal(button.textContent, 'Action', 'Button should have correct text');
    });
    it('renders ViewHeader without actions', () => {
        render(_jsx(ViewHeader, { children: _jsx("div", { children: "Header Content" }) }));
        const header = screen.getByRole('banner');
        assert.ok(header, 'ViewHeader should be rendered');
        const headerContent = screen.getByText('Header Content');
        assert.ok(headerContent, 'Header content should be rendered');
    });
    it('renders ViewHeader with multiple children in ViewHeaderActions', () => {
        render(_jsxs(ViewHeader, { children: [_jsx("div", { children: "Header Content" }), _jsxs(ViewHeaderActions, { children: [_jsx("button", { children: "Action 1" }), _jsx("span", { children: "Separator" }), _jsx("button", { children: "Action 2" })] })] }));
        const separator = screen.getByText('Separator');
        assert.ok(separator, 'Separator should be rendered');
        const actionButtons = screen.getAllByRole('button');
        assert.equal(actionButtons.length, 2, 'Should render both action buttons');
    });
});
