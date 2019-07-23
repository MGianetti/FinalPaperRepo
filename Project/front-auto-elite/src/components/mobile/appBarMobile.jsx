import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/icons/Menu'
import { Typography, Grid, Button } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomeMobile from './homeMobile';
import NotFound from './../notFound/notFound';
import CreateBudgetMobile from './createBudgetMobile';
import SearchBudgetMobile from './searchBudgetMobile';
import CreateInspectionMobile from './createInspectionMobile';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import '../../fonts.css'


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
                        <Route path="/OrçamentoCriar" component={CreateBudgetMobile} />
                        <Route path="/OrçamentoBuscar" component={SearchBudgetMobile} />
                        <Route path="/Vistoria" component={CreateInspectionMobile} />
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