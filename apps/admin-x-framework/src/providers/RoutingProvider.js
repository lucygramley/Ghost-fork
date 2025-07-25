import { jsx as _jsx } from "react/jsx-runtime";
import NiceModal from '@ebay/nice-modal-react';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useFramework } from './FrameworkProvider';
export const RouteContext = createContext({
    route: '',
    updateRoute: () => { },
    loadingModal: false,
    eventTarget: new EventTarget()
});
function getHashPath(basePath, urlPath) {
    if (!urlPath) {
        return null;
    }
    const regex = new RegExp(`/${basePath}/(.*)`);
    const match = urlPath?.match(regex);
    if (match) {
        const afterSettingsX = match[1];
        return afterSettingsX;
    }
    return null;
}
const handleNavigation = (basePath, currentRoute, loadModals, modalPaths) => {
    // Get the hash from the URL
    let hash = window.location.hash;
    hash = hash.substring(1);
    // Create a URL to easily extract the path without query parameters
    const domain = `${window.location.protocol}//${window.location.hostname}`;
    const url = new URL(hash, domain);
    const pathName = getHashPath(basePath, url.pathname);
    // Return early if we don't have modal configuration
    if (!modalPaths || !loadModals) {
        return { pathName: pathName || '' };
    }
    const searchParams = url.searchParams;
    if (pathName && modalPaths && loadModals) {
        const [, currentModalName] = Object.entries(modalPaths).find(([modalPath]) => matchRoute(currentRoute || '', modalPath)) || [];
        const [path, modalName] = Object.entries(modalPaths).find(([modalPath]) => matchRoute(pathName, modalPath)) || [];
        return {
            pathName,
            changingModal: modalName && modalName !== currentModalName,
            modal: (path && modalName) ? // we should consider adding '&& modalName !== currentModalName' here, but this breaks tests
                loadModals().then(({ default: modals }) => {
                    NiceModal.show(modals[modalName], { pathName, params: matchRoute(pathName, path), searchParams });
                }) :
                undefined
        };
    }
    return { pathName: '' };
};
const matchRoute = (pathname, routeDefinition) => {
    const regex = new RegExp('^' + routeDefinition.replace(/:(\w+)/g, '(?<$1>[^/]+)') + '/?$');
    const match = pathname.match(regex);
    if (match) {
        return match.groups || {};
    }
};
export const RoutingProvider = ({ basePath, modals, children }) => {
    const { externalNavigate } = useFramework();
    const [route, setRoute] = useState(undefined);
    const [loadingModal, setLoadingModal] = useState(false);
    const [eventTarget] = useState(new EventTarget());
    const updateRoute = useCallback((to) => {
        const options = typeof to === 'string' ? { route: to } : to;
        if (options.isExternal) {
            externalNavigate(options);
            return;
        }
        const newPath = options.route.replace(/^\//, '');
        if (newPath === route) {
            // No change
        }
        else if (newPath) {
            window.location.hash = `/${basePath}/${newPath}`;
        }
        else {
            window.location.hash = `/${basePath}`;
        }
        eventTarget.dispatchEvent(new CustomEvent('routeChange', { detail: { newPath, oldPath: route } }));
    }, [basePath, eventTarget, externalNavigate, route]);
    useEffect(() => {
        // Preload all the modals after initial render to avoid a delay when opening them
        setTimeout(() => {
            modals?.load();
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        const handleHashChange = () => {
            setRoute((currentRoute) => {
                const { pathName, modal, changingModal } = handleNavigation(basePath, currentRoute, modals?.load, modals?.paths);
                if (modal && changingModal) {
                    setLoadingModal(true);
                    modal.then(() => setLoadingModal(false));
                }
                return pathName;
            });
        };
        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    if (route === undefined) {
        return null;
    }
    return (_jsx(RouteContext.Provider, { value: {
            route,
            updateRoute,
            loadingModal,
            eventTarget
        }, children: children }));
};
export function useRouting() {
    return useContext(RouteContext);
}
export function useRouteChangeCallback(callback, deps) {
    const { eventTarget } = useRouting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const stableCallback = useCallback(callback, deps);
    useEffect(() => {
        const listener = (e) => {
            const event = e;
            stableCallback(event.detail.newPath, event.detail.oldPath);
        };
        eventTarget.addEventListener('routeChange', listener);
        return () => eventTarget.removeEventListener('routeChange', listener);
    }, [eventTarget, stableCallback]);
}
