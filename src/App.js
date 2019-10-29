import React, { Component } from 'react';
import Header from './components/Header/Header';
import UserList from './pages/User';
import './assets/scss/global.scss';


class App extends Component {
	render() {
		return(
			<>
				<Header />
				<UserList />
			</>
		);
	}
}

export default App;