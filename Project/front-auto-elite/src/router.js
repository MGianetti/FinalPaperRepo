import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Clients from './components/clients/clients';
import Home from './components/home/home';
import NotFound from './components/notFound/notFound';
import UiAppBar from './components/appBar/uiAppBar'
import UiMenuBar from './components/menu/uiMenuBar'
import Cars from './components/cars/cars';
import Services from './components/services/services';
import Budget from './components/budgets/budgets';
import Employees from './components/employees/employees';
import Stock from './components/stock/stock';
import Billing from './components/billing/billings';
import './App.css';
import Inspection from './components/inspection/inspections';

class RouterAfterLogin extends Component {
    render() { 
        return (
            <div style={{width: '98.7vw', height: '100vh'}}>
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
								<Redirect from="/Login" exact to="/Início" />
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
								<Redirect from="/" exact to="/Início" />
								<Redirect to="/not-found" />
							</Switch>
						</Grid>
					</Grid>
				</Grid>
            </div>
        );
    }
}

export default RouterAfterLogin;