import { useEffect, useState } from 'react';
export const usePage = () => {
    const [page, setPage] = useState(1);
    return { page, setPage };
};
export const usePagination = ({ limit, meta, page, setPage }) => {
    // Prevent resetting meta when a new page loads
    const [prevMeta, setPrevMeta] = useState(meta);
    useEffect(() => {
        if (meta) {
            setPrevMeta(meta);
            if (meta.pages > 0 && meta.pages < page) {
                // We probably deleted an item when on the last page: go one page back automatically
                setPage(meta.pages);
            }
        }
    }, [meta, setPage, page]);
    return {
        page,
        setPage,
        pages: prevMeta?.pages ?? null,
        limit: prevMeta?.limit && prevMeta.limit !== 'all' ? prevMeta.limit : limit,
        total: prevMeta?.total ?? null,
        nextPage: () => setPage(Math.min(page + 1, prevMeta?.pages ? prevMeta.pages : page)),
        prevPage: () => setPage(Math.max(1, page - 1))
    };
};
