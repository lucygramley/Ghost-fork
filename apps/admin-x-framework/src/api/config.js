import { createQuery } from '../utils/api/hooks';
const dataType = 'ConfigResponseType';
export const configDataType = dataType;
export const useBrowseConfig = createQuery({
    dataType,
    path: '/config/'
});
// Helpers
export const isManagedEmail = (config) => {
    return !!config?.hostSettings?.managedEmail?.enabled;
};
export const hasSendingDomain = (config) => {
    const sendingDomain = config?.hostSettings?.managedEmail?.sendingDomain;
    return typeof sendingDomain === 'string' && sendingDomain.length > 0;
};
export const sendingDomain = (config) => {
    return config?.hostSettings?.managedEmail?.sendingDomain;
};
