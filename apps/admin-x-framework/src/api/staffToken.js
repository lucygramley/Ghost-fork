import { createMutation, createQuery } from '../utils/api/hooks';
const dataType = 'StaffTokenResponseType';
export const getStaffToken = createQuery({
    dataType,
    path: '/users/me/token/'
});
export const genStaffToken = createMutation({
    path: () => '/users/me/token/',
    method: 'PUT'
});
