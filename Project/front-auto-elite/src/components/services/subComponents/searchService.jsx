import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import UiList from './../../common/uiList';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';

class SearchService extends Component {
    state = {
        dropDown:{
            items: [Enums.ServiceDropdown.Name, Enums.ServiceDropdown.Type],
            helpText: "Busca serviço baseado em parâmetro",
            defaultText: "Buscar serviço...",
            selected: ''
        },
        searchField:'',
        search:[]
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
        this.updateSearch();
    };

    render() {
        const { dropDown, searchField, search } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper elevation='5' style={{width:'90%', marginTop:10, backgroundColor:'#e0e0e0'}}>
                        <Grid container direction='row' justify='center'>
                            <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                            <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchServices(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

export default SearchService;