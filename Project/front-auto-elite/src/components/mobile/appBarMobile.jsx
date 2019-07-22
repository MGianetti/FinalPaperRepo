import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Menu from '@material-ui/icons/Menu'
import { Typography, Grid, Button, Paper } from '@material-ui/core';
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
                    <Grid container direction='column' style={{marginTop:'10vh'}} alignContent='space-around'>
                        <Grid item>
                            <div style={{fontSize:'5vw', color:'white' ,fontFamily: 'Montserrat', textAlign: 'center',borderRadius: 10, width: '50vw', height: '45vw', background:'blue'}}>
                                Vistoria
                            </div>
                        </Grid>
                        <Grid item style={{paddingTop: 10}}>
                            <div style={{fontSize:'5vw', color:'white' ,fontFamily: 'Montserrat', textAlign: 'center',borderRadius: 10, width: '50vw', height: '45vw', background:'blue'}}>
                                Criar
                                <p>Orçamento</p>
                            </div>
                        </Grid>
                        <Grid item style={{paddingTop: 10}}>
                            <div style={{fontSize:'5vw', color:'white' ,fontFamily: 'Montserrat', textAlign: 'center',borderRadius: 10, width: '50vw', height: '45vw', background:'blue'}}>
                                Buscar 
                                <p>Orçamento</p>
                            </div>
                        </Grid>
                    </Grid>
                <SwipeableDrawer>
                    Ola
                </SwipeableDrawer>
            </React.Fragment>
        );
    }
}

export default AppBarMobile;