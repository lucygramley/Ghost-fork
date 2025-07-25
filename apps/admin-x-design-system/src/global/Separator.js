import { jsx as _jsx } from "react/jsx-runtime";
import * as SeparatorPrimitive from '@radix-ui/react-separator';
const Separator = ({ className }) => {
    if (!className) {
        className = 'border-grey-200 dark:border-grey-800';
    }
    return (_jsx(SeparatorPrimitive.Root, { asChild: true, decorative: true, children: _jsx("hr", { className: className }) }));
};
export default Separator;
