import React, { Component } from 'react';
import DropDown from '../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Paper, Grid } from '@material-ui/core';
import UiList from './../../common/uiList';
import ClientEntity from './clientEntity';
import EditClient from './editClient';
import Enums from './../../../Enums'

class SearchClient extends Component {
    state = {
        dropDown:{
            items: [Enums.ClientDropdown.Name, Enums.ClientDropdown.CPF, Enums.ClientDropdown.Phone],
            helpText: "Busca cliente baseado em parâmetro",
            defaultText: "Buscar cliente...",
            selected: ''
        },
        searchField:'',
        search:[],
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
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    render() {
        const { dropDown, searchField, search } = this.state;
        return ( 
            <React.Fragment>
                <Grid container style={{width:'100%'}} justify='center' alignItems='center' direction='row' alignContent='space-around'>                
                    <Paper elevation={5} style={{width:'90%', marginTop:10}}>
                        <Grid container style={{width:'100%', padding:20}} justify='center' alignItems='center' direction='row' alignContent='space-around'>
                            <Grid item style={{padding:20}}>
                                <DropDown
                                    data={{dropDown}}
                                    onChange={this.handleDropMenuChange}
                                />
                            </Grid>
                            <Grid item style={{padding:20}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation={5} style={{width:'90%', marginTop:15}}>
                        <UiList
                            maxHeight={600}
                            data={search}
                        />
                    </Paper>
                </Grid>
            </React.Fragment> 
        );
    }

    updateSearch(searchString)
    {
        let search;
        search = this.searchClients(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }

    searchClients(searchString, searchType)
    {
        //TODO: make this function search and return clients
        return [
            {'clientPlaceholder1': <ClientEntity key='clientPlaceholder1'/>},
            {'clientPlaceholder2': <ClientEntity key='clientPlaceholder2'/>},
            {'clientPlaceholder3': <ClientEntity key='clientPlaceholder3'/>},
        ] //placeholder search
    }
}

export default SearchClient;
