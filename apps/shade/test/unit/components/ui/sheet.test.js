import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import assert from 'assert/strict';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../../../src/components/ui/sheet';
import { render } from '../../utils/test-utils';
describe('Sheet Components', () => {
    it('renders Sheet with trigger button correctly', () => {
        render(_jsxs(Sheet, { defaultOpen: true, children: [_jsx(SheetTrigger, { "data-testid": "sheet-trigger", children: "Open Sheet" }), _jsxs(SheetContent, { "data-testid": "sheet-content", children: [_jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Sheet Title" }), _jsx(SheetDescription, { children: "Sheet Description" })] }), _jsx("p", { children: "Sheet Content" }), _jsxs(SheetFooter, { children: [_jsx("button", { children: "Cancel" }), _jsx("button", { children: "Submit" })] })] })] }));
        const trigger = screen.getByTestId('sheet-trigger');
        assert.ok(trigger, 'Sheet trigger should be rendered');
        assert.equal(trigger.textContent, 'Open Sheet', 'Trigger should have correct text');
    });
    it('applies custom className to SheetHeader correctly', () => {
        render(_jsx(Sheet, { open: true, children: _jsxs(SheetContent, { children: [_jsx(SheetTitle, { children: "Required Title" }), _jsx(SheetDescription, { children: "Required Description" }), _jsx(SheetHeader, { className: "custom-header-class", "data-testid": "sheet-header", children: _jsx("div", { children: "Title" }) })] }) }));
        const header = screen.getByTestId('sheet-header');
        assert.ok(header.className.includes('custom-header-class'), 'Should have custom class');
        assert.ok(header.className.includes('flex flex-col'), 'Should have default styling');
    });
    it('applies custom className to SheetFooter correctly', () => {
        render(_jsx(Sheet, { open: true, children: _jsxs(SheetContent, { children: [_jsx(SheetTitle, { children: "Required Title" }), _jsx(SheetDescription, { children: "Required Description" }), _jsx(SheetFooter, { className: "custom-footer-class", "data-testid": "sheet-footer", children: _jsx("button", { children: "Button" }) })] }) }));
        const footer = screen.getByTestId('sheet-footer');
        assert.ok(footer.className.includes('custom-footer-class'), 'Should have custom class');
    });
    it('renders SheetTitle with correct styling', () => {
        render(_jsx(Sheet, { open: true, children: _jsxs(SheetContent, { children: [_jsx(SheetTitle, { "data-testid": "sheet-title", children: "Test Title" }), _jsx(SheetDescription, { children: "Required description" })] }) }));
        const title = screen.getByTestId('sheet-title');
        assert.equal(title.textContent, 'Test Title', 'Should have correct text content');
        assert.ok(title.className.includes('text-xl font-semibold'), 'Should have default styling');
    });
    it('renders SheetDescription with correct styling', () => {
        render(_jsx(Sheet, { open: true, children: _jsxs(SheetContent, { children: [_jsx(SheetTitle, { children: "Required title" }), _jsx(SheetDescription, { "data-testid": "sheet-description", children: "Test Description" })] }) }));
        const description = screen.getByTestId('sheet-description');
        assert.equal(description.textContent, 'Test Description', 'Should have correct text content');
        assert.ok(description.className.includes('text-sm text-muted-foreground'), 'Should have default styling');
    });
    it('renders a Sheet with all components properly nested', () => {
        render(_jsx(Sheet, { open: true, children: _jsxs(SheetContent, { "data-testid": "sheet-content", children: [_jsxs(SheetHeader, { "data-testid": "sheet-header", children: [_jsx(SheetTitle, { "data-testid": "sheet-title", children: "Sheet Title" }), _jsx(SheetDescription, { "data-testid": "sheet-description", children: "Sheet Description" })] }), _jsx("div", { children: "Main Content" }), _jsx(SheetFooter, { "data-testid": "sheet-footer", children: _jsx("button", { children: "Footer Button" }) })] }) }));
        // Verify that all components render
        assert.ok(screen.getByTestId('sheet-content'), 'Sheet content should be rendered');
        assert.ok(screen.getByTestId('sheet-header'), 'Sheet header should be rendered');
        assert.ok(screen.getByTestId('sheet-title'), 'Sheet title should be rendered');
        assert.ok(screen.getByTestId('sheet-description'), 'Sheet description should be rendered');
        assert.ok(screen.getByTestId('sheet-footer'), 'Sheet footer should be rendered');
    });
});
