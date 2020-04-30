import types from './types';
import { User } from '../../models/User';
import { UserAction } from '../../models/Actions';

const fetchUsersRequest = (): UserAction => {
    return { type: types.FETCH_USERS };
};

const fetchUsersSuccess = (users: User[]): UserAction => {
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: users,
    };
};

const fetchUsersFailure = (error: string): UserAction => {
    return {
        type: types.FETCH_USERS_FAIL,
        error: error,
    };
};

export { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure };
