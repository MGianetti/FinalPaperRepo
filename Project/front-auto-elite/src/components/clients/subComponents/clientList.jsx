import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Paper, Grid } from '@material-ui/core';
import ClientEntity from './clientEntity';

class ClientList extends Component {

    render() { 
        return (
            <React.Fragment>    
                <Grid container style={{padding:10, paddingBottom:40}}>
                    <Grid item style={{paddingTop:35}}>
                        <Paper>
                            <List style={{maxHeight: 400, overflow: 'auto'}}>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                                <ListItem>
                                    <ClientEntity/>
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>

        );
    };
};

export default ClientList;