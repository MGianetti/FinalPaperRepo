import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Clients from './components/clients/clients';
import Home from './components/home/home';
import NotFound from './components/notFound/notFound';
import UiAppBar from './components/appBar/uiAppBar'
import UiMenuBar from './components/menu/uiMenuBar'
import './App.css';

function App() {
	return (
		<React.Fragment >
			<head>
				<title>Auto Elite</title>
			</head>
			<body>
				<Grid container>
					<Grid container>
						<Grid item style={{width:'100%'}}>
							<UiAppBar />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item style={{width:'15%', background: 'grey'}}>
							<UiMenuBar/>
						</Grid>
						<Grid item style={{width:'75%'}}>
							<Switch>
								<Route path="/Início" component={Home} />
								<Route path="/Clientes" component={Clients} />
								<Route path="/Carros" component={NotFound} />
								<Route path="/Serviços" component={NotFound} />
								<Route path="/Orçamentos" component={NotFound} />
								<Route path="/Mecânicos" component={NotFound} />
								<Route path="/Estoque" component={NotFound} />
								<Route path="/Cobrança" component={NotFound} />
								<Route path="/Vistoria" component={NotFound} />
								<Route path="/not-found" component={NotFound} />
								<Redirect from="/" exact to="/movies" />
								<Redirect to="/not-found" />
							</Switch>
						</Grid>
					</Grid>
				</Grid>
			</body>
		</React.Fragment>
    );
};

export default App;
