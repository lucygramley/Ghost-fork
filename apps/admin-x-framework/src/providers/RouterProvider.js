import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useMemo, useRef, useEffect, createContext, useContext } from 'react';
import { createHashRouter, RouterProvider as ReactRouterProvider, useNavigate as useReactRouterNavigate, useLocation, useParams, Navigate as ReactRouterNavigate } from 'react-router';
import { useFramework } from './FrameworkProvider';
import { NavigationStackProvider } from './NavigationStackProvider';
import { ErrorPage } from '@tryghost/shade';
// Store scroll positions globally
const scrollPositions = new Map();
const ScrollRestorationContext = createContext({
    saveScrollPosition: () => { },
    getScrollPosition: () => undefined,
    resetScrollPosition: () => { }
});
export function useScrollRestoration() {
    return useContext(ScrollRestorationContext);
}
export function resetScrollPosition(location) {
    scrollPositions.delete(location);
}
export function ScrollRestoration({ containerRef }) {
    const location = useLocation();
    const previousPathRef = useRef(null);
    const lastScrollPositionRef = useRef(null);
    // Save scroll position when user scrolls
    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }
        const handleScroll = () => {
            const currentPosition = container.scrollTop;
            scrollPositions.set(location.pathname, currentPosition);
            lastScrollPositionRef.current = currentPosition;
        };
        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [location.pathname, containerRef]);
    // Restore scroll position when pathname changes
    useEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }
        const savedPosition = scrollPositions.get(location.pathname);
        if (savedPosition !== undefined && previousPathRef.current !== location.pathname) {
            // Only restore if the saved position is significantly different
            // This helps prevent small scroll adjustments
            if (Math.abs(savedPosition - container.scrollTop) > 5) {
                container.scrollTop = savedPosition;
            }
        }
    }, [location.pathname, containerRef]);
    // Update previous path
    useEffect(() => {
        previousPathRef.current = location.pathname;
    }, [location.pathname]);
    return null;
}
export function RouterProvider({ routes, prefix, errorElement, children }) {
    // Memoize the router to avoid re-creating it on every render
    const router = useMemo(() => {
        // Ensure prefix has a leading slash and no double+ or trailing slashes
        const normalizedPrefix = `/${prefix?.replace(/\/+/g, '/').replace(/^\/|\/$/g, '')}`;
        // Create a root route that wraps all routes with NavigationStackProvider
        // and any additional children (providers) so they have access to routing
        const rootRoute = {
            element: (_jsx(NavigationStackProvider, { children: children })),
            children: routes.map(route => ({
                ...route,
                errorElement: route.errorElement || errorElement || _jsx(ErrorPage, {})
            }))
        };
        return createHashRouter([rootRoute], {
            basename: normalizedPrefix
        });
    }, [routes, prefix, errorElement, children]);
    return (_jsx(ReactRouterProvider, { router: router }));
}
export function useNavigate() {
    const navigate = useReactRouterNavigate();
    const { externalNavigate } = useFramework();
    return useCallback((to, options) => {
        if (typeof to === 'number') {
            navigate(to);
            return;
        }
        if (options?.crossApp) {
            externalNavigate({ route: to, isExternal: true });
            return;
        }
        navigate(to, options);
    }, [navigate, externalNavigate]);
}
export function useBaseRoute() {
    const location = useLocation();
    return location.pathname.split('/')[1];
}
export function useRouteHasParams() {
    const params = useParams();
    return params && Object.keys(params).length > 0;
}
export function Navigate({ to, replace, state, crossApp }) {
    const { externalNavigate } = useFramework();
    if (crossApp) {
        externalNavigate({ route: to, isExternal: true });
        return null;
    }
    return _jsx(ReactRouterNavigate, { replace: replace, state: state, to: to });
}
