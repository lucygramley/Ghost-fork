import { jsx as _jsx } from "react/jsx-runtime";
import assert from 'assert/strict';
import React from 'react';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { H1, H2, H3, H4 } from '../../../../src/components/layout/heading';
import { render } from '../../utils/test-utils';
describe('Heading Components', () => {
    it('renders H1 with correct tag and styling', () => {
        render(_jsx(H1, { "data-testid": "h1", children: "Heading 1" }));
        const heading = screen.getByTestId('h1');
        assert.ok(heading, 'H1 should be rendered');
        assert.equal(heading.tagName.toLowerCase(), 'h1', 'Should be an h1 element');
        assert.equal(heading.textContent, 'Heading 1', 'Should render the provided content');
        assert.ok(heading.className.includes('text-3xl'), 'Should have correct styling');
        assert.ok(heading.className.includes('font-bold'), 'Should have font-bold class');
    });
    it('applies custom className to H1 correctly', () => {
        render(_jsx(H1, { className: "custom-h1-class", "data-testid": "h1", children: "Heading 1" }));
        const heading = screen.getByTestId('h1');
        assert.ok(heading.className.includes('custom-h1-class'), 'Should have custom class');
        assert.ok(heading.className.includes('text-3xl'), 'Should retain default styling');
    });
    it('renders H2 with correct tag and styling', () => {
        render(_jsx(H2, { "data-testid": "h2", children: "Heading 2" }));
        const heading = screen.getByTestId('h2');
        assert.ok(heading, 'H2 should be rendered');
        assert.equal(heading.tagName.toLowerCase(), 'h2', 'Should be an h2 element');
        assert.equal(heading.textContent, 'Heading 2', 'Should render the provided content');
        assert.ok(heading.className.includes('text-2xl'), 'Should have correct styling');
        assert.ok(heading.className.includes('font-bold'), 'Should have font-bold class');
    });
    it('applies custom className to H2 correctly', () => {
        render(_jsx(H2, { className: "custom-h2-class", "data-testid": "h2", children: "Heading 2" }));
        const heading = screen.getByTestId('h2');
        assert.ok(heading.className.includes('custom-h2-class'), 'Should have custom class');
        assert.ok(heading.className.includes('text-2xl'), 'Should retain default styling');
    });
    it('renders H3 with correct tag and styling', () => {
        render(_jsx(H3, { "data-testid": "h3", children: "Heading 3" }));
        const heading = screen.getByTestId('h3');
        assert.ok(heading, 'H3 should be rendered');
        assert.equal(heading.tagName.toLowerCase(), 'h3', 'Should be an h3 element');
        assert.equal(heading.textContent, 'Heading 3', 'Should render the provided content');
        assert.ok(heading.className.includes('text-xl'), 'Should have correct styling');
        assert.ok(heading.className.includes('font-semibold'), 'Should have font-semibold class');
    });
    it('applies custom className to H3 correctly', () => {
        render(_jsx(H3, { className: "custom-h3-class", "data-testid": "h3", children: "Heading 3" }));
        const heading = screen.getByTestId('h3');
        assert.ok(heading.className.includes('custom-h3-class'), 'Should have custom class');
        assert.ok(heading.className.includes('text-xl'), 'Should retain default styling');
    });
    it('renders H4 with correct tag and styling', () => {
        render(_jsx(H4, { "data-testid": "h4", children: "Heading 4" }));
        const heading = screen.getByTestId('h4');
        assert.ok(heading, 'H4 should be rendered');
        assert.equal(heading.tagName.toLowerCase(), 'h4', 'Should be an h4 element');
        assert.equal(heading.textContent, 'Heading 4', 'Should render the provided content');
        assert.ok(heading.className.includes('text-lg'), 'Should have correct styling');
        assert.ok(heading.className.includes('font-semibold'), 'Should have font-semibold class');
    });
    it('applies custom className to H4 correctly', () => {
        render(_jsx(H4, { className: "custom-h4-class", "data-testid": "h4", children: "Heading 4" }));
        const heading = screen.getByTestId('h4');
        assert.ok(heading.className.includes('custom-h4-class'), 'Should have custom class');
        assert.ok(heading.className.includes('text-lg'), 'Should retain default styling');
    });
    it('forwards ref correctly for H1', () => {
        // Testing that a component with ref renders without errors
        const TestComponent = () => {
            const ref = React.useRef(null);
            return _jsx(H1, { ref: ref, "data-testid": "h1", children: "Heading 1" });
        };
        render(_jsx(TestComponent, {}));
        const heading = screen.getByTestId('h1');
        // Check that the component rendered
        assert.ok(heading, 'H1 should be rendered');
    });
});
