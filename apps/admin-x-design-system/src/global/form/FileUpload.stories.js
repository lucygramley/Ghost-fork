import { jsx as _jsx } from "react/jsx-runtime";
import FileUpload from './FileUpload';
const meta = {
    title: 'Global / Form / File Upload',
    component: FileUpload,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        id: 'test-file',
        onUpload: (file) => {
            alert(`You're uploading: ${file.name}`);
        },
        children: 'Click here to upload'
    }
};
export const Custom = {
    args: {
        id: 'test-file',
        onUpload: (file) => {
            alert(`You're uploading: ${file.name}`);
        },
        children: (_jsx("div", { className: 'max-w-xl cursor-pointer bg-grey-100 px-10 py-5 text-center', children: "Click here to upload" }))
    }
};
