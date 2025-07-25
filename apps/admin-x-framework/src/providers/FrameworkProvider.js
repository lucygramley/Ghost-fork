import { jsx as _jsx } from "react/jsx-runtime";
import { ErrorBoundary as SentryErrorBoundary } from '@sentry/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import queryClient from '../utils/queryClient';
const FrameworkContext = createContext({
    ghostVersion: '',
    externalNavigate: () => { },
    unsplashConfig: {
        Authorization: '',
        'Accept-Version': '',
        'Content-Type': '',
        'App-Pragma': '',
        'X-Unsplash-Cache': true
    },
    sentryDSN: null,
    onUpdate: () => { },
    onInvalidate: () => { },
    onDelete: () => { }
});
export function FrameworkProvider({ children, queryClientOptions, ...props }) {
    const client = useMemo(() => {
        if (!queryClientOptions) {
            return queryClient;
        }
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: queryClientOptions.refetchOnWindowFocus ?? false,
                    staleTime: queryClientOptions.staleTime ?? 5 * (60 * 1000), // 5 mins
                    refetchOnMount: queryClientOptions.refetchOnMount ?? false,
                    cacheTime: 10 * (60 * 1000), // 10 mins
                    // We have custom retry logic for specific errors in fetchApi()
                    retry: false,
                    networkMode: 'always'
                }
            }
        });
    }, [queryClientOptions]);
    return (_jsx(SentryErrorBoundary, { children: _jsx(QueryClientProvider, { client: client, children: _jsx(FrameworkContext.Provider, { value: props, children: children }) }) }));
}
export const useFramework = () => useContext(FrameworkContext);
