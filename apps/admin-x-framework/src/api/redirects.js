import { createMutation } from '../utils/api/hooks';
import { downloadFromEndpoint } from '../utils/helpers';
export const useUploadRedirects = createMutation({
    method: 'POST',
    path: () => '/redirects/upload/',
    body: (file) => {
        const formData = new FormData();
        formData.append('redirects', file);
        return formData;
    }
});
export const downloadRedirects = () => downloadFromEndpoint('/redirects/download/');
