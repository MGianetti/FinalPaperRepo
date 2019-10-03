import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import DropDown from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import UiList from '../../common/uiList'
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';

class PendentBilling extends Component {
    state = {
        dropDown:{
            items: Enums.BillingDropdown,
            helpText: "Digite a informação de busca",
            defaultText: "Buscar por...",
            selected: ''
        },
        searchField:'',
        search: [],
    }

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    }

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    }

    render() {
        const { dropDown, searchField, search } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%', marginTop:10, backgroundColor:'#e0e0e0'}}>
                        <Grid container direction='row' justify='center'>
                            <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                            <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>
                        </Grid>
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment> 
        )
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchPendentBillings(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

export default PendentBilling;