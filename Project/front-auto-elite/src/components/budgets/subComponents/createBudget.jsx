import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import UiList from '../../common/uiList';
import CarEntityMiniature from './../../cars/subComponents/carEntityMiniature'
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { DirectionsCar } from '@material-ui/icons'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Enums from './../../../helpers/Enums';
import Queries from './../../../helpers/Queries';

class CreateBudget extends Component {
    state = {
        carDropDown:{
            items: [Enums.CarDropdown.Plate, Enums.CarDropdown.Client],
            helpText: "Digite a informação do carro",
            defaultText: "Procurar por...",
            selected: ''
        },
        serviceDropDown:{
            items: [Enums.ServiceDropdown.Type, Enums.ServiceDropdown.Name],
            helpText: "Digite a informação do serviço",
            defaultText: "Procurar por...",
            selected: ''
        },
        itemDropDown:{
            items: [Enums.ItemDropdown.Name],
            helpText: "Digite a informação do item",
            defaultText: "Procurar por...",
            selected: ''
        },
        newBudgetForm:{
            car: ''
        },
        searchType: Enums.SearchType.NoSearch,
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
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Car;
                                        this.handleSearchBarChange(e);
                                    }}
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
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Service;
                                        this.handleSearchBarChange(e);
                                    }}
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
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Item;
                                        this.handleSearchBarChange(e);
                                    }}
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
                <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                    <Grid container justify='center' style={{width:'100%'}} direction='column' alignItems='center'>
                        <Typography>
                            Search Results
                        </Typography>
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
        let search;
        switch(this.state.searchType)
        {
            case Enums.SearchType.Car:
                search = Queries.searchCars(searchString, this.state.carDropDown.selected);
                break;
            case Enums.SearchType.Service:
                search = Queries.searchServices(searchString, this.serviceDropDown.selected);
                break;
            case Enums.SearchType.Item:
                search = Queries.searchItems(searchString, this.itemDropDown.selected);
                break;
            default:
                search = [];
                break;
        }
        this.setState({ search });
    }

    searchCars(searchString, searchType)
    {
        //TODO: make this function search and return cars
        return [
            {'carPlaceholder1': <CarEntityMiniature key='carPlaceholder1'/>},
            {'carPlaceholder2': <CarEntityMiniature key='carPlaceholder2'/>},
            {'carPlaceholder3': <CarEntityMiniature key='carPlaceholder3'/>},
        ] //placeholder search
    }

    
}

export default CreateBudget;