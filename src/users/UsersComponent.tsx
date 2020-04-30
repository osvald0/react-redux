import React, { useEffect } from 'react';
import { UserState } from '../models/User';

interface UsersProps {
    usersData: UserState;
    fetchUsers: () => any;
}

const UsersComponent: React.FC<UsersProps> = (props) => {
    const { usersData, fetchUsers } = props;

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    if (usersData.loading) {
        return <h2>Loading...</h2>;
    }

    if (usersData.error) {
        return <h2>An error has occured :(</h2>;
    }

    return (
        <div className='users'>
            <h1 className='title'>Users:</h1>
            <div className='list'>
                {usersData.users.map((user) => (
                    <div key={user.id} className='user'>
                        {user.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersComponent;
