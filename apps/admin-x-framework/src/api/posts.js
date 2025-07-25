import { createQuery, createQueryWithId, createMutation } from '../utils/api/hooks';
const dataType = 'PostsResponseType';
export const useBrowsePosts = createQuery({
    dataType,
    path: '/posts/'
});
export const getPost = createQueryWithId({
    dataType,
    path: id => `/posts/${id}/`
});
// This endpoints returns a csv file
export const usePostsExports = createQuery({
    dataType,
    path: '/posts/export/'
});
export const useDeletePost = createMutation({
    method: 'DELETE',
    path: id => `/posts/${id}/`
});
