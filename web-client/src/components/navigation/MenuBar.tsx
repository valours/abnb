import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthenticateContext from '../../context/authenticate';

const MenuButton = styled.div`
  margin: 5px;
  padding: 5px;
  font-weight: bold;
  color: white !important;
`

const MenuBarStyled = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(93deg, #3ae7df, #1ad2ac);
`

class MenuBar extends React.Component {
  static contextType = AuthenticateContext;
  render() {
    return(
      <MenuBarStyled>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <MenuButton>Home</MenuButton>
        </Link>
        {this.context === 'owner' && (
          <Link to="/me/houses" style={{ textDecoration: 'none' }}>
            <MenuButton>Mes biens</MenuButton>
          </Link>
        )}
        { this.context === 'lodger' && (
          <Link to="/me/rentals" style={{ textDecoration: 'none' }}>
            <MenuButton>Mes réservations</MenuButton>
          </Link>
        )}
        <Link to="/me" style={{ textDecoration: 'none' }}>
          <MenuButton>Mon profil</MenuButton>
        </Link>
      </MenuBarStyled>
    )
  }
}

export default MenuBar;