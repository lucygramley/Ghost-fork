import { createMutation, createQuery } from '../utils/api/hooks';
export const hiddenCustomThemeSettingValue = null;
const dataType = 'CustomThemeSettingsResponseType';
export const customThemeSettingsDataType = dataType;
export const useBrowseCustomThemeSettings = createQuery({
    dataType,
    path: '/custom_theme_settings/'
});
export const useEditCustomThemeSettings = createMutation({
    method: 'PUT',
    path: () => '/custom_theme_settings/',
    body: settings => ({ custom_theme_settings: settings }),
    updateQueries: {
        emberUpdateType: 'skip',
        dataType,
        update: newData => newData
    }
});
