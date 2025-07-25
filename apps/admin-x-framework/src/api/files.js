import { createMutation } from '../utils/api/hooks';
export const useUploadFile = createMutation({
    method: 'POST',
    path: () => '/files/upload/',
    body: ({ file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return formData;
    }
});
export const getFileUrl = (response) => response.files[0].url;
