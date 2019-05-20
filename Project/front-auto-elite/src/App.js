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
		<div style={{width: '100vw', height: '100vh'}}>
				<Grid container style={{height:'100%'}}>
					<Grid container>
						<Grid item style={{width:'100%'}}>
							<UiAppBar />
						</Grid>
					</Grid>
					<Grid container style={{height:'100%', width:'100%', background:'Snow'}}>
						<Grid item style={{width:'15%', background:'Azure'}}>
							<UiMenuBar/>
						</Grid>
						<Grid container style={{width:'85%'}}>
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
								<Redirect from="/" exact to="/Início" />
								<Redirect to="/not-found" />
							</Switch>
						</Grid>
					</Grid>
				</Grid>
		</div>
    );
};

export default App;
