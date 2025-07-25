import { createMutation, createQuery } from '../utils/api/hooks';
// Requests
const dataType = 'SettingsResponseType';
export const useBrowseSettings = createQuery({
    dataType,
    path: '/settings/',
    defaultSearchParams: {
        group: 'site,theme,private,members,portal,newsletter,email,labs,slack,unsplash,views,firstpromoter,editor,comments,analytics,announcement,pintura,donations,security,social_web,explore'
    }
});
export const useEditSettings = createMutation({
    method: 'PUT',
    path: () => '/settings/',
    body: settings => ({ settings: settings.map(({ key, value }) => ({ key, value })) }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: newData => ({
            ...newData,
            settings: newData.settings
        })
    }
});
export const useDeleteStripeSettings = createMutation({
    method: 'DELETE',
    path: () => '/settings/stripe/connect/',
    invalidateQueries: { dataType }
});
export const useTestSlack = createMutation({
    method: 'POST',
    path: () => '/slack/test/'
});
// Helpers
export function humanizeSettingKey(key) {
    const allCaps = ['API', 'CTA', 'RSS'];
    return key
        .replace(/^[a-z]/, char => char.toUpperCase())
        .replace(/_/g, ' ')
        .replace(new RegExp(`\\b(${allCaps.join('|')})\\b`, 'ig'), match => match.toUpperCase());
}
export function getSettingValues(settings, keys) {
    return keys.map(key => settings?.find(setting => setting.key === key)?.value);
}
export function getSettingValue(settings, key) {
    if (!settings) {
        return null;
    }
    const setting = settings.find(d => d.key === key);
    return setting?.value || null;
}
export function isSettingReadOnly(settings, key) {
    if (!settings) {
        return undefined;
    }
    const setting = settings.find(d => d.key === key);
    return setting?.is_read_only || false;
}
export function checkStripeEnabled(settings, config) {
    const hasSetting = (key) => settings.some(setting => setting.key === key && setting.value);
    const hasDirectKeys = hasSetting('stripe_secret_key') && hasSetting('stripe_publishable_key');
    const hasConnectKeys = hasSetting('stripe_connect_secret_key') && hasSetting('stripe_connect_publishable_key');
    if (config.stripeDirect) {
        return hasDirectKeys;
    }
    return hasConnectKeys || hasDirectKeys;
}
