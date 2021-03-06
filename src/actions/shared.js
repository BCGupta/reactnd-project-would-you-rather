import { getInitialData } from '../utils/projectAPI';
import { receiveQuestions } from '../actions/questions';
import { receiveUsers } from '../actions/users';

export function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ users, questions }) => {
            dispatch(receiveQuestions(questions));
            dispatch(receiveUsers(users));
        });
    };
}