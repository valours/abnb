import React from 'react';

interface IHouseItemProps {
  house: any // todo: define type
}

const HouseItem = ({ house }: IHouseItemProps) => (
  <div>
    <div>Owner: {house.owner.name}</div>
  </div>
);

export default HouseItem
