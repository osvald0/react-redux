import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { UserMapStateProps, UserMapDispatchProps } from '../models/User';
import { fetchUsers } from './duck/operations';
import { AppState } from '../models/Root';
import UsersComponent from './UsersComponent';
import { UserAction } from '../models/Actions';

const mapStateToProps = (state: AppState): UserMapStateProps => ({
    usersData: state.users,
});

const mapDispatchToProps = (
    dispatch: Dispatch<UserAction>
): UserMapDispatchProps => ({
    fetchUsers: (): Promise<void> => fetchUsers(dispatch),
});

const UsersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersComponent);

export default UsersContainer;
