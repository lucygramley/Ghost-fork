import { createMutation, createQuery, createQueryWithId } from '../utils/api/hooks';
import { updateQueryCache, insertToQueryCache } from '../utils/api/updateQueries';
const dataType = 'OffersResponseType';
export const useBrowseOffers = createQuery({
    dataType,
    path: '/offers/',
    // offers endpoint doesn't support limit or pagination so we exclude the default ?limit=20
    defaultSearchParams: {}
});
export const useBrowseOffersById = createQueryWithId({
    dataType,
    path: id => `/offers/${id}/`
});
export const useEditOffer = createMutation({
    method: 'PUT',
    path: offer => `/offers/${offer.id}/`,
    body: offer => ({ offers: [offer] }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('offers')
    }
});
export const useAddOffer = createMutation({
    method: 'POST',
    path: () => '/offers/',
    body: offer => ({ offers: [offer] }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: insertToQueryCache('offers')
    }
});
