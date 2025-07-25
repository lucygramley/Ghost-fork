import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const Banner = ({ color = 'grey', children, className }) => {
    const bannerClasses = clsx('relative overflow-hidden rounded-sm p-2', color === 'grey' && 'text-black', color === 'blue' && 'text-blue', color === 'green' && 'text-green', color === 'yellow' && 'text-yellow-600', color === 'red' && 'text-red', `after:pointer-events-none after:absolute after:inset-0 after:block after:opacity-10 after:content-['']`, color === 'grey' && 'after:bg-grey-500', color === 'blue' && 'after:bg-blue', color === 'green' && 'after:bg-green', color === 'yellow' && 'after:bg-yellow', color === 'red' && 'after:bg-red', className);
    return (_jsx("div", { className: bannerClasses, children: children }));
};
export default Banner;
