import { User } from './User';
import UserTypes from '../users/duck/types';

export interface UserAction {
    type: UserTypes;
    payload?: User[];
    error?: string;
}
