import { createQuery } from '../utils/api/hooks';
const dataType = 'TinybirdTokenResponseType';
// Built-in query options for optimal token caching
const TINYBIRD_QUERY_OPTIONS = {
    refetchInterval: 120 * 60 * 1000, // 2 hours — tokens expire after 3 hours
    refetchIntervalInBackground: true,
    staleTime: 110 * 60 * 1000 // 110 minutes - shorter than refetch interval so automatic refresh works
};
const baseTinybirdTokenQuery = createQuery({
    dataType,
    path: '/tinybird/token/'
});
export const getTinybirdToken = (options = {}) => {
    return baseTinybirdTokenQuery({
        ...TINYBIRD_QUERY_OPTIONS,
        ...options
    });
};
