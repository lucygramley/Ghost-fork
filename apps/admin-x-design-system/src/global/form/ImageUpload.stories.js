import { jsx as _jsx } from "react/jsx-runtime";
import ImageUpload from './ImageUpload';
const meta = {
    title: 'Global / Form / Image upload',
    component: ImageUpload,
    tags: ['autodocs'],
    decorators: [(_story) => (_jsx("div", { style: { maxWidth: '600px' }, children: _story() }))]
};
export default meta;
export const Default = {
    args: {
        id: 'image-upload-test',
        children: 'Upload image',
        onUpload: (file) => {
            alert(`You're uploading: ${file.name}`);
        }
    }
};
export const Resized = {
    args: {
        id: 'image-upload-test',
        children: 'Upload image',
        width: '480px',
        height: '320px',
        onUpload: (file) => {
            alert(`You're uploading: ${file.name}`);
        }
    }
};
export const ImageUploaded = {
    args: {
        id: 'image-upload-test',
        children: 'Upload image',
        width: '480px',
        height: '320px',
        imageURL: 'https://images.unsplash.com/photo-1685374156924-5230519f4ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8YWxsfDI1fHx8fHx8Mnx8MTY4NTYzNzE3M3w&ixlib=rb-4.0.3&q=80&w=2000',
        onUpload: (file) => {
            alert(`You're uploading: ${file.name}`);
        },
        onDelete: () => {
            alert('Delete image');
        }
    }
};
