import { createInfiniteQuery, createMutation } from '../utils/api/hooks';
import { updateQueryCache } from '../utils/api/updateQueries';
// Requests
const dataType = 'TiersResponseType';
export const useBrowseTiers = createInfiniteQuery({
    dataType,
    path: '/tiers/',
    defaultNextPageParams: (lastPage, otherParams) => ({
        ...otherParams,
        page: (lastPage.meta?.pagination.next || 1).toString()
    }),
    returnData: (originalData) => {
        const { pages } = originalData;
        const tiers = pages.flatMap(page => page.tiers);
        const meta = pages[pages.length - 1].meta;
        return {
            tiers,
            meta,
            isEnd: meta ? meta.pagination.pages === meta.pagination.page : true
        };
    }
});
export const useAddTier = createMutation({
    method: 'POST',
    path: () => '/tiers/',
    body: tier => ({ tiers: [tier] }),
    // We may have queries for paid/archived/etc, so we can't assume how to update the global store and need to reload queries from the server
    invalidateQueries: { dataType }
});
export const useEditTier = createMutation({
    method: 'PUT',
    path: tier => `/tiers/${tier.id}/`,
    body: tier => ({ tiers: [tier] }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('tiers')
    }
});
// Helpers
export function getPaidActiveTiers(tiers) {
    return tiers.filter((tier) => {
        return tier.type === 'paid' && tier.active;
    });
}
export function getActiveTiers(tiers) {
    return tiers.filter((tier) => {
        return tier.active;
    });
}
export function getArchivedTiers(tiers) {
    return tiers.filter((tier) => {
        return !tier.active;
    });
}
