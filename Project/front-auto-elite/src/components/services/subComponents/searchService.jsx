import React, { Component } from 'react';
import { Grid, Paper, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import UiList from './../../common/uiList';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';

class SearchService extends Component {
    state = {
        dropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Busca serviço baseado em parâmetro",
            defaultText: "Buscar serviço...",
            selected: 0
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
        this.updateSearch(event.target.value);
    };

    render() {
        const { dropDown, searchField, search } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%', marginTop:10, backgroundColor:'#e0e0e0'}}>
                        <Grid container direction='row' justify='center' alignItems='center'>
                            <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                            {Enums.ServiceDropdown[this.state.dropDown.selected] === Enums.ServiceDropdownType.Summary && <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>}
                            {Enums.ServiceDropdown[this.state.dropDown.selected] === Enums.ServiceDropdownType.Type && 
                            <Grid item style={{padding:20}}>
                                <RadioGroup
                                    aria-label="position"
                                    name="position"
                                    value={this.state.searchField}
                                    onChange={this.handleSearchBarChange}
                                    row
                                >
                                    <FormControlLabel
                                        value={Enums.ServiceType.Corrective}
                                        control={<Radio color="primary" />}
                                        label="Corretivo"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value={Enums.ServiceType.Preventive}
                                        control={<Radio color="primary" />}
                                        label="Preventivo"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value={Enums.ServiceType.Eletronic}
                                        control={<Radio color="primary" />}
                                        label="Eletrônico"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </Grid>}
                        </Grid>
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }

    async updateSearch(searchString) {
        let search;
        search = await Queries.searchServices(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

export default SearchService;