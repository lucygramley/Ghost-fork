import { createInfiniteQuery, createMutation, createQueryWithId } from '../utils/api/hooks';
import { deleteFromQueryCache, updateQueryCache } from '../utils/api/updateQueries';
import { usersDataType } from './currentUser';
// Requests
const dataType = usersDataType;
export const useBrowseUsers = createInfiniteQuery({
    dataType,
    path: '/users/',
    defaultSearchParams: { limit: '100', include: 'roles' },
    defaultNextPageParams: (lastPage, otherParams) => ({
        ...otherParams,
        page: (lastPage.meta?.pagination.next || 1).toString()
    }),
    returnData: (originalData) => {
        const { pages } = originalData;
        const users = pages.flatMap(page => page.users);
        const meta = pages[pages.length - 1].meta;
        return {
            users: users,
            meta,
            isEnd: meta ? meta.pagination.pages === meta.pagination.page : true
        };
    }
});
export const useGetUserBySlug = createQueryWithId({
    dataType,
    path: slug => `/users/slug/${slug}/`,
    defaultSearchParams: { include: 'roles' }
});
export const useEditUser = createMutation({
    method: 'PUT',
    path: user => `/users/${user.id}/`,
    body: user => ({ users: [user] }),
    searchParams: () => ({ include: 'roles' }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('users')
    }
});
export const useDeleteUser = createMutation({
    method: 'DELETE',
    path: id => `/users/${id}/`,
    updateQueries: {
        dataType,
        emberUpdateType: 'delete',
        update: deleteFromQueryCache('users')
    }
});
export const useUpdatePassword = createMutation({
    method: 'PUT',
    path: () => '/users/password/',
    body: ({ newPassword, confirmNewPassword, userId, oldPassword }) => ({
        password: [{
                user_id: userId,
                oldPassword: oldPassword || '',
                newPassword: newPassword,
                ne2Password: confirmNewPassword
            }]
    })
});
export const useMakeOwner = createMutation({
    method: 'PUT',
    path: () => '/users/owner/',
    body: userId => ({
        owner: [{
                id: userId
            }]
    }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('users')
    }
});
// Helpers
export function isOwnerUser(user) {
    return user.roles.some(role => role.name === 'Owner');
}
export function isAdminUser(user) {
    return user.roles.some(role => role.name === 'Administrator');
}
export function isEditorUser(user) {
    const isAnyEditor = user.roles.some(role => role.name === 'Editor')
        || user.roles.some(role => role.name === 'Super Editor');
    return isAnyEditor;
}
export function isAuthorUser(user) {
    return user.roles.some(role => role.name === 'Author');
}
export function isContributorUser(user) {
    return user.roles.some(role => role.name === 'Contributor');
}
export function isAuthorOrContributor(user) {
    return isAuthorUser(user) || isContributorUser(user);
}
export function canAccessSettings(user) {
    return isOwnerUser(user) || isAdminUser(user) || isEditorUser(user);
}
export function hasAdminAccess(user) {
    return isOwnerUser(user) || isAdminUser(user);
}
