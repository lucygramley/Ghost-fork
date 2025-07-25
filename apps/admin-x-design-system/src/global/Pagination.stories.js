import Pagination from './Pagination';
const meta = {
    title: 'Global / Pagination',
    component: Pagination,
    tags: ['autodocs']
};
export default meta;
export const Default = {
    args: {
        limit: 5,
        total: 15,
        page: 1,
        nextPage: () => { },
        prevPage: () => { }
    }
};
export const LessThanMaximum = {
    args: {
        limit: 9,
        total: 5,
        page: 1,
        nextPage: () => { },
        prevPage: () => { }
    }
};
export const MiddlePage = {
    args: {
        limit: 5,
        total: 15,
        page: 2,
        nextPage: () => { },
        prevPage: () => { }
    }
};
export const LastPage = {
    args: {
        limit: 5,
        total: 15,
        page: 3,
        nextPage: () => { },
        prevPage: () => { }
    }
};
export const UnknownTotal = {
    args: {
        limit: 5,
        page: 1,
        nextPage: () => { },
        prevPage: () => { }
    }
};
