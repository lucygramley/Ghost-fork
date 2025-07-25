import { createQuery } from '../utils/api/hooks';
const dataType = 'RolesResponseType';
export const useBrowseRoles = createQuery({
    dataType,
    path: '/roles/',
    // Ghost has a fixed-by-core number of roles so we know it's less than 100
    defaultSearchParams: { limit: '100' }
});
