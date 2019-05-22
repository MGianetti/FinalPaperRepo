import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import UiList from './../../common/uiList';

class SearchCar extends Component {
    state = {
        dropDown:{
            items: ["Placa", 'Dono', 'Modelo', 'Ano'],
            helpText: "Busca carro baseado em parâmetro",
            defaultText: "Buscar carro...",
            selected: ''
        },
        searchField:'',
        searchedCars:[
            {'5b21ca3eeb7f6fbccd471815': <h1>CarEntity</h1>},
            {'5b21ca3eeb7f6fbccd471816': <h1>CarEntity</h1>}
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
        const { dropDown, searchField, searchedCars } = this.state; 
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
                                        data={searchedCars}
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

export default SearchCar;