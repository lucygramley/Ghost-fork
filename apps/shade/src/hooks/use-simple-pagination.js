import { useEffect, useMemo, useState } from 'react';
export function useSimplePagination({ data, itemsPerPage, initialPage = 1 }) {
    const [currentPage, setCurrentPage] = useState(initialPage);
    if (itemsPerPage <= 0) {
        throw new Error('itemsPerPage must be a positive number');
    }
    const setCurrentPageSafe = (page) => {
        const clampedPage = Math.max(1, Math.min(totalPages, page));
        setCurrentPage(clampedPage);
    };
    const totalPages = useMemo(() => {
        if (!data) {
            return 1;
        }
        return Math.ceil(data.length / itemsPerPage);
    }, [data, itemsPerPage]);
    // Reset to page 1 if current page becomes invalid due to data changes
    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [currentPage, totalPages]);
    const paginatedData = useMemo(() => {
        if (!data) {
            return null;
        }
        const startIndex = (currentPage - 1) * itemsPerPage;
        return data.slice(startIndex, startIndex + itemsPerPage);
    }, [data, currentPage, itemsPerPage]);
    const nextPage = () => {
        setCurrentPage(prev => Math.min(totalPages, prev + 1));
    };
    const previousPage = () => {
        setCurrentPage(prev => Math.max(1, prev - 1));
    };
    const hasNextPage = currentPage < totalPages;
    const hasPreviousPage = currentPage > 1;
    return {
        currentPage,
        setCurrentPage: setCurrentPageSafe,
        totalPages,
        paginatedData,
        nextPage,
        previousPage,
        hasNextPage,
        hasPreviousPage
    };
}
