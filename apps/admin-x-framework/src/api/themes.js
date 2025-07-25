import { createMutation, createQuery } from '../utils/api/hooks';
import { customThemeSettingsDataType } from './customThemeSettings';
// Requests
const dataType = 'ThemesResponseType';
export const useBrowseThemes = createQuery({
    dataType,
    path: '/themes/'
});
export const useActiveTheme = createQuery({
    dataType,
    path: '/themes/active/'
});
export const useActivateTheme = createMutation({
    method: 'PUT',
    path: name => `/themes/${name}/activate/`,
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        update: (newData, currentData) => ({
            ...currentData,
            themes: currentData.themes.map((theme) => {
                const newTheme = newData.themes.find(({ name }) => name === theme.name);
                if (newTheme) {
                    return newTheme;
                }
                else {
                    return { ...theme, active: false };
                }
            })
        })
    },
    invalidateQueries: {
        dataType: customThemeSettingsDataType
    }
});
export const useDeleteTheme = createMutation({
    method: 'DELETE',
    path: name => `/themes/${name}/`,
    updateQueries: {
        dataType,
        emberUpdateType: 'delete',
        update: (_, currentData, name) => ({
            ...currentData,
            themes: currentData.themes.filter(theme => theme.name !== name)
        })
    }
});
export const useInstallTheme = createMutation({
    method: 'POST',
    path: () => '/themes/install/',
    searchParams: repo => ({ source: 'github', ref: repo }),
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        // Assume that all invite queries should include this new one
        update: (newData, currentData) => (currentData && {
            ...currentData,
            themes: [
                ...(currentData.themes),
                ...newData.themes
            ]
        })
    }
});
export const useUploadTheme = createMutation({
    method: 'POST',
    path: () => '/themes/upload/',
    body: ({ file }) => {
        const formData = new FormData();
        formData.append('file', file);
        return formData;
    },
    updateQueries: {
        dataType,
        emberUpdateType: 'createOrUpdate',
        // Assume that all invite queries should include this new one
        update: (newData, currentData) => (currentData && {
            ...currentData,
            themes: [
                ...(currentData.themes),
                ...newData.themes
            ]
        })
    }
});
// Helpers
export function isActiveTheme(theme) {
    return theme.active;
}
export function isDefaultTheme(theme) {
    return theme.name.toLowerCase() === 'source';
}
export function isLegacyTheme(theme) {
    return theme.name.toLowerCase() === 'casper';
}
export function isDefaultOrLegacyTheme(theme) {
    return isDefaultTheme(theme) || isLegacyTheme(theme);
}
export function isDeletableTheme(theme) {
    return !isDefaultTheme(theme) && !isLegacyTheme(theme) && !isActiveTheme(theme);
}
