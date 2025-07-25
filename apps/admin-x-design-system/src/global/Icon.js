import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const icons = import.meta.glob('../assets/icons/*.svg', { eager: true });
/**
 * Icon guidelines:
 * - all icons must be SVG's
 * - all icons must have all it's children color value set `currentColor`
 * - all strokes must be paths and _NOT_ outlined objects. Stroke width should be set to 1.5px
 */
const Icon = ({ name, size = 'md', colorClass = '', className = '' }) => {
    const { ReactComponent: SvgComponent } = icons[`../assets/icons/${name}.svg`];
    let classes = '';
    let styles = {};
    if (typeof size === 'number') {
        styles = {
            width: `${size}px`,
            height: `${size}px`
        };
    }
    if (!classes) {
        switch (size) {
            case 'custom':
                break;
            case '2xs':
                classes = 'size-2';
                break;
            case 'xs':
                classes = 'size-3';
                break;
            case 'sm':
                classes = 'size-4';
                break;
            case 'lg':
                classes = 'size-8';
                break;
            case 'xl':
                classes = 'size-10';
                break;
            default:
                classes = 'size-5';
                break;
        }
    }
    classes = clsx(classes, colorClass);
    if (SvgComponent) {
        return (_jsx(SvgComponent, { className: `pointer-events-none ${classes} ${className}`, style: styles }));
    }
    return null;
};
export default Icon;
