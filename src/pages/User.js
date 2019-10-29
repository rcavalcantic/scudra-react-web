import React, { Component } from 'react';
import styled from 'styled-components';
import UserProfile from '../components/User/UserProfile';

const getUsersUrl = 'https://jsonplaceholder.typicode.com/users';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [{}],
    };
  }
    
  componentDidMount() {
    fetch(getUsersUrl)
      .then(response => response.json())
      .then(data => {
       this.setState({ userList: data });
      })
      .catch(error => {
        alert("Tivemos um erro com o servidor, tente novamente ou contate o suporte! :D");
        console.warn("getUserUrl: ", error);
      })
  }

	render() {
    const { userList } = this.state;
		return(
      <>
        <Title>Listagem de Usuários</Title>
        {userList.map((user, i) => (
          <UserProfile
            key={user.id + i}
            name={user.name}
            email={user.email}
            company={user.company ? user.company.name : ''}

            //collapse
            website={user.website}
            city={user.address ? user.address.city : ''}
            street={user.address ? user.address.street : ''}
            suite={user.address ? user.address.suite : ''}
            zipcode={user.address ? user.address.zipcode : ''}
            phone={user.phone}
          />
        ))}
      </>
		);
	}
}

const Title = styled.h2`
  display: none;

  @media (min-width: 1023px) {
    display: block;
  }
`;

export default UserList;