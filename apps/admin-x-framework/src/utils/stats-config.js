import { getTinybirdToken } from '../api/tinybird';
export const getStatEndpointUrl = (config, endpoint, params = '') => {
    if (!config) {
        return '';
    }
    return config.local?.enabled ?
        `${config.local?.endpoint || ''}/v0/pipes/${endpoint}.json?${params}` :
        `${config.endpoint || ''}/v0/pipes/${endpoint}.json?${params}`;
};
export const getToken = () => {
    // Get token from getTinybirdToken API - options are now built-in
    const tinybirdQuery = getTinybirdToken();
    const apiToken = tinybirdQuery.data?.tinybird?.token;
    return (apiToken && typeof apiToken === 'string') ? apiToken : undefined;
};
