import { createQuery } from '../utils/api/hooks';
const dataType = 'MembersResponseType';
export const useBrowseMembers = createQuery({
    dataType,
    path: '/members/'
});
