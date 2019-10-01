import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu'
import { Typography, Grid, Button } from '@material-ui/core';
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import HomeMobile from './homeMobile';
import NotFound from './../notFound/notFound';
import SearchBudgetMobile from './searchBudgetMobile';
import '../../fonts.css'
import SearchClientsMobile from './clients/searchClientsMobile';
import SearchCarsMobile from './cars/searchCarsMobile';
import SearchServicesMobile from './services/searchServicesMobile';
import SearchEmployeesMobile from './employees/searchEmployeesMobile';
import SearchStockMobile from './searchStockMobile';
import SearchBillingMobile from './searchBillingMobile';
import SearchInspectionMobile from './searchInspectionMobile';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Build from '@material-ui/icons/Build'
import AttachMoney from '@material-ui/icons/AttachMoney'
import Person from '@material-ui/icons/Person'
import LocalMall from "@material-ui/icons/LocalMall"
import Payment from "@material-ui/icons/Payment"
import Visibility from "@material-ui/icons/Visibility"
import { Link } from "react-router-dom";


class AppBarMobile extends Component {
    state = {
        menuBarOpen: false
    };

    handleDrawerMotion = (state) => {
        const menuBarOpen = state;
        this.setState({ menuBarOpen })
    };

    render() {
        const { menuBarOpen } = this.state; 
        return (
            <React.Fragment>                
                <AppBar style={{height: 45, background:'lightseagreen'}}>
                    <Grid container alignItems='center'>
                        <Grid item>
                            <Button onClick={() => this.handleDrawerMotion(true)}>                                
                                <Menu style={{fontSize: 30}}/>
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
                <Drawer disableSwipeToOpen open={menuBarOpen} onClose={() => this.handleDrawerMotion(true)}>
                    <IconButton onClick={() => this.handleDrawerMotion(false)}>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <MenuList>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Início'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Home/>
                                </ListItemIcon>
                                <Typography variant="inherit">Início</Typography>
                            </MenuItem>
                        </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Clientes'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <SupervisorAccount/>
                                </ListItemIcon>
                                <Typography variant="inherit">Clientes</Typography>
                            </MenuItem>
                        </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Carros'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <DirectionsCar/>
                                </ListItemIcon>
                                <Typography variant="inherit">Carros</Typography>
                            </MenuItem>
                        </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Serviços'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Build/>
                                </ListItemIcon>
                                <Typography variant="inherit">Serviços</Typography>
                            </MenuItem>
                            </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Orçamentos'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <AttachMoney/>
                                </ListItemIcon>
                                <Typography variant="inherit">Orçamentos</Typography>
                            </MenuItem>
                            </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Mecânicos'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Person/>
                                </ListItemIcon>
                                <Typography variant="inherit">Mecânicos</Typography>
                            </MenuItem>
                            </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Estoque'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <LocalMall/>
                                </ListItemIcon>
                                <Typography variant="inherit">Estoque</Typography>
                            </MenuItem>
                            </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Cobrança'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Payment/>
                                </ListItemIcon>
                                <Typography variant="inherit">Cobrança</Typography>
                            </MenuItem>
                            </Link>
                        <Link onClick={() => this.handleDrawerMotion(false)} style={{textDecoration: 'none'}} to={'/Vistoria'}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Visibility/> 
                                </ListItemIcon>
                                <Typography variant="inherit">Vistoria</Typography>
                            </MenuItem>
                            </Link>
                        </MenuList>
                </Drawer>
            </React.Fragment>
        );
    }
}

export default AppBarMobile;