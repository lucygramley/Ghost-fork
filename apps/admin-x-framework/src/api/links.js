import { createQuery, createMutation } from '../utils/api/hooks';
export const useTopLinks = createQuery({
    dataType: 'LinkResponseType',
    path: '/links/'
});
export const useBulkEditLinks = createMutation({
    method: 'PUT',
    path: () => '/links/bulk/',
    body: ({ editedUrl }) => ({
        bulk: {
            action: 'updateLink',
            meta: {
                link: {
                    to: editedUrl
                }
            }
        }
    }),
    searchParams: ({ originalUrl, postId }) => ({
        filter: `post_id:'${postId}'+to:'${originalUrl}'`
    })
});
