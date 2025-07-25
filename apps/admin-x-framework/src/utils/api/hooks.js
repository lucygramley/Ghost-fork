import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { usePagination } from '@tryghost/admin-x-design-system';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useHandleError from '../../hooks/useHandleError';
import { usePermission } from '../../hooks/usePermissions';
import { useFramework } from '../../providers/FrameworkProvider';
import { apiUrl, useFetchApi } from './fetchApi';
export const createQuery = (options) => ({ searchParams, ...query } = {}) => {
    const url = apiUrl(options.path, searchParams || options.defaultSearchParams, options?.useActivityPub);
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const result = useQuery({
        enabled: options.permissions ? usePermission(options.permissions) : true,
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url, { ...options }),
        ...query
    });
    const data = useMemo(() => ((result.data && options.returnData) ? options.returnData(result.data) : result.data), [result.data]);
    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);
    return {
        ...result,
        data
    };
};
export const createPaginatedQuery = (options) => ({ searchParams, ...query } = {}) => {
    const [page, setPage] = useState(1);
    const limit = (searchParams?.limit || options.defaultSearchParams?.limit) ? parseInt(searchParams?.limit || options.defaultSearchParams?.limit || '15') : 15;
    const paginatedSearchParams = searchParams || options.defaultSearchParams || {};
    paginatedSearchParams.page = page.toString();
    const url = apiUrl(options.path, paginatedSearchParams, options?.useActivityPub);
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const result = useQuery({
        queryKey: [options.dataType, url],
        queryFn: () => fetchApi(url),
        ...query
    });
    const data = useMemo(() => ((result.data && options.returnData) ? options.returnData(result.data) : result.data), [result]);
    const pagination = usePagination({
        page,
        setPage,
        limit,
        // Don't pass the meta data if we are fetching, because then it is probably out of date and this causes issues
        meta: result.isFetching ? undefined : data?.meta?.pagination
    });
    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);
    return {
        ...result,
        data,
        pagination
    };
};
export const createInfiniteQuery = (options) => ({ searchParams, getNextPageParams, ...query } = {}) => {
    const fetchApi = useFetchApi();
    const handleError = useHandleError();
    const nextPageParams = getNextPageParams || options.defaultNextPageParams || (() => ({}));
    const result = useInfiniteQuery({
        queryKey: [options.dataType, apiUrl(options.path, searchParams || options.defaultSearchParams, options?.useActivityPub)],
        queryFn: ({ pageParam }) => fetchApi(apiUrl(options.path, pageParam || searchParams || options.defaultSearchParams, options?.useActivityPub)),
        getNextPageParam: data => nextPageParams(data, searchParams || options.defaultSearchParams || {}),
        ...query
    });
    const data = useMemo(() => result.data && options.returnData(result.data), [result.data]);
    useEffect(() => {
        if (result.error && query.defaultErrorHandler !== false) {
            handleError(result.error);
        }
    }, [handleError, result.error, query.defaultErrorHandler]);
    return {
        ...result,
        data
    };
};
export const createQueryWithId = (options) => (id, { searchParams, ...query } = {}) => {
    const queryHook = createQuery({ ...options, path: options.path(id) });
    return queryHook({ searchParams: searchParams || options.defaultSearchParams, ...query });
};
const mutate = ({ fetchApi, path, payload, searchParams, options }) => {
    const { defaultSearchParams, body, ...requestOptions } = options;
    const url = apiUrl(path, searchParams || defaultSearchParams, options?.useActivityPub);
    const generatedBody = payload && body?.(payload);
    let requestBody = undefined;
    if (generatedBody instanceof FormData) {
        requestBody = generatedBody;
    }
    else if (generatedBody) {
        requestBody = JSON.stringify(generatedBody);
    }
    return fetchApi(url, {
        body: requestBody,
        ...requestOptions
    });
};
export const createMutation = ({ path, searchParams, defaultSearchParams, updateQueries, invalidateQueries, ...mutateOptions }) => () => {
    const fetchApi = useFetchApi();
    const queryClient = useQueryClient();
    const { onUpdate, onInvalidate, onDelete } = useFramework();
    const afterMutate = useCallback((newData, payload) => {
        if (invalidateQueries) {
            queryClient.invalidateQueries([invalidateQueries.dataType]);
            onInvalidate(invalidateQueries.dataType);
        }
        if (updateQueries) {
            queryClient.setQueriesData([updateQueries.dataType], (data) => updateQueries.update(newData, data, payload));
            if (updateQueries.emberUpdateType === 'createOrUpdate') {
                onUpdate(updateQueries.dataType, newData);
            }
            else if (updateQueries.emberUpdateType === 'delete') {
                if (typeof payload !== 'string') {
                    throw new Error('Expected delete mutation to have a string (ID) payload. Either change the payload or update the createMutation hook');
                }
                onDelete(updateQueries.dataType, payload);
            }
        }
    }, [onInvalidate, onUpdate, onDelete, queryClient]);
    return useMutation({
        mutationFn: payload => mutate({ fetchApi, path: path(payload), payload, searchParams: searchParams?.(payload) || defaultSearchParams, options: mutateOptions }),
        onSuccess: afterMutate
    });
};
