import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction } from '../../models/Actions';
import {
    fetchUsersFailure,
    fetchUsersRequest,
    fetchUsersSuccess,
} from './actions';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async (dispatch: Dispatch<UserAction>): Promise<void> => {
    try {
        dispatch(fetchUsersRequest());
        const response = await axios.get(API_ENDPOINT);
        dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
        dispatch(fetchUsersFailure(error.message));
    }
};

export { fetchUsers };
