import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import NiceModal, { useModal } from '@ebay/nice-modal-react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import useGlobalDirtyState from '../../hooks/useGlobalDirtyState';
import { confirmIfDirty } from '../../utils/modals';
import Breadcrumbs from '../Breadcrumbs';
import ButtonGroup from '../ButtonGroup';
import Heading from '../Heading';
import Icon from '../Icon';
import TabView from '../TabView';
import DesktopChrome from '../chrome/DesktopChrome';
import MobileChrome from '../chrome/MobileChrome';
import Select from '../form/Select';
import Modal from './Modal';
export const PreviewModalContent = ({ testId, title, titleHeadingLevel = 4, size = 'full', width, height, sidebar = '', preview, dirty = false, cancelLabel = 'Cancel', okLabel = 'OK', okColor = 'black', previewToolbar = true, leftToolbar = true, rightToolbar = true, deviceSelector = true, siteLink, previewToolbarURLs, previewBgColor = 'grey', selectedURL, previewToolbarTabs, previewToolbarBreadcrumbs, buttonsDisabled, sidebarButtons, sidebarHeader, sidebarPadding = true, sidebarContentClasses, enableCMDS = true, backDropClick, onCancel, onOk, afterClose, onSelectURL, onSelectDesktopView, onSelectMobileView, onBreadcrumbsBack }) => {
    const modal = useModal();
    const { setGlobalDirtyState } = useGlobalDirtyState();
    useEffect(() => {
        setGlobalDirtyState(dirty);
    }, [dirty, setGlobalDirtyState]);
    useEffect(() => {
        if (onOk) {
            const handleCMDS = (e) => {
                if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                    e.preventDefault();
                    onOk();
                }
            };
            if (enableCMDS) {
                window.addEventListener('keydown', handleCMDS);
                return () => {
                    window.removeEventListener('keydown', handleCMDS);
                };
            }
        }
    });
    const [view, setView] = useState('desktop');
    if (view === 'mobile' && deviceSelector) {
        preview = (_jsx(MobileChrome, { "data-testid": "preview-mobile", children: preview }));
    }
    else if (view === 'desktop' && deviceSelector) {
        preview = (_jsx(DesktopChrome, { "data-testid": "preview-desktop", children: preview }));
    }
    if (previewToolbar) {
        let toolbarLeft = (_jsx(_Fragment, {}));
        if (previewToolbarURLs) {
            toolbarLeft = (_jsx(Select, { options: previewToolbarURLs, selectedOption: previewToolbarURLs.find(option => option.value === selectedURL), onSelect: option => option && onSelectURL?.(option.value) }));
        }
        else if (previewToolbarTabs) {
            toolbarLeft = _jsx(TabView, { border: false, selectedTab: selectedURL, tabs: previewToolbarTabs, width: 'wide', onTabChange: onSelectURL });
        }
        else if (previewToolbarBreadcrumbs) {
            toolbarLeft = _jsx(Breadcrumbs, { activeItemClassName: 'hidden md:!block md:!visible', containerClassName: 'whitespace-nowrap', itemClassName: 'hidden md:!block md:!visible', items: previewToolbarBreadcrumbs, separatorClassName: 'hidden md:!block md:!visible', backIcon: true, onBack: onBreadcrumbsBack });
        }
        const selectedIconColorClass = 'text-black dark:text-green';
        const unSelectedIconColorClass = 'text-grey-500 dark:text-grey-600';
        const rightButtons = [
            {
                icon: 'laptop',
                label: 'Desktop',
                hideLabel: true,
                link: true,
                size: 'sm',
                iconColorClass: (view === 'desktop' ? selectedIconColorClass : unSelectedIconColorClass),
                onClick: onSelectDesktopView || (() => {
                    setView('desktop');
                })
            },
            {
                icon: 'mobile',
                label: 'Mobile',
                hideLabel: true,
                link: true,
                size: 'sm',
                iconColorClass: (view === 'mobile' ? selectedIconColorClass : unSelectedIconColorClass),
                onClick: onSelectMobileView || (() => {
                    setView('mobile');
                })
            }
        ];
        const toolbarRight = deviceSelector && (_jsx(ButtonGroup, { buttons: rightButtons }));
        let previewBgClass = '';
        if (previewBgColor === 'grey') {
            previewBgClass = 'bg-grey-50 dark:bg-black';
        }
        else if (previewBgColor === 'greygradient') {
            previewBgClass = 'bg-gradient-to-tr from-white to-[#f9f9fa] dark:from-grey-950 dark:to-black';
        }
        const containerClasses = clsx('min-w-100 absolute inset-y-0 left-0 right-[400px] flex w-full grow flex-col overflow-y-auto', previewBgClass);
        let viewSiteButton;
        if (siteLink) {
            viewSiteButton = (_jsx("div", { className: 'ml-3 border-l border-grey-400 dark:border-grey-800', children: _jsxs("a", { className: 'ml-3 flex items-center gap-1 text-sm', href: siteLink, rel: "noopener noreferrer", target: "_blank", children: ["View site ", _jsx(Icon, { name: 'arrow-top-right', size: 'xs' })] }) }));
        }
        preview = (_jsxs("div", { className: containerClasses, children: [previewToolbar && _jsxs("header", { className: "relative flex h-[80px] shrink-0 items-center justify-center px-8 py-5", "data-testid": "design-toolbar", children: [leftToolbar && _jsx("div", { className: 'absolute left-8 flex h-full items-center', children: toolbarLeft }), rightToolbar && _jsxs("div", { className: 'absolute right-8 flex h-full items-center', children: [toolbarRight, viewSiteButton] })] }), _jsx("div", { className: 'flex grow items-center justify-center text-sm text-grey-400', children: preview })] }));
    }
    const buttons = [];
    if (!sidebarButtons) {
        buttons.push({
            key: 'cancel-modal',
            label: cancelLabel,
            onClick: (onCancel ? onCancel : () => {
                confirmIfDirty(dirty, () => {
                    modal.remove();
                    afterClose?.();
                });
            }),
            disabled: buttonsDisabled
        });
        buttons.push({
            key: 'ok-modal',
            label: okLabel,
            color: okColor,
            onClick: onOk,
            disabled: buttonsDisabled
        });
    }
    return (_jsx(Modal, { afterClose: afterClose, animate: false, backDropClick: backDropClick, dirty: dirty, footer: false, height: height, padding: false, size: size, testId: testId, title: '', width: width, hideXOnMobile: true, children: _jsxs("div", { className: 'flex h-full grow', children: [_jsx("div", { className: `relative hidden grow flex-col [@media(min-width:801px)]:!visible [@media(min-width:801px)]:!flex ${previewBgColor === 'grey' ? 'bg-grey-50' : 'bg-white dark:bg-black'}`, children: preview }), sidebar &&
                    _jsxs("div", { className: 'relative flex h-full w-full flex-col border-l border-grey-100 dark:border-grey-900 [@media(min-width:801px)]:w-auto [@media(min-width:801px)]:basis-[400px]', children: [sidebarHeader ? sidebarHeader : (_jsxs("div", { className: 'flex max-h-[82px] items-center justify-between gap-3 px-7 py-6', children: [_jsx(Heading, { level: titleHeadingLevel, children: title }), sidebarButtons ? sidebarButtons : _jsx(ButtonGroup, { buttons: buttons })] })), _jsx("div", { className: `${!sidebarHeader ? 'absolute inset-x-0 bottom-0 top-[80px] grow' : ''} ${sidebarPadding && 'p-7 pt-0'} flex flex-col justify-between overflow-y-auto ${sidebarContentClasses && sidebarContentClasses}`, children: sidebar })] })] }) }));
};
export default NiceModal.create(PreviewModalContent);
