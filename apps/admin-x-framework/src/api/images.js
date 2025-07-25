import { createMutation } from '../utils/api/hooks';
export const useUploadImage = createMutation({
    method: 'POST',
    path: () => '/images/upload/',
    body: ({ file }) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('purpose', 'image');
        return formData;
    }
});
export const getImageUrl = (response) => response.images[0].url;
