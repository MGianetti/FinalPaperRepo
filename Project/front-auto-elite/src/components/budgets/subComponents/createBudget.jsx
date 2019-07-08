import React, { Component } from 'react';
import {Grid, MenuItem} from '@material-ui/core';
import UiList from '../../common/uiList';
import CarEntity from './../../cars/subComponents/carEntity'
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Person, DirectionsCar } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core';

class CreateBudget extends Component {
    state = {
        dropDown:{
            items: ["Placa", 'Cliente', 'Modelo'],
            helpText: "Digite a informação do carro",
            defaultText: "Procurar por...",
            selected: ''
        },
        newBudgetForm:{
            car: ''
        },
        carSearchField:'',
        searchedCars:[
            {'5b21ca3eeb7f6fbccd471815': <CarEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <CarEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471817': <CarEntity key='5b21ca3eeb7f6fbccd471817'/>},
        ],
             
    };

    handleChange = event => {
        let { newBudgetForm } = this.state;
        newBudgetForm[event.target.name] = event.target.value;
        this.setState({ newBudgetForm })
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    handleSearchBarChange = event => {
        this.setState({clientSearchField: event.target.value})
    };

    render() {
        const { clientSearchField, searchedCars, dropDown } = this.state;
        const { car } = this.state.newBudgetForm;
        
        return ( 
        <React.Fragment>  
            <Grid container justify='center' style={{paddingTop:25}}>
                <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                    <Grid container justify='center' style={{width:'100%'}}>
                        <Grid container style={{paddingTop:20}} justify='center'>
                            <DirectionsCar fontSize='large'/>
                        </Grid>
                        <Grid container style={{width:'70%', paddingBottom:20}} justify='center'>
                            <DropDown
                                data={{dropDown}}
                                onChange={this.handleDropMenuChange}
                                style={{width:"50%"}}
                            />
                            <Grid item justify='center' style={{paddingLeft:40}}>
                                <SearchBar 
                                    value={clientSearchField} 
                                    onChange={this.handleSearchBarChange}
                                    />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation='5' style={{width:'60%', marginTop:15}}>
                    <Grid container justify='center' style={{width:'100%'}}>
                        <Grid item style={{paddingTop:30}}>                                  
                            <UiList data={searchedCars}/>
                        </Grid>
                    </Grid> 
                </Paper>
            </Grid>
        </React.Fragment>
        );
    }
}

export default CreateBudget;