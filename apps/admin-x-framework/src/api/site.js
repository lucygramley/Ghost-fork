import { createQuery } from '../utils/api/hooks';
import { hasSendingDomain, isManagedEmail, sendingDomain } from './config';
// Requests
const dataType = 'SiteResponseType';
export const useBrowseSite = createQuery({
    dataType,
    path: '/site/'
});
// Helpers
export function getHomepageUrl(siteData) {
    const url = new URL(siteData.url);
    const subdir = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    return `${url.origin}${subdir}`;
}
export function getEmailDomain(siteData, config) {
    if (isManagedEmail(config) && hasSendingDomain(config)) {
        return sendingDomain(config) || '';
    }
    const domain = new URL(siteData.url).hostname || '';
    if (domain.startsWith('www.')) {
        return domain.replace(/^(www)\.(?=[^/]*\..{2,5})/, '');
    }
    return domain;
}
export function fullEmailAddress(value, siteData, config) {
    const emailDomain = getEmailDomain(siteData, config);
    return value === 'noreply' ? `noreply@${emailDomain}` : value;
}
