export const insertToQueryCache = (field, recordsToInsert) => {
    return (newData, currentData) => {
        if (!currentData) {
            return currentData;
        }
        const getRecords = recordsToInsert || ((response) => response[field]);
        if (typeof currentData === 'object' && 'pages' in currentData) {
            const { pages } = currentData;
            const lastPage = pages[pages.length - 1];
            return {
                ...currentData,
                pages: pages.slice(0, -1).concat({
                    ...lastPage,
                    [field]: lastPage[field].concat(getRecords(newData))
                })
            };
        }
        return {
            ...currentData,
            [field]: currentData[field].concat(getRecords(newData))
        };
    };
};
export const updateQueryCache = (field, updatedRecords) => {
    return (newData, currentData) => {
        if (!currentData) {
            return currentData;
        }
        const getRecords = updatedRecords || ((response) => {
            const records = response[field];
            return records.reduce((result, record) => ({ ...result, [record.id]: record }), {});
        });
        const updated = getRecords(newData);
        if (typeof currentData === 'object' && 'pages' in currentData) {
            const { pages } = currentData;
            return {
                ...currentData,
                pages: pages.map(page => ({
                    ...page,
                    [field]: page[field].map(current => updated[current.id] || current)
                }))
            };
        }
        return {
            ...currentData,
            [field]: currentData[field].map(current => updated[current.id] || current)
        };
    };
};
export const deleteFromQueryCache = (field, idsFromPayload) => {
    return (_, currentData, payload) => {
        if (!currentData) {
            return currentData;
        }
        const deletedIds = idsFromPayload?.(payload) || [payload];
        if (typeof currentData === 'object' && 'pages' in currentData) {
            const { pages } = currentData;
            return {
                ...currentData,
                pages: pages.map(page => ({
                    ...page,
                    [field]: page[field].filter(current => !deletedIds.includes(current.id))
                }))
            };
        }
        return {
            ...currentData,
            [field]: currentData[field].filter(current => !deletedIds.includes(current.id))
        };
    };
};
