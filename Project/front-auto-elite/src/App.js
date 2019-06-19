import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'
import './index.css';
import LoginPage from './components/login/login';
import RouterAfterLogin from './router';

class App extends Component {
	state = { 
		authentication: true
	}

	handleAuthentication = (userName, passWord) => {
		//call BackEnd to auth

		if(userName === "mika" && passWord === "1234"){
			const authentication = true;
			this.setState({ authentication });
			return (
				<Redirect to='/'/>
			)
		}
	};

	render() {
		const { authentication } = this.state;

		const Login = () => {
			return (
				<LoginPage 
					onAuth={this.handleAuthentication}
				/>
			);
		}

		return (
			<BrowserRouter>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
				/>
				{authentication === false &&
					<Switch>
						<Route path="/Login" render={Login} />
						<Redirect to ="/Login"/>
					</Switch>
				}
				{authentication === true &&
					<RouterAfterLogin/>
				}
			</BrowserRouter>
		);
	};
};

export default App;

