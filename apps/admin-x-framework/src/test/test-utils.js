import { jsx as _jsx } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, renderHook } from '@testing-library/react';
import { FrameworkProvider } from '../providers/FrameworkProvider';
/**
 * Creates a test QueryClient with sensible defaults for testing
 */
export function createTestQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                suspense: false,
                // Disable cache time for tests to avoid stale data
                cacheTime: 0,
                staleTime: 0
            },
            mutations: {
                retry: false
            }
        },
        // Disable logging in tests
        logger: {
            log: () => { },
            warn: () => { },
            error: () => { }
        }
    });
}
/**
 * Default framework props for testing
 */
export const defaultFrameworkProps = {
    externalNavigate: () => { },
    ghostVersion: '5.x',
    onDelete: () => { },
    onInvalidate: () => { },
    onUpdate: () => { },
    sentryDSN: null,
    unsplashConfig: {
        Authorization: '',
        'Accept-Version': '',
        'Content-Type': '',
        'App-Pragma': '',
        'X-Unsplash-Cache': false
    }
};
export function TestWrapper({ children, frameworkProps = {}, queryClient = createTestQueryClient() }) {
    const mergedFrameworkProps = {
        ...defaultFrameworkProps,
        ...frameworkProps
    };
    return (_jsx(FrameworkProvider, { ...mergedFrameworkProps, children: _jsx(QueryClientProvider, { client: queryClient, children: children }) }));
}
export function renderWithProviders(ui, options = {}) {
    const { frameworkProps, queryClient, wrapper: CustomWrapper, ...renderOptions } = options;
    const Wrapper = CustomWrapper || (({ children }) => (_jsx(TestWrapper, { frameworkProps: frameworkProps, queryClient: queryClient, children: children })));
    return render(ui, { wrapper: Wrapper, ...renderOptions });
}
export function renderHookWithProviders(hook, options = {}) {
    const { frameworkProps, queryClient, wrapper: CustomWrapper, ...renderHookOptions } = options;
    const Wrapper = CustomWrapper || (({ children }) => (_jsx(TestWrapper, { frameworkProps: frameworkProps, queryClient: queryClient, children: children })));
    return renderHook(hook, { wrapper: Wrapper, ...renderHookOptions });
}
/**
 * Utility to wait for API calls to complete
 */
export async function waitForApiCall(mockFn, timeout = 1000) {
    const { waitFor } = await import('@testing-library/react');
    return waitFor(() => expect(mockFn).toHaveBeenCalled(), { timeout });
}
/**
 * Utility to wait for multiple API calls
 */
export async function waitForApiCalls(mockFn, count, timeout = 1000) {
    const { waitFor } = await import('@testing-library/react');
    return waitFor(() => expect(mockFn).toHaveBeenCalledTimes(count), { timeout });
}
export function setupConsoleFiltering(options = {}) {
    const { suppressMessages = [], suppressReactWarnings = true, suppressChartWarnings = true } = options;
    // eslint-disable-next-line no-console
    const originalConsoleError = console.error;
    const defaultSuppressedMessages = [
        ...(suppressReactWarnings ? [
            'Support for defaultProps will be removed',
            'Encountered two children with the same key'
        ] : []),
        ...(suppressChartWarnings ? [
            'The width(0) and height(0) of chart should be greater than 0'
        ] : []),
        ...suppressMessages
    ];
    // eslint-disable-next-line no-console
    console.error = (...args) => {
        const message = args[0]?.toString() || '';
        if (defaultSuppressedMessages.some(suppressedMessage => message.includes(suppressedMessage))) {
            return;
        }
        originalConsoleError(...args);
    };
    // Return cleanup function
    return () => {
        // eslint-disable-next-line no-console
        console.error = originalConsoleError;
    };
}
/**
 * Test data factories for common entities
 */
export const testDataFactories = {
    post: (overrides = {}) => ({
        id: 'test-post-id',
        published_at: '2024-01-01T00:00:00.000Z',
        slug: 'test-post',
        status: 'published',
        title: 'Test Post',
        url: 'https://example.com/test-post/',
        uuid: 'test-post-uuid',
        ...overrides
    }),
    member: (overrides = {}) => ({
        created_at: '2024-01-01T00:00:00.000Z',
        email: 'test@example.com',
        id: 'test-member-id',
        status: 'free',
        ...overrides
    }),
    user: (overrides = {}) => ({
        email: 'user@example.com',
        id: 'test-user-id',
        name: 'Test User',
        roles: [{ name: 'Administrator' }],
        slug: 'test-user',
        ...overrides
    }),
    newsletter: (overrides = {}) => ({
        id: 'test-newsletter-id',
        name: 'Test Newsletter',
        slug: 'test-newsletter',
        status: 'active',
        ...overrides
    })
};
/**
 * Mock timer utilities
 */
export function mockTimers() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const vitest = require('vitest');
    vitest.vi.useFakeTimers();
    return {
        advanceTime: (ms) => vitest.vi.advanceTimersByTime(ms),
        cleanup: () => vitest.vi.useRealTimers(),
        runAllTimers: () => vitest.vi.runAllTimers()
    };
}
