import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import UiList from './../../common/uiList';
import EmployeeEntityMobile from './employeeEntityMobile'
import Enums from './../../../helpers/Enums';

class SearchEmployeesMobile extends Component {
    state = {
        dropDownSearch:{
            items: Enums.EmployeeDropdown,
            helpText: "Busca funcionário baseado em parâmetro",
            defaultText: "Buscar funcionário...",
            selected: ''
        },
        searchField:'',
        search: [<EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>,
                <EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>, <EmployeeEntityMobile/>]
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };
    
    render() { 
        const { dropDownSearch, searchField, search } = this.state;
        return ( 
            <Grid container justify='center'>
                <Grid container direction='row' justify='center' style={{paddingTop: 60, paddingBottom:10}}>
                    <Paper style={{width: '80%', paddingBottom: 15}}>
                        <Grid container justify='center'> <DropDown data={{dropDownSearch}} onChange={this.handleDropMenuChange} /> </Grid>
                        <Grid container justify='center'> <SearchBar value={searchField} onChange={this.hndleSearchBarChange} /> </Grid>
                    </Paper>
                    <Grid container justify='center' style={{padding:10}}>
                        <UiList maxHeight={600} data={search} />
                    </Grid>
                </Grid>                   
            </Grid> 
        );
    }

}
 
export default SearchEmployeesMobile;

