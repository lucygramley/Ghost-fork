import { createMutation } from '../utils/api/hooks';
import { downloadFromEndpoint } from '../utils/helpers';
export const useImportContent = createMutation({
    method: 'POST',
    path: () => '/db/',
    body: (file) => {
        const formData = new FormData();
        formData.append('importfile', file);
        return formData;
    }
});
export const useDeleteAllContent = createMutation({
    method: 'DELETE',
    path: () => '/db/'
});
export const downloadAllContent = () => downloadFromEndpoint('/db/');
