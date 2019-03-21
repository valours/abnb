import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';

const QUERY = gql`
query {
  house {
    piecesNumber
    owner {
      id
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
          if(data) return (<div>bonjour{console.log(data)}</div>)
        }}
      </Query>
    </div>
  ) 
}

export default Houses