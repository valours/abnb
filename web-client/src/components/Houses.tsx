import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

import IHouse from '../domains/house/interface';
import HouseItem from './HouseItem'

const QUERY = gql`
query {
  houses {
    id
    piecesNumber
    owner {
      id
      name
    }
  }
}
`

const Houses = () => {
  return (
    <div>
      <h1>Houses</h1>
      <Query query={QUERY}>
        {({ loading, data, error }) => {
          if(loading) return (<div>wait</div>)
          if(error) return <div>damn{console.log(error)}</div>
          if(data) return (<div>{data.houses.map((h: IHouse)  => <HouseItem key={h.id} house={h}/>)}</div>)
        }}
      </Query>
    </div>
  ) 
}

export default Houses