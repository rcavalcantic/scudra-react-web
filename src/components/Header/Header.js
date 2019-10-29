import React, { Component } from 'react';
import styled from 'styled-components';

import scudraLogo from '../../assets/scudra-azul.png';

class Header extends Component {
	render() {
		return(
      <TopHeader>
        <img src={scudraLogo} />
        <a href={'https://scudra.com'}>Início</a>
      </TopHeader>  
		);
	}
}

const TopHeader = styled.div`
  display: none;

  @media (min-width: 1023px) {
    display: block;
    width: 80%;
    margin: auto;

    > a, img {
      vertical-align: middle;
    }
    
    > a {
      text-decoration: none;
      margin-left: 32px;
    }
  
    > img {
      max-width: 140px;
      padding-right: 16px;
    }
  }
`;

export default Header;