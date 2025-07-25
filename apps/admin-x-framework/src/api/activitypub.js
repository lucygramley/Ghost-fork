import { createMutation, createQueryWithId } from '../utils/api/hooks';
export const useFollow = createMutation({
    method: 'POST',
    useActivityPub: true,
    path: data => `/actions/follow/${data.username}`
});
export const useUnfollow = createMutation({
    method: 'POST',
    useActivityPub: true,
    path: data => `/actions/unfollow/${data.username}`
});
// This is a frontend root, not using the Ghost admin API
export const useBrowseInboxForUser = createQueryWithId({
    dataType: 'InboxResponseData',
    useActivityPub: true,
    headers: {
        Accept: 'application/activity+json'
    },
    path: id => `/reader/${id}`
});
// This is a frontend root, not using the Ghost admin API
export const useBrowseFollowingForUser = createQueryWithId({
    dataType: 'FollowingResponseData',
    useActivityPub: true,
    headers: {
        Accept: 'application/activity+json'
    },
    path: id => `/following/${id}`
});
// This is a frontend root, not using the Ghost admin API
export const useBrowseFollowersForUser = createQueryWithId({
    dataType: 'FollowingResponseData',
    useActivityPub: true,
    headers: {
        Accept: 'application/activity+json'
    },
    path: id => `/followers/${id}`
});
