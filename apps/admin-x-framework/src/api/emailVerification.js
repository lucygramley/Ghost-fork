import { createMutation } from '../utils/api/hooks';
const dataType = 'SettingsResponseType';
export const verifyEmailToken = createMutation({
    path: () => '/settings/verifications',
    method: 'PUT',
    body: ({ token }) => ({ token }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: newData => ({
            ...newData,
            settings: newData.settings
        })
    }
});
