import React from 'react';

interface IHouseProps {
  match: {
    params: any
  }
}

export default ({ match } : IHouseProps) => {
  return(
    <div>
      <h1>House: {match.params.id}</h1>
    </div>
  )
}