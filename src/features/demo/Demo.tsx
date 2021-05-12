import React from 'react';

export default function Demo(): JSX.Element {
  return (
    <React.Fragment>
      <div className='text-primary'>primary</div>
      <div className='text-success'>success</div>
      <div className='text-warning'>warning</div>
      <div className='text-danger'>danger</div>
      <div className='text-muted'>muted</div>
    </React.Fragment>
  );
}
