import React from 'react';
import styled from 'styled-components';

interface IHouseItemProps {
  house: any // todo: define type
}

const HouseStyled = styled.div`
  border: 1px solid palevioletred;
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
  color: palevioletred;
`

const HouseItem = ({ house }: IHouseItemProps) => (
  <HouseStyled>
    <div>
      <div>Surface: {house.area}m</div>
      <div>Nombres de pièces: {house.piecesNumber}</div>
    </div>
    <div>Propriétaire: {house.owner.name}</div>
  </HouseStyled>
);

export default HouseItem
