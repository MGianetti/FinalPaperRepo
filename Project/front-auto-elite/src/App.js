import React from 'react';
import FixedAppBar from './components/fixedAppBar';
import FixedMenuBar from './components/fixedMenuBar';
import Grid from '@material-ui/core/Grid';
import Clients from './components/clients';
import Cars from './components/cars';
import Services from './components/services';
import Budget from './components/budget';
import Employees from './components/employees';
import Stock from './components/stock';
import Billing from './components/billing';
import Inspection from './components/inspection';
import NotFound from './components/notFound';
import Home from './components/home'
import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css';

function App() {
	return (
		<React.Fragment >
			<head>
				<title>Auto Elite</title>
			</head>
			<body>
				<FixedAppBar />
					<Grid container direction='row'>
						<Grid item direction='column'>
							<FixedMenuBar/>
						</Grid>
						<Grid item direction='column'>
							<Switch>
								<Route path="/Início" component={Home} />
								<Route path="/Clientes" component={Clients} />
								<Route path="/Carros" component={Cars} />
								<Route path="/Serviços" component={Services} />
								<Route path="/Orçamentos" component={Budget} />
								<Route path="/Mecânicos" component={Employees} />
								<Route path="/Estoque" component={Stock} />
								<Route path="/Cobrança" component={Billing} />
								<Route path="/Vistoria" component={Inspection} />
								<Route path="/not-found" component={NotFound} />
								<Redirect from="/" exact to="/movies" />
								<Redirect to="/not-found" />
							</Switch>
						</Grid>
					</Grid>				
			</body>
		</React.Fragment>
    );
}

export default App;
