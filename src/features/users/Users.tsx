import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { useAppDispatch, useAppSelector } from 'app/reduxHooks';
import { fetchUsersAsync, usersSelectors } from './usersSlice';

export const Users: React.FC<RouteComponentProps> = () => {
  const users = useAppSelector(usersSelectors.selectAll);
  const dispatch = useAppDispatch();

  function renderUser(user: User): JSX.Element {
    return <div key={user.id}>{user.email}</div>;
  }

  function fetchUsers(): void {
    dispatch(fetchUsersAsync());
  }

  return (
    <div>
      <button onClick={fetchUsers}>fetch!</button>
      {users.map(renderUser)}
    </div>
  );
};
