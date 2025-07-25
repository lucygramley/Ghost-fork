import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
const SettingSectionHeader = ({ title, sticky = false }) => {
    const classNames = clsx('z-20 mb-px pb-10 text-3xl font-bold tracking-tight', (sticky ? 'sticky top-0 mt-[calc(-8vmin-4px)] bg-gradient-to-t from-transparent via-white via-20% to-white pt-[calc(8vmin-4px)] dark:bg-black' : 'mt-[-5px]'));
    return (_jsx("h2", { className: classNames, children: title }));
};
export default SettingSectionHeader;
