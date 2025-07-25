import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import assert from 'assert/strict';
import { describe, it } from 'vitest';
import { screen, within } from '@testing-library/react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../../../src/components/ui/dialog';
import { render } from '../../utils/test-utils';
describe('Dialog Components', () => {
    it('renders Dialog with trigger button correctly', () => {
        render(_jsxs(Dialog, { defaultOpen: true, children: [_jsx(DialogTrigger, { "data-testid": "dialog-trigger", children: "Open Dialog" }), _jsxs(DialogContent, { children: [_jsxs(DialogHeader, { children: [_jsx(DialogTitle, { children: "Dialog Title" }), _jsx(DialogDescription, { children: "Dialog Description" })] }), _jsx("p", { children: "Dialog Content" }), _jsxs(DialogFooter, { children: [_jsx("button", { children: "Cancel" }), _jsx("button", { children: "Submit" })] })] })] }));
        const trigger = screen.getByTestId('dialog-trigger');
        assert.ok(trigger, 'Dialog trigger should be rendered');
        assert.equal(trigger.textContent, 'Open Dialog', 'Trigger should have correct text');
    });
    it('applies custom className to DialogHeader correctly', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { children: "Required Description" }), _jsx(DialogHeader, { className: "custom-header-class", "data-testid": "dialog-header", children: _jsx("div", { children: "Title" }) })] }) }));
        const header = screen.getByTestId('dialog-header');
        assert.ok(header.className.includes('custom-header-class'), 'Should have custom class');
        assert.ok(header.className.includes('flex flex-col'), 'Should have default styling');
    });
    it('applies custom className to DialogFooter correctly', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { children: "Required Description" }), _jsx(DialogFooter, { className: "custom-footer-class", "data-testid": "dialog-footer", children: _jsx("button", { children: "Button" }) })] }) }));
        const footer = screen.getByTestId('dialog-footer');
        assert.ok(footer.className.includes('custom-footer-class'), 'Should have custom class');
        assert.ok(footer.className.includes('flex flex-col-reverse'), 'Should have default styling');
    });
    it('renders DialogTitle with correct styling', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { "data-testid": "dialog-title", children: "Test Title" }), _jsx(DialogDescription, { children: "Required description" })] }) }));
        const title = screen.getByTestId('dialog-title');
        assert.equal(title.tagName.toLowerCase(), 'h2', 'Should be an h2 element');
        assert.equal(title.textContent, 'Test Title', 'Should have correct text content');
        assert.ok(title.className.includes('text-xl font-semibold'), 'Should have default styling');
    });
    it('applies custom className to DialogTitle correctly', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { className: "custom-title-class", "data-testid": "dialog-title", children: "Test Title" }), _jsx(DialogDescription, { children: "Required description" })] }) }));
        const title = screen.getByTestId('dialog-title');
        assert.ok(title.className.includes('custom-title-class'), 'Should have custom class');
    });
    it('renders DialogDescription with correct styling', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required title" }), _jsx(DialogDescription, { "data-testid": "dialog-description", children: "Test Description" })] }) }));
        const description = screen.getByTestId('dialog-description');
        assert.equal(description.textContent, 'Test Description', 'Should have correct text content');
        assert.ok(description.className.includes('text-sm text-muted-foreground'), 'Should have default styling');
    });
    it('applies custom className to DialogDescription correctly', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required title" }), _jsx(DialogDescription, { className: "custom-desc-class", "data-testid": "dialog-description", children: "Test Description" })] }) }));
        const description = screen.getByTestId('dialog-description');
        assert.ok(description.className.includes('custom-desc-class'), 'Should have custom class');
    });
    it('tests Dialog structure with all components', () => {
        render(_jsx(Dialog, { defaultOpen: true, children: _jsxs(DialogContent, { "data-testid": "dialog-content", children: [_jsxs(DialogHeader, { "data-testid": "dialog-header", children: [_jsx(DialogTitle, { "data-testid": "dialog-title", children: "Testing Dialog" }), _jsx(DialogDescription, { "data-testid": "dialog-description", children: "This is a dialog description" })] }), _jsx("div", { children: "Dialog body content" }), _jsxs(DialogFooter, { "data-testid": "dialog-footer", children: [_jsx("button", { children: "Cancel" }), _jsx("button", { children: "Confirm" })] })] }) }));
        const content = screen.getByTestId('dialog-content');
        assert.ok(content, 'Dialog content should be rendered');
        const title = within(content).getByTestId('dialog-title');
        assert.ok(title, 'Dialog title should be rendered');
        assert.equal(title.textContent, 'Testing Dialog', 'Title should have correct text');
        const description = within(content).getByTestId('dialog-description');
        assert.ok(description, 'Dialog description should be rendered');
        assert.equal(description.textContent, 'This is a dialog description', 'Description should have correct text');
    });
    it('tests dialog components with custom classes', () => {
        render(_jsx(Dialog, { defaultOpen: true, children: _jsx(DialogContent, { "data-testid": "dialog-content", children: _jsxs(DialogHeader, { children: [_jsx(DialogTitle, { className: "custom-title-class", "data-testid": "custom-title", children: "Custom Title" }), _jsx(DialogDescription, { className: "custom-desc-class", "data-testid": "custom-desc", children: "Custom Description" })] }) }) }));
        const title = screen.getByTestId('custom-title');
        assert.ok(title.className.includes('custom-title-class'), 'Title should have custom class');
        const description = screen.getByTestId('custom-desc');
        assert.ok(description.className.includes('custom-desc-class'), 'Description should have custom class');
    });
    it('renders Dialog with a trigger button', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { "data-testid": "dialog-content", children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { children: "Required Description" }), _jsx("div", { children: "Dialog Content" })] }) }));
        const dialogContent = screen.getByTestId('dialog-content');
        assert.ok(dialogContent, 'Dialog content should be rendered');
    });
    it('applies a custom className to DialogHeader', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { children: "Required Description" }), _jsx(DialogHeader, { className: "custom-header-class", "data-testid": "dialog-header", children: "Header Content" })] }) }));
        const dialogHeader = screen.getByTestId('dialog-header');
        assert.ok(dialogHeader.className.includes('custom-header-class'), 'Should have custom class');
    });
    it('applies a custom className to DialogFooter', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { children: "Required Description" }), _jsx(DialogFooter, { className: "custom-footer-class", "data-testid": "dialog-footer", children: "Footer Content" })] }) }));
        const dialogFooter = screen.getByTestId('dialog-footer');
        assert.ok(dialogFooter.className.includes('custom-footer-class'), 'Should have custom class');
    });
    it('renders DialogTitle with correct HTML structure and styling', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { "data-testid": "dialog-title", children: "Test Title" }), _jsx(DialogDescription, { children: "Required Description" })] }) }));
        const dialogTitle = screen.getByTestId('dialog-title');
        assert.equal(dialogTitle.textContent, 'Test Title', 'Should render title text');
        assert.ok(dialogTitle.className.includes('text-xl font-semibold'), 'Should have default styling');
    });
    it('renders DialogDescription with correct HTML structure and styling', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required Title" }), _jsx(DialogDescription, { "data-testid": "dialog-description", children: "Test Description" })] }) }));
        const dialogDescription = screen.getByTestId('dialog-description');
        assert.equal(dialogDescription.textContent, 'Test Description', 'Should render description text');
        assert.ok(dialogDescription.className.includes('text-sm text-muted-foreground'), 'Should have default styling');
    });
    it('applies a custom className to DialogTitle', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { className: "custom-title-class", "data-testid": "dialog-title", children: "Title Content" }), _jsx(DialogDescription, { children: "Required description" })] }) }));
        const dialogTitle = screen.getByTestId('dialog-title');
        assert.ok(dialogTitle.className.includes('custom-title-class'), 'Should have custom class');
    });
    it('applies a custom className to DialogDescription', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { children: [_jsx(DialogTitle, { children: "Required title" }), _jsx(DialogDescription, { className: "custom-description-class", "data-testid": "dialog-description", children: "Description Content" })] }) }));
        const dialogDescription = screen.getByTestId('dialog-description');
        assert.ok(dialogDescription.className.includes('custom-description-class'), 'Should have custom class');
    });
    it('renders a dialog with all the components', () => {
        render(_jsx(Dialog, { open: true, children: _jsxs(DialogContent, { "data-testid": "dialog-content", children: [_jsxs(DialogHeader, { "data-testid": "dialog-header", children: [_jsx(DialogTitle, { "data-testid": "dialog-title", children: "Dialog Title" }), _jsx(DialogDescription, { "data-testid": "dialog-description", children: "Dialog Description" })] }), _jsx("div", { children: "Main Content" }), _jsx(DialogFooter, { "data-testid": "dialog-footer", children: _jsx("button", { children: "Footer Button" }) })] }) }));
        // Verify that all components render
        assert.ok(screen.getByTestId('dialog-content'), 'Dialog content should be rendered');
        assert.ok(screen.getByTestId('dialog-header'), 'Dialog header should be rendered');
        assert.ok(screen.getByTestId('dialog-title'), 'Dialog title should be rendered');
        assert.ok(screen.getByTestId('dialog-description'), 'Dialog description should be rendered');
        assert.ok(screen.getByTestId('dialog-footer'), 'Dialog footer should be rendered');
        // Check the structure is correct
        const dialogContent = screen.getByTestId('dialog-content');
        const dialogHeader = screen.getByTestId('dialog-header');
        const dialogFooter = screen.getByTestId('dialog-footer');
        assert.ok(dialogHeader.parentNode === dialogContent, 'Header should be a direct child of content');
        assert.ok(dialogFooter.parentNode === dialogContent, 'Footer should be a direct child of content');
    });
});
