import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/icons/Menu'
import { Typography, Grid, Button } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeMobile from './homeMobile';
import NotFound from './../notFound/notFound';
import SearchBudgetMobile from './searchBudgetMobile';
import '../../fonts.css'
import SearchClientsMobile from './clients/searchClientsMobile';
import SearchCarsMobile from './cars/searchCarsMobile';
import SearchServicesMobile from './services/searchServicesMobile';
import SearchEmployeesMobile from './searchEmployeesMobile';
import SearchStockMobile from './searchStockMobile';
import SearchBillingMobile from './searchBillingMobile';
import SearchInspectionMobile from './searchInspectionMobile';


class AppBarMobile extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>                
                <AppBar style={{height: 45, background:'lightseagreen'}}>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <Button>                                
                                <Menu style={{fontSize:30}}/>
                            </Button>
                        </Grid>
                        <Grid item justify='center'>
                            <Typography>Auto Elite</Typography>
                        </Grid>
                    </Grid>
                </AppBar>
                    <Switch>
                        <Redirect from="/Login" exact to="/Início" />
                        <Route path="/Início" component={HomeMobile} />
                        <Route path="/Clientes" component={SearchClientsMobile} />
                        <Route path="/Carros" component={SearchCarsMobile} />
                        <Route path="/Serviços" component={SearchServicesMobile} />
                        <Route path="/Orçamentos" component={SearchBudgetMobile} />
                        <Route path="/Mecânicos" component={SearchEmployeesMobile} />
                        <Route path="/Estoque" component={SearchStockMobile} />
                        <Route path="/Cobrança" component={SearchBillingMobile} />
                        <Route path="/Vistoria" component={SearchInspectionMobile} />
                        <Route path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/Início" />
                        <Redirect to="/not-found" />
                    </Switch>
                <SwipeableDrawer>
                    Ola
                </SwipeableDrawer>
            </React.Fragment>
        );
    }
}

export default AppBarMobile;