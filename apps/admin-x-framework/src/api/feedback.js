import { createQueryWithId } from '../utils/api/hooks';
const dataType = 'FeedbackResponseType';
export const getPostFeedback = createQueryWithId({
    dataType,
    path: id => `/feedback/${id}/`
});
