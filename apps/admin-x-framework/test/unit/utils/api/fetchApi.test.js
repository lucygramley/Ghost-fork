import { jsx as _jsx } from "react/jsx-runtime";
import { renderHook } from '@testing-library/react';
import { FrameworkProvider } from '../../../../src/providers/FrameworkProvider';
import { useFetchApi } from '../../../../src/utils/api/fetchApi';
import { withMockFetch } from '../../../utils/mockFetch';
const wrapper = ({ children }) => (_jsx(FrameworkProvider, { externalNavigate: () => { }, ghostVersion: '5.x', sentryDSN: '', unsplashConfig: {
        Authorization: '',
        'Accept-Version': '',
        'Content-Type': '',
        'App-Pragma': '',
        'X-Unsplash-Cache': true
    }, onDelete: () => { }, onInvalidate: () => { }, onUpdate: () => { }, children: children }));
describe('useFetchApi', () => {
    it('makes an API request', async () => {
        await withMockFetch({
            json: { test: 1 }
        }, async (mock) => {
            const { result } = renderHook(() => useFetchApi(), { wrapper });
            const data = await result.current('http://localhost:3000/ghost/api/admin/test/', {
                method: 'POST',
                body: 'test',
                retry: false
            });
            expect(data).toEqual({ test: 1 });
            expect(mock.calls.length).toBe(1);
            expect(mock.calls[0]).toEqual(['http://localhost:3000/ghost/api/admin/test/', {
                    body: 'test',
                    credentials: 'include',
                    headers: {
                        'app-pragma': 'no-cache',
                        'x-ghost-version': '5.x',
                        'content-type': 'application/json'
                    },
                    method: 'POST',
                    mode: 'cors',
                    signal: expect.any(AbortSignal)
                }]);
        });
    });
});
