import { jsx as _jsx } from "react/jsx-runtime";
import assert from 'assert/strict';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Badge } from '../../../../src/components/ui/badge';
import { render } from '../../utils/test-utils';
describe('Badge Component', () => {
    it('renders correctly with default props', () => {
        render(_jsx(Badge, { children: "Default Badge" }));
        const badge = screen.getByText('Default Badge');
        assert.ok(badge, 'Badge should be rendered');
        assert.ok(badge.className.includes('bg-primary'), 'Should have default variant class');
    });
    it('applies different variants correctly', () => {
        render(_jsx(Badge, { variant: "secondary", children: "Secondary Badge" }));
        const badge = screen.getByText('Secondary Badge');
        assert.ok(badge.className.includes('bg-secondary'), 'Should have secondary variant class');
    });
    it('applies destructive variant correctly', () => {
        render(_jsx(Badge, { variant: "destructive", children: "Destructive Badge" }));
        const badge = screen.getByText('Destructive Badge');
        assert.ok(badge.className.includes('bg-destructive'), 'Should have destructive variant class');
    });
    it('applies success variant correctly', () => {
        render(_jsx(Badge, { variant: "success", children: "Success Badge" }));
        const badge = screen.getByText('Success Badge');
        assert.ok(badge.className.includes('bg-green'), 'Should have success variant class');
    });
    it('applies outline variant correctly', () => {
        render(_jsx(Badge, { variant: "outline", children: "Outline Badge" }));
        const badge = screen.getByText('Outline Badge');
        assert.ok(badge.className.includes('text-foreground'), 'Should have outline variant class');
    });
    it('applies custom className correctly', () => {
        render(_jsx(Badge, { className: "custom-class", children: "Custom Badge" }));
        const badge = screen.getByText('Custom Badge');
        assert.ok(badge.className.includes('custom-class'), 'Should have custom class');
    });
    it('passes additional props to the div element', () => {
        render(_jsx(Badge, { "data-testid": "badge-test", children: "Test Badge" }));
        const badge = screen.getByTestId('badge-test');
        assert.equal(badge.textContent, 'Test Badge', 'Should render the text content');
    });
});
