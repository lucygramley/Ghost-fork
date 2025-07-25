import { jsx as _jsx } from "react/jsx-runtime";
import { describe, it, expect } from 'vitest';
import { render } from './test-utils';
describe('Test Utils', () => {
    it('render function works correctly', () => {
        const { container } = render(_jsx("div", { children: "Test" }));
        expect(container).toBeDefined();
        expect(container.textContent).toBe('Test');
    });
});
