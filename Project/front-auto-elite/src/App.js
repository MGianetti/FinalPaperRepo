import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Clients from './components/clients/clients';
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
				<UiAppBar />
					<Grid container spacing={25}>
						<Grid item xl={6}>
							<UiMenuBar style={{flex: 1}}/>
						</Grid>
						<Grid item xl={6} style={{flex: 1}}>
							<Switch>
								<Route path="/Início" component={NotFound} />
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
			</body>
		</React.Fragment>
    );
};

export default App;
