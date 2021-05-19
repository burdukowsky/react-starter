import React from 'react';
import { RouteComponentProps } from '@reach/router';

export const Demo: React.FC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <div className='text-primary'>primary</div>
      <div className='text-success'>success</div>
      <div className='text-warning'>warning</div>
      <div className='text-danger'>danger</div>
      <div className='text-muted'>muted</div>
    </React.Fragment>
  );
};
