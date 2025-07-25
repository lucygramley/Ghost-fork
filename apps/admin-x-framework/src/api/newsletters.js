import { createInfiniteQuery, createMutation } from '../utils/api/hooks';
import { insertToQueryCache, updateQueryCache } from '../utils/api/updateQueries';
const dataType = 'NewslettersResponseType';
export const newslettersDataType = dataType;
export const useBrowseNewsletters = createInfiniteQuery({
    dataType,
    path: '/newsletters/',
    defaultSearchParams: { include: 'count.active_members,count.posts', limit: '50' },
    defaultNextPageParams: (lastPage, otherParams) => ({
        ...otherParams,
        page: (lastPage.meta?.pagination.next || 1).toString()
    }),
    returnData: (originalData) => {
        const { pages } = originalData;
        const newsletters = pages.flatMap(page => page.newsletters);
        const meta = pages[pages.length - 1].meta;
        return {
            newsletters: newsletters,
            meta,
            isEnd: meta ? meta.pagination.pages === meta.pagination.page : true
        };
    }
});
export const useAddNewsletter = createMutation({
    method: 'POST',
    path: () => '/newsletters/',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    body: ({ opt_in_existing: _, ...newsletter }) => ({ newsletters: [newsletter] }),
    searchParams: payload => ({ opt_in_existing: payload.opt_in_existing.toString(), include: 'count.active_members,count.posts' }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: insertToQueryCache('newsletters')
    }
});
export const useEditNewsletter = createMutation({
    method: 'PUT',
    path: newsletter => `/newsletters/${newsletter.id}/`,
    body: newsletter => ({ newsletters: [newsletter] }),
    defaultSearchParams: { include: 'count.active_members,count.posts' },
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('newsletters')
    }
});
export const useVerifyNewsletterEmail = createMutation({
    method: 'PUT',
    path: () => '/newsletters/verifications/',
    body: ({ token }) => ({ token }),
    defaultSearchParams: { include: 'count.active_members,count.posts' },
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: updateQueryCache('newsletters')
    }
});
