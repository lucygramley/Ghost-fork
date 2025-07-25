import { createMutation } from '../utils/api/hooks';
import { integrationsDataType } from './integrations';
// Requests
export const useRefreshAPIKey = createMutation({
    method: 'POST',
    path: ({ integrationId, apiKeyId }) => `/integrations/${integrationId}/api_key/${apiKeyId}/refresh/`,
    body: ({ integrationId }) => ({ integrations: [{ id: integrationId }] }),
    updateQueries: {
        emberUpdateType: 'createOrUpdate',
        dataType: integrationsDataType,
        update: (newData, currentData) => (currentData && {
            ...currentData,
            integrations: currentData.integrations.map((integration) => {
                const newIntegration = newData.integrations.find(({ id }) => id === integration.id);
                return newIntegration || integration;
            })
        })
    }
});
