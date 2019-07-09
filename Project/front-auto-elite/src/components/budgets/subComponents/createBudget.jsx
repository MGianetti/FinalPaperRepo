import React, { Component } from 'react';
import {Grid, MenuItem} from '@material-ui/core';
import UiList from '../../common/uiList';
import CarEntity from './../../cars/subComponents/carEntity'
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Person, DirectionsCar } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core';
import ServiceEntity from '../../services/subComponents/serviceEntity';
import TextField from '@material-ui/core/TextField';

class CreateBudget extends Component {
    state = {
        carDropDown:{
            items: ["Placa", 'Cliente', 'Modelo'],
            helpText: "Digite a informação do carro",
            defaultText: "Procurar por...",
            selected: ''
        },
        serviceDropDown:{
            items: ["Tipo", 'Nome', 'Modelo'],
            helpText: "Digite a informação do serviço",
            defaultText: "Procurar por...",
            selected: ''
        },
        itemDropDown:{
            items: ["Placa", 'Cliente', 'Modelo'],
            helpText: "Digite a informação do item",
            defaultText: "Procurar por...",
            selected: ''
        },
        newBudgetForm:{
            car: ''
        },
        searchField:'',
        search: [],
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
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    handleFormChange = (event) => {
        let { newBudgetForm } = this.state;
        newBudgetForm[event.target.name] = event.target.value;
        this.setState({ newBudgetForm })
    };

    render() {
        const { carDropDown, serviceDropDown, itemDropDown, searchField, search } = this.state;
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
                                data={{carDropDown}}
                                onChange={this.handleDropMenuChange}
                                style={{width:"50%"}}
                            />
                            <Grid item justify='center' style={{paddingLeft:40}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                    />
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Typography>
                                Adicionar Serviço
                            </Typography>
                        </Grid>
                        <Grid container style={{width:'70%', paddingBottom:20}} justify='center'>
                            <DropDown
                                data={{serviceDropDown}}
                                onChange={this.handleDropMenuChange}
                                style={{width:"50%"}}
                            />
                            <Grid item justify='center' style={{paddingLeft:40}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                    />
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Typography>
                                Adicionar Item
                            </Typography>
                        </Grid>
                        <Grid container style={{width:'70%', paddingBottom:20}} justify='center'>
                            <DropDown
                                data={{itemDropDown}}
                                onChange={this.handleDropMenuChange}
                                style={{width:"50%"}}
                            />
                            <Grid item justify='center' style={{paddingLeft:10, paddingRight:10}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                    />
                            </Grid>
                            <Grid item style={{width:'10%'}} justify='space-evenly'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    autoFocus
                                    name='name'
                                    margin='normal'
                                    label="Quantidade"
                                    placeholder="Quantidade"
                                    value={'1'}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'99.4%'}}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation='5' style={{width:'60%', marginTop:15}}>
                    <Grid container justify='center' style={{width:'100%'}}>
                        <Grid item style={{paddingTop:30}}>                                  
                            <UiList data={search}/>
                        </Grid>
                    </Grid> 
                </Paper>
            </Grid>
        </React.Fragment>
        );
    }

    updateSearch(searchString)
    {
        let search = this.search(searchString);
        this.setState({ search });
    }

    search(searchString)
    {
        //TODO: make this function search and return cars, services and items
        return [
            {'5b21ca3eeb7f6fbccd471815': <CarEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <CarEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471817': <CarEntity key='5b21ca3eeb7f6fbccd471817'/>},
        ] //placeholder search
    }
}

export default CreateBudget;