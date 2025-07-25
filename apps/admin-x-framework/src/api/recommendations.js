import { createInfiniteQuery, createMutation } from '../utils/api/hooks';
const dataType = 'RecommendationResponseType';
export const useBrowseRecommendations = createInfiniteQuery({
    dataType,
    path: '/recommendations/',
    returnData: (originalData) => {
        const { pages } = originalData;
        let recommendations = pages.flatMap(page => page.recommendations);
        // Remove duplicates
        recommendations = recommendations.filter((recommendation, index) => {
            return recommendations.findIndex(({ id }) => id === recommendation.id) === index;
        });
        return {
            recommendations,
            meta: pages[pages.length - 1].meta
        };
    }
});
export const useDeleteRecommendation = createMutation({
    method: 'DELETE',
    path: recommendation => `/recommendations/${recommendation.id}/`,
    invalidateQueries: {
        dataType
    }
});
export const useEditRecommendation = createMutation({
    method: 'PUT',
    path: recommendation => `/recommendations/${recommendation.id}/`,
    body: recommendation => ({ recommendations: [recommendation] }),
    invalidateQueries: {
        dataType
    }
});
export const useAddRecommendation = createMutation({
    method: 'POST',
    path: () => '/recommendations/',
    body: ({ ...recommendation }) => ({ recommendations: [recommendation] }),
    invalidateQueries: {
        dataType
    }
});
export const useCheckRecommendation = createMutation({
    method: 'POST',
    path: () => '/recommendations/check/',
    body: url => ({ recommendations: [{ url: url.toString() }] })
});
export const useBrowseIncomingRecommendations = createInfiniteQuery({
    dataType,
    path: '/incoming_recommendations/',
    returnData: (originalData) => {
        const { pages } = originalData;
        let recommendations = pages.flatMap(page => page.recommendations);
        // Remove duplicates
        recommendations = recommendations.filter((mention, index) => {
            return recommendations.findIndex(({ id }) => id === mention.id) === index;
        });
        return {
            recommendations,
            meta: pages[pages.length - 1].meta
        };
    }
});
