import React, { Component } from 'react';
import DropDown from '../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Paper, Grid } from '@material-ui/core';
import UiList from './../../common/uiList';
import ClientEntity from './clientEntity';

class SearchClient extends Component {
    state = {
        dropDown:{
            items: ["Placa", 'CPF', 'Nome', 'Telefone', 'Celular', 'CEP'],
            helpText: "Busca cliente baseado em parâmetro",
            defaultText: "Buscar cliente...",
            selected: ''
        },
        searchField:'',
        searchedClients:[
            {'5b21ca3eeb7f6fbccd471815': <ClientEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <ClientEntity key='5b21ca3eeb7f6fbccd471816'/>}
        ]
    };

    //improve performance
    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    //improve performance
    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { dropDown, searchField, searchedClients } = this.state;
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%'}}>
                        <Grid justify='center' container style={{width:'100%'}} >
                            <Paper style={{width:'80%'}}>
                                <Grid container style={{padding: 20}}>
                                    <Grid item style={{width:'50%'}}>
                                        <DropDown                                        
                                            data={{dropDown}}
                                            onChange={this.handleDropMenuChange}
                                        />
                                    </Grid>
                                    <Grid item style={{width:'50%'}}>
                                        <SearchBar 
                                            value={searchField} 
                                            onChange={this.handleSearchBarChange}
                                            />
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    <UiList
                                        data={searchedClients}
                                    />
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