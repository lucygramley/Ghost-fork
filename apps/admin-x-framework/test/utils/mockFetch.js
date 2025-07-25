/// <reference types="vitest/globals" />
const originalFetch = global.fetch;
export const withMockFetch = async ({ json = {}, headers = {}, status = 200, ok = true }, callback) => {
    const mockFetch = vi.fn(() => Promise.resolve({
        json: () => Promise.resolve(json),
        headers: new Headers(headers),
        status,
        ok
    }));
    global.fetch = mockFetch; // eslint-disable-line @typescript-eslint/no-explicit-any
    await callback(mockFetch.mock);
    global.fetch = originalFetch;
};
