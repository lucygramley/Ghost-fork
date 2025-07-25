import { jsx as _jsx } from "react/jsx-runtime";
import Button from './Button';
import Tooltip from './Tooltip';
import clsx from 'clsx';
const ButtonGroup = ({ size = 'md', buttons, link, linkWithPadding, clearBg = true, outlineOnMobile, className, activeKey }) => {
    let groupColorClasses = clsx('flex items-center justify-start rounded', link ? 'gap-4' : 'gap-2', !link && !clearBg && '!gap-0 rounded-lg bg-grey-100 dark:bg-grey-900', className);
    if (link && !clearBg) {
        groupColorClasses = clsx('transition-all hover:bg-grey-200 dark:hover:bg-grey-900', size === 'sm' ? 'h-7 px-3' : 'h-[34px] px-4', outlineOnMobile && 'border border-grey-300 hover:border-transparent md:border-transparent', groupColorClasses);
    }
    return (_jsx("div", { className: groupColorClasses, children: buttons.map(({ key, ...props }) => {
            const buttonProps = { ...props };
            if (!link && !clearBg) {
                buttonProps.className = clsx(props.className, 'w-8 rounded-lg border !px-0');
                if (key === activeKey) {
                    buttonProps.color = 'white';
                    buttonProps.className = clsx(buttonProps.className, 'border-grey-300 shadow-xs dark:border-grey-800');
                }
                else {
                    buttonProps.className = clsx(buttonProps.className, 'border-transparent');
                }
            }
            return ((props.tooltip ?
                _jsx(Tooltip, { content: props.tooltip, children: _jsx(Button, { link: link, linkWithPadding: linkWithPadding, size: size, ...buttonProps }, `btn-${key}`) }, key) :
                _jsx(Button, { link: link, linkWithPadding: linkWithPadding, size: size, ...buttonProps }, key)));
        }) }));
};
export default ButtonGroup;
