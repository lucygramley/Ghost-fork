import { useCurrentUser } from '../api/currentUser';
export const usePermission = (userRoles) => {
    const { data: currentUser } = useCurrentUser();
    const currentUserRoles = currentUser?.roles.map(role => role.name);
    if (!currentUserRoles) {
        return false;
    }
    return userRoles.some((role => currentUserRoles.includes(role)));
};
