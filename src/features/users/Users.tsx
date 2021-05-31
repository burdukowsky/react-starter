import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { useAppDispatch, useAppSelector } from 'app/reduxHooks';
import { fetchUsersAsync, selectAllUsers, selectUsersError, selectUsersLoading } from './usersSlice';

export const Users: React.FC<RouteComponentProps> = () => {
  const users = useAppSelector(selectAllUsers);
  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);
  const dispatch = useAppDispatch();

  function renderUser(user: User): JSX.Element {
    return <div key={user.id}>{user.email}</div>;
  }

  function fetchUsers(): void {
    dispatch(fetchUsersAsync());
  }

  return (
    <React.Fragment>
      <button onClick={fetchUsers} disabled={loading}>fetch!</button>
      {loading && <div>loading...</div>}
      {error && <div className='text-danger'>error!</div>}
      {users.map(renderUser)}
    </React.Fragment>
  );
};
