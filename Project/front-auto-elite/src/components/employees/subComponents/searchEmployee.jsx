import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import EmployeeEntity from './employeeEntity';
import UiList from '../../common/uiList';

class SearchEmployee extends Component {
    state = {
        dropDown:{
            items: ["ID", "Nome"],
            helpText: "Busca funcionário baseado em parâmetro",
            defaultText: "Buscar funcionário...",
            selected: ''
        },
        searchField:'',
        searchedEmployees:[
            {'5b21ca3eeb7f6fbccd471815': <EmployeeEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <EmployeeEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471817': <EmployeeEntity key='5b21ca3eeb7f6fbccd471817'/>},
            {'5b21ca3eeb7f6fbccd471818': <EmployeeEntity key='5b21ca3eeb7f6fbccd471818'/>}
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
        const { dropDown, searchField, searchedEmployees } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Grid justify='center' container style={{width:'100%'}} >
                        <Paper elevation='5' style={{width:'90%', marginTop:10}}>
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
                        <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    <UiList
                                        maxHeight={600}
                                        data={searchedEmployees}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment> 
        );
    };
};

export default SearchEmployee;