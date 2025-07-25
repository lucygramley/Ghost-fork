import React from 'react';
import { cva } from 'class-variance-authority';
import { cn, kebabToPascalCase } from '@/lib/utils';
const iconVariants = cva('', {
    variants: {
        size: {
            sm: 'size-3',
            md: 'size-4',
            lg: 'size-6',
            xl: 'size-8'
        }
    },
    defaultVariants: {
        size: 'md'
    }
});
const iconModules = import.meta.glob('../../assets/icons/*.svg', { eager: true });
const Icon = Object.entries(iconModules).reduce((acc, [path, module]) => {
    const kebabName = path.match(/[^/]+(?=\.svg$)/)?.[0] ?? '';
    const iconName = kebabToPascalCase(kebabName);
    const IconComponent = (props) => {
        const { size, className, ...rest } = props;
        const iconClassName = cn(iconVariants({ size, className }));
        return React.createElement(module.ReactComponent, {
            ...rest,
            className: iconClassName
        });
    };
    IconComponent.displayName = `Icon.${iconName}`;
    acc[iconName] = IconComponent;
    return acc;
}, {});
export const IconComponents = Icon;
export default Icon;
