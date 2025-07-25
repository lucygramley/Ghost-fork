import { createQuery } from '../utils/api/hooks';
const dataType = 'ReferrerHistoryResponseType';
export const useReferrerHistory = createQuery({
    dataType,
    path: '/stats/referrers/'
});
export const useTopSourcesGrowth = createQuery({
    dataType: 'TopSourcesGrowthResponseType',
    path: '/stats/top-sources-growth'
});
