import { jsx as _jsx } from "react/jsx-runtime";
import Button from '../Button';
const PageMenu = () => {
    return (_jsx(Button, { icon: 'hamburger', iconColorClass: 'text-black dark:text-white', size: 'sm', link: true, onClick: () => {
            alert('Clicked on hamburger');
        } }));
};
export default PageMenu;
