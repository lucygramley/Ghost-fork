import { useRef } from 'react';
import { apiUrl, useFetchApi } from '../utils/api/fetchApi';
const escapeNqlString = (value) => {
    return '\'' + value.replace(/'/g, '\\\'') + '\'';
};
const useFilterableApi = ({ path, filterKey, responseKey, limit = 20 }) => {
    const fetchApi = useFetchApi();
    const result = useRef({});
    const loadData = async (input) => {
        if ((result.current.allLoaded || result.current.lastInput === input) && result.current.data) {
            return result.current.data.filter(item => item[filterKey]?.toLowerCase().includes(input.toLowerCase()));
        }
        const response = await fetchApi(apiUrl(path, {
            filter: input ? `${filterKey}:~${escapeNqlString(input)}` : '',
            limit: limit.toString()
        }));
        result.current.data = response[responseKey];
        result.current.allLoaded = !input && !response.meta?.pagination.next;
        result.current.lastInput = input;
        return response[responseKey];
    };
    const loadInitialValues = async (values, key) => {
        await loadData('');
        const data = [...(result.current.data || [])];
        const missingValues = values.filter(value => !result.current.data?.find(item => item[key] === value));
        if (missingValues.length) {
            const additionalData = await fetchApi(apiUrl(path, {
                filter: `${key}:[${missingValues.join(',')}]`,
                limit: '100'
            }));
            data.push(...additionalData[responseKey]);
        }
        return values.map(value => data.find(item => item[key] === value));
    };
    return {
        loadData,
        loadInitialValues
    };
};
export default useFilterableApi;
