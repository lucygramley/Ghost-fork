import { createMutation, createQuery } from '../utils/api/hooks';
// Requests
const dataType = 'IntegrationsResponseType';
export const integrationsDataType = dataType;
export const useBrowseIntegrations = createQuery({
    dataType,
    path: '/integrations/',
    defaultSearchParams: { include: 'api_keys,webhooks', limit: '50' }
});
export const useCreateIntegration = createMutation({
    method: 'POST',
    path: () => '/integrations/',
    body: integration => ({ integrations: [integration] }),
    searchParams: () => ({ include: 'api_keys,webhooks' }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: (newData, currentData) => (currentData && {
            ...currentData,
            integrations: currentData.integrations.concat(newData.integrations)
        })
    }
});
export const useEditIntegration = createMutation({
    method: 'PUT',
    path: integration => `/integrations/${integration.id}/`,
    body: integration => ({ integrations: [integration] }),
    searchParams: () => ({ include: 'api_keys,webhooks' }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: (newData, currentData) => (currentData && {
            ...currentData,
            integrations: currentData.integrations.map((integration) => {
                const newIntegration = newData.integrations.find(({ id }) => id === integration.id);
                return newIntegration || integration;
            })
        })
    }
});
export const useDeleteIntegration = createMutation({
    method: 'DELETE',
    path: id => `/integrations/${id}/`,
    updateQueries: {
        dataType,
        emberUpdateType: 'delete',
        update: (_, currentData, id) => ({
            ...currentData,
            integrations: currentData.integrations.filter(user => user.id !== id)
        })
    }
});
