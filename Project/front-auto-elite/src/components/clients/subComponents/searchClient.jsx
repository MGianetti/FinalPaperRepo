import React, { Component } from 'react';
import ClientList from './clientList';
import DropDown from '../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Paper, Grid } from '@material-ui/core';

class SearchClient extends Component {
    state = {
        dropDown:{
            items: ["Placa", 'CPF', 'Nome', 'Telefone', 'Celular', 'CEP'],
            helpText: "Busca cliente baseado em parâmetro",
            defaultText: "Buscar por...",
            selected: ''
        },
        searchField:''
    };

    //improve performance
    handleDropMenuChange = event => {
        let dropDown = this.state.dropDown;
        dropDown['selected'] = event.target.value;
        this.setState({dropDown});
    };

    //improve performance
    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { dropDown, searchField } = this.state;
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%'}}>
                        <Grid container style={{width:'100%'}} justify='center'>
                            <Grid container style={{width:'100%', padding: 20}}>
                                <Grid item style={{width:'50%'}}>
                                    <DropDown 
                                        data={dropDown}
                                        onChange={this.handleDropMenuChange}
                                    />
                                </Grid>
                                <Grid item style={{width:'50%'}}>
                                    <SearchBar value={searchField} onChange={this.handleSearchBarChange}/>
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
