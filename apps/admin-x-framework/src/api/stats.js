import { createQuery, createQueryWithId } from '../utils/api/hooks';
// Requests
const dataType = 'TopContentResponseType';
const memberCountHistoryDataType = 'MemberCountHistoryResponseType';
const topPostsStatsDataType = 'TopPostsStatsResponseType';
const postReferrersDataType = 'PostReferrersResponseType';
const newsletterStatsDataType = 'NewsletterStatsResponseType';
const newsletterSubscriberStatsDataType = 'NewsletterSubscriberStatsResponseType';
const postGrowthStatsDataType = 'PostGrowthStatsResponseType';
const mrrHistoryDataType = 'MrrHistoryResponseType';
const topPostViewsDataType = 'TopPostViewsResponseType';
const subscriptionStatsDataType = 'SubscriptionStatsResponseType';
export const useTopContent = createQuery({
    dataType,
    path: '/stats/top-content/'
});
export const useMemberCountHistory = createQuery({
    dataType: memberCountHistoryDataType,
    path: '/stats/member_count/'
});
export const useTopPostsStats = createQuery({
    dataType: topPostsStatsDataType,
    path: '/stats/top-posts/'
});
export const usePostReferrers = createQueryWithId({
    dataType: postReferrersDataType,
    path: id => `/stats/posts/${id}/top-referrers`
});
export const usePostGrowthStats = createQueryWithId({
    dataType: postGrowthStatsDataType,
    path: id => `/stats/posts/${id}/growth`
});
export const useMrrHistory = createQuery({
    dataType: mrrHistoryDataType,
    path: '/stats/mrr/'
});
export const useSubscriptionStats = createQuery({
    dataType: subscriptionStatsDataType,
    path: '/stats/subscriptions/'
});
export const usePostStats = createQueryWithId({
    dataType: 'PostStatsResponseType',
    path: id => `/stats/posts/${id}/stats/`
});
export const useTopPostsViews = createQuery({
    dataType: topPostViewsDataType,
    path: '/stats/top-posts-views/'
});
export const useNewsletterStats = createQuery({
    dataType: newsletterStatsDataType,
    path: '/stats/newsletter-stats/',
    defaultSearchParams: {
    // Empty default params, will be filled by the hook
    }
});
export const useNewsletterBasicStats = createQuery({
    dataType: newsletterStatsDataType,
    path: '/stats/newsletter-basic-stats/',
    defaultSearchParams: {
    // Empty default params, will be filled by the hook
    }
});
export const useNewsletterClickStats = createQuery({
    dataType: newsletterStatsDataType,
    path: '/stats/newsletter-click-stats/',
    defaultSearchParams: {
    // Empty default params, will be filled by the hook
    }
});
// Hook wrapper to accept a newsletterId parameter
export const useNewsletterStatsByNewsletterId = (newsletterId, options = {}, queryOptions = {}) => {
    const searchParams = {};
    if (newsletterId) {
        searchParams.newsletter_id = newsletterId;
    }
    // Add any additional search params
    if (options.date_from) {
        searchParams.date_from = options.date_from;
    }
    if (options.date_to) {
        searchParams.date_to = options.date_to;
    }
    if (options.order) {
        searchParams.order = options.order;
    }
    if (options.limit) {
        searchParams.limit = options.limit.toString();
    }
    return useNewsletterStats({ searchParams, enabled: queryOptions.enabled });
};
export const useSubscriberCount = createQuery({
    dataType: newsletterSubscriberStatsDataType,
    path: '/stats/subscriber-count/',
    defaultSearchParams: {
    // Empty default params, will be filled by the hook
    }
});
// Hook wrapper to accept a newsletterId parameter
export const useSubscriberCountByNewsletterId = (newsletterId, options = {}) => {
    const searchParams = {};
    if (newsletterId) {
        searchParams.newsletter_id = newsletterId;
    }
    // Add any additional search params
    if (options.date_from) {
        searchParams.date_from = options.date_from;
    }
    if (options.date_to) {
        searchParams.date_to = options.date_to;
    }
    return useSubscriberCount({ searchParams });
};
