import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from "react-apollo";
import styled from 'styled-components';
import gql from 'graphql-tag';

import IHouse from '../domains/house/interface';
import HouseItem from './HouseItem'

const QUERY = gql`
query {
  houses {
    id
    piecesNumber
    area
    owner {
      id
      name
    }
  }
}
`
const H2 = styled.h2`
  text-align: center;
  color: palevioletred;
`

const HousesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Houses = () => {
  return (
    <div>
      <H2>Nos maisons</H2>
      <Query query={QUERY}>
        {({ loading, data, error }) => {
          if(loading) return (<div>wait</div>)
          if(error) return <div>damn{console.log(error)}</div>
          if(data) return (
            <HousesStyled>
              { data.houses.map((h: IHouse) => (
                <Link key={h.id} to={`/houses/${h.id}`}>
                  <HouseItem house={h}/>
                </Link>
              ))}
            </HousesStyled>
          )
        }}
      </Query>
    </div>
  ) 
}

export default Houses