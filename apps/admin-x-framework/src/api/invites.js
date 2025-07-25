import { createMutation, createQuery } from '../utils/api/hooks';
const dataType = 'InvitesResponseType';
export const useBrowseInvites = createQuery({
    dataType,
    path: '/invites/',
    permissions: ['Owner', 'Administrator']
});
export const useAddInvite = createMutation({
    method: 'POST',
    path: () => '/invites/',
    body: ({ email, roleId }) => ({
        invites: [{
                email: email,
                role_id: roleId,
                expires: null,
                status: null,
                token: null
            }]
    }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        // Assume that all invite queries should include this new one
        update: (newData, currentData) => (currentData && {
            ...currentData,
            invites: [
                ...(currentData.invites),
                ...newData.invites
            ]
        })
    }
});
export const useDeleteInvite = createMutation({
    path: id => `/invites/${id}/`,
    method: 'DELETE',
    updateQueries: {
        dataType,
        emberUpdateType: 'delete',
        update: (_, currentData, id) => ({
            ...currentData,
            invites: currentData.invites.filter(invite => invite.id !== id)
        })
    }
});
