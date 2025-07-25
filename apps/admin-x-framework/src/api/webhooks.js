import { createMutation } from '../utils/api/hooks';
import { integrationsDataType } from './integrations';
// Requests
export const useCreateWebhook = createMutation({
    method: 'POST',
    path: () => '/webhooks/',
    body: webhook => ({ webhooks: [webhook] }),
    updateQueries: {
        dataType: integrationsDataType,
        emberUpdateType: 'createOrUpdate',
        update: (newData, currentData) => (currentData && {
            ...currentData,
            integrations: currentData.integrations.map((integration) => {
                const webhook = newData.webhooks[0];
                if (webhook.integration_id === integration.id) {
                    return { ...integration, webhooks: [...(integration.webhooks || []), webhook] };
                }
                return integration;
            })
        })
    }
});
export const useEditWebhook = createMutation({
    method: 'PUT',
    path: webhook => `/webhooks/${webhook.id}/`,
    body: webhook => ({ webhooks: [webhook] }),
    updateQueries: {
        dataType: integrationsDataType,
        emberUpdateType: 'createOrUpdate',
        update: (newData, currentData) => (currentData && {
            ...currentData,
            integrations: currentData.integrations.map(integration => ({
                ...integration,
                webhooks: integration.webhooks?.map(webhook => (webhook.id === newData.webhooks[0].id ? newData.webhooks[0] : webhook))
            }))
        })
    }
});
export const useDeleteWebhook = createMutation({
    method: 'DELETE',
    path: id => `/webhooks/${id}/`,
    updateQueries: {
        dataType: integrationsDataType,
        emberUpdateType: 'createOrUpdate',
        update: (_, currentData, id) => ({
            ...currentData,
            integrations: currentData.integrations.map(integration => ({
                ...integration,
                webhooks: integration.webhooks?.filter(webhook => webhook.id !== id)
            }))
        })
    }
});
