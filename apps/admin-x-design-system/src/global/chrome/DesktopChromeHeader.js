import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const DesktopChromeHeader = ({ size = 'md', toolbarLeft = '', toolbarCenter = '', toolbarRight = '', toolbarClasses = '', ...props }) => {
    let containerSize;
    switch (size) {
        case 'sm':
            containerSize = 'h-[32px] p-2';
            break;
        case 'md':
            containerSize = 'h-[48px] px-3 py-5';
            break;
        case 'lg':
            containerSize = 'h-[74px] px-3 py-5';
            break;
        default:
            break;
    }
    const trafficLightSize = size === 'sm' ? 'w-[6px] h-[6px]' : 'w-[10px] h-[10px]';
    const trafficLightWidth = size === 'sm' ? 36 : 56;
    let trafficLightContainerStyle = size === 'sm' ? 'gap-[5px] ' : 'gap-2 ';
    trafficLightContainerStyle += `w-[${trafficLightWidth}px]`;
    const trafficLights = (_jsxs("div", { className: `absolute left-5 flex h-full items-center ${trafficLightContainerStyle}`, children: [_jsx("div", { className: `rounded-full bg-grey-500 ${trafficLightSize}` }), _jsx("div", { className: `rounded-full bg-grey-500 ${trafficLightSize}` }), _jsx("div", { className: `rounded-full bg-grey-500 ${trafficLightSize}` })] }));
    return (_jsxs("header", { className: `relative flex shrink-0 items-center justify-center ${containerSize} ${toolbarClasses}`, ...props, children: [toolbarLeft ?
                _jsx("div", { className: 'absolute left-5 flex h-full items-center', children: toolbarLeft })
                :
                    trafficLights, _jsx("div", { className: 'flex grow justify-center', children: (typeof toolbarCenter === 'string') ?
                    (_jsx("span", { className: 'text-sm font-bold', children: toolbarCenter }))
                    :
                        (_jsx(_Fragment, { children: toolbarCenter })) }), toolbarRight &&
                _jsx("div", { className: 'absolute right-5 flex h-full items-center', children: toolbarRight })] }));
};
export default DesktopChromeHeader;
