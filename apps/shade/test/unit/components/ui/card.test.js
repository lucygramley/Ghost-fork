import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import assert from 'assert/strict';
import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../../../../src/components/ui/card';
import { render } from '../../utils/test-utils';
describe('Card Components', () => {
    it('renders Card with default outline variant', () => {
        render(_jsx(Card, { "data-testid": "card", children: "Card Content" }));
        const card = screen.getByTestId('card');
        assert.ok(card, 'Card should be rendered');
        assert.equal(card.textContent, 'Card Content', 'Card should render its content');
        assert.ok(card.className.includes('rounded-xl border'), 'Should have outline variant styling');
    });
    it('renders Card with plain variant', () => {
        render(_jsx(Card, { variant: "plain", "data-testid": "card", children: "Card Content" }));
        const card = screen.getByTestId('card');
        assert.ok(card, 'Card should be rendered');
        assert.ok(!card.className.includes('rounded-xl border'), 'Should not have outline variant styling');
    });
    it('applies custom className to Card correctly', () => {
        render(_jsx(Card, { className: "custom-card-class", "data-testid": "card", children: "Card Content" }));
        const card = screen.getByTestId('card');
        assert.ok(card.className.includes('custom-card-class'), 'Should have custom class');
    });
    it('renders CardHeader with correct styling based on Card variant', () => {
        render(_jsx(Card, { "data-testid": "card", children: _jsx(CardHeader, { "data-testid": "card-header", children: "Header Content" }) }));
        const header = screen.getByTestId('card-header');
        assert.ok(header, 'CardHeader should be rendered');
        assert.equal(header.textContent, 'Header Content', 'CardHeader should render its content');
        assert.ok(header.className.includes('p-6'), 'Header should have appropriate padding');
    });
    it('renders CardHeader with plain variant styling', () => {
        render(_jsx(Card, { variant: "plain", "data-testid": "card", children: _jsx(CardHeader, { "data-testid": "card-header", children: "Header Content" }) }));
        const header = screen.getByTestId('card-header');
        assert.ok(header.className.includes('border-b py-5'), 'Should have plain variant styling');
    });
    it('renders CardTitle with correct styling', () => {
        render(_jsx(CardTitle, { "data-testid": "card-title", children: "Card Title" }));
        const title = screen.getByTestId('card-title');
        assert.ok(title, 'CardTitle should be rendered');
        assert.equal(title.textContent, 'Card Title', 'CardTitle should render its content');
        assert.ok(title.className.includes('font-semibold'), 'Should have correct styling');
    });
    it('renders CardDescription with correct styling', () => {
        render(_jsx(CardDescription, { "data-testid": "card-description", children: "Card Description" }));
        const description = screen.getByTestId('card-description');
        assert.ok(description, 'CardDescription should be rendered');
        assert.equal(description.textContent, 'Card Description', 'CardDescription should render its content');
        assert.ok(description.className.includes('text-muted-foreground'), 'Should have correct styling');
    });
    it('renders CardContent with correct styling based on Card variant', () => {
        render(_jsx(Card, { "data-testid": "card", children: _jsx(CardContent, { "data-testid": "card-content", children: "Content" }) }));
        const content = screen.getByTestId('card-content');
        assert.ok(content, 'CardContent should be rendered');
        assert.equal(content.textContent, 'Content', 'CardContent should render its content');
        assert.ok(content.className.includes('p-6 pt-0'), 'Should have outline variant styling');
    });
    it('renders CardContent with plain variant styling', () => {
        render(_jsx(Card, { variant: "plain", "data-testid": "card", children: _jsx(CardContent, { "data-testid": "card-content", children: "Content" }) }));
        const content = screen.getByTestId('card-content');
        assert.ok(content.className.includes('border-b'), 'Should have plain variant styling');
    });
    it('renders CardFooter with correct styling based on Card variant', () => {
        render(_jsx(Card, { "data-testid": "card", children: _jsx(CardFooter, { "data-testid": "card-footer", children: "Footer Content" }) }));
        const footer = screen.getByTestId('card-footer');
        assert.ok(footer, 'CardFooter should be rendered');
        assert.equal(footer.textContent, 'Footer Content', 'CardFooter should render its content');
        assert.ok(footer.className.includes('p-6 pt-0'), 'Should have outline variant styling');
    });
    it('renders CardFooter with plain variant styling', () => {
        render(_jsx(Card, { variant: "plain", "data-testid": "card", children: _jsx(CardFooter, { "data-testid": "card-footer", children: "Footer Content" }) }));
        const footer = screen.getByTestId('card-footer');
        assert.ok(footer.className.includes('py-5'), 'Should have plain variant styling');
    });
    it('renders a complete Card with all subcomponents', () => {
        render(_jsxs(Card, { "data-testid": "card", children: [_jsxs(CardHeader, { "data-testid": "card-header", children: [_jsx(CardTitle, { "data-testid": "card-title", children: "Card Title" }), _jsx(CardDescription, { "data-testid": "card-description", children: "Card Description" })] }), _jsx(CardContent, { "data-testid": "card-content", children: "Card Content" }), _jsx(CardFooter, { "data-testid": "card-footer", children: "Card Footer" })] }));
        assert.ok(screen.getByTestId('card'), 'Card should be rendered');
        assert.ok(screen.getByTestId('card-header'), 'CardHeader should be rendered');
        assert.ok(screen.getByTestId('card-title'), 'CardTitle should be rendered');
        assert.ok(screen.getByTestId('card-description'), 'CardDescription should be rendered');
        assert.ok(screen.getByTestId('card-content'), 'CardContent should be rendered');
        assert.ok(screen.getByTestId('card-footer'), 'CardFooter should be rendered');
    });
});
