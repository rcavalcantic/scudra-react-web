import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


import defaultProfileImage from '../../assets/default-user-profile.jpg';
import colors from '../../assets/scss/colors.scss';

class UserProfile extends Component {
	constructor() {
    super();
      this.state = { open: false };
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

	toLowerCase = word => {
		return word.toLowerCase();
	}

	cleanPhone = phone => {
		return phone.split('x')[0];
	}
	
	render() {
		const { name, email, company, website, city, street, suite, zipcode, phone } = this.props;

		return(
			<UserComponent onClick={this.toggle.bind(this)}>
				<UserContainer>
					<LazyProfilePic src={ defaultProfileImage } />
					<UserStatus />
					<UserCard>
						<h3>{name}</h3>
						<p>{email ? this.toLowerCase(email) : email}</p>
					</UserCard>
					<CompanyLabel><p>{company}</p></CompanyLabel>
				</UserContainer>
				<CollapseContainer>
					<div className={"collapse" + (this.state.open ? ' in' : '')}>
						<div className="address">
							<span>Endereço</span>
							<p>{street} {suite}, {city} - {zipcode}</p>
						</div>
						<div className="phone">
							<span>Celular:</span>
							<p>{phone ? this.cleanPhone(phone) : phone}</p>
						</div>
						<div className="personal">
							<span>Site:</span>
							<p><a href={`${document.location.protocol}//${website}`} target="_blank">{website}</a></p>
							<br/>
							
						</div>
					</div>
				</CollapseContainer>
			</UserComponent>
		);
	}
}

UserProfile.propTypes = {
	name: PropTypes.string,
	email: PropTypes.string,
	company: PropTypes.string,
	website: PropTypes.string,
	address: PropTypes.object,
}

const CollapseContainer = styled.div`
	background-color: ${colors.whitecolor};
	font-size: 20px;
	margin-left: 12px;

	.collapse {
		display: none
	}

	.collapse.in {
		display: flex;
	}

	.address {
		padding-left: 32px;
		> span {
			display: flex;
			font-weight: bold;
		}
	}

	.phone {
		margin: 0 16px;
		 > span {
			font-weight: bold;
		 }

		 @media (min-width: 1023px) {
			margin: 0 128px;
		}
	}

	.personal {
		padding-left: 32px;
		padding-right: 32px;
		word-break: break-all;
		> span {
			font-weight: bold;
		}

		> a {
			margin-left: 8px;
		}
	}

	> * {
		p, span {
			margin: unset;
		}
	}


`;

const UserComponent = styled.div`
	border: 4px;
	border-style: solid;
	border-color: ${colors.lightblue};
`;

const UserContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	text-align: center;

	background-color: ${colors.whitecolor};
	padding: 16px;

	
`;

const LazyProfilePic = styled.img`
	width: 128px;
	height: 128px;
	margin-right: 12px;
`;

const UserCard = styled.div`
	flex-direction: column;
	box-sizing: border-box;
	font-size: 32px;

	> h3 {
		margin: unset;
		text-align: start;
	}

	> p {
		margin: unset;
		text-align: start;
	}
`;

const UserStatus = styled.span`
  height: 25px;
  width: 25px;
  background-color: ${colors.greenlight};
  border-radius: 50%;
	display: inline-block;
	margin: 16px;
`;

const CompanyLabel = styled.div`
	background-color: ${colors.greenlight};
	color: ${colors.whitecolor};
	margin: 8px;
	font-size: 32px;
	border-radius: 20%;
	margin-left: 128px;

	> p {
		margin: 4px;
    padding: unset;
    font-size: 20px;
    font-weight: bold;
	}
`;

export default UserProfile;