import React, { Component } from 'react';
import ClientList from './clientList';
import { Paper, Grid } from '@material-ui/core';

class SearchClient extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%'}}>
                        <Grid container style={{width:'100%'}} justify='center'>
                            <Grid container style={{width:'100%', padding: 20}}>
                                <Grid item style={{width:'50%'}}>
                                    asd
                                </Grid>
                                <Grid item style={{width:'50%'}}>
                                    awed
                                </Grid>
                            </Grid>
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    <ClientList/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment> 
        );
    };
};

export default SearchClient;
