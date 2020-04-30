import { UserAction } from '../../models/Actions';
import { UserState } from '../../models/User';
import UserTypes from './types';

const initialState = {
    loading: false,
    users: [],
    error: '',
};

const reducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserTypes.FETCH_USERS:
            return {
                ...state,
                loading: true,
            };
        case UserTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload || [],
            };
        case UserTypes.FETCH_USERS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error!,
            };
        default:
            return initialState;
    }
};

export default reducer;
