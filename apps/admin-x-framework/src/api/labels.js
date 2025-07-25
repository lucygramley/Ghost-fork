import { createQuery } from '../utils/api/hooks';
const dataType = 'LabelsResponseType';
export const useBrowseLabels = createQuery({
    dataType,
    path: '/labels/'
});
