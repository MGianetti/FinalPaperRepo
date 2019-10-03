import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import UiList from '../../common/uiList';
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
            items: Enums.CarDropdown,
            helpText: "Digite a informação do carro",
            defaultText: "Procurar por...",
            selected: ''
        },
        serviceDropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Digite a informação do serviço",
            defaultText: "Procurar por...",
            selected: ''
        },
        itemDropDown:{
            items: Enums.ItemDropdown,
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
                        <Grid container direction='row' justify='center' alignContent='center' alignItems='center'>
                            <Grid item style={{padding:15}}> <DirectionsCar fontSize='large'/> </Grid>
                            <Grid item style={{padding:15}}> <DropDown data={{carDropDown}} onChange={this.handleDropMenuChange} style={{width:"50%"}} /> </Grid>
                            <Grid item style={{padding:15}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Car;
                                        this.handleSearchBarChange(e);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='center' alignContent='center' alignItems='center'>
                            <Grid item style={{padding:15}}> <Typography> Adicionar Serviço </Typography> </Grid>
                            <Grid item style={{padding:15}}> <DropDown data={{serviceDropDown}} onChange={this.handleDropMenuChange} style={{width:"50%"}} /> </Grid>
                            <Grid item style={{padding:15}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Service;
                                        this.handleSearchBarChange(e);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container direction='row' justify='center' alignContent='center' alignItems='center'>
                            <Grid item style={{padding:15}}> <Typography> Adicionar Item </Typography> </Grid>
                            <Grid item style={{padding:15}}> <DropDown data={{itemDropDown}} onChange={this.handleDropMenuChange} style={{width:"50%"}} /> </Grid>
                            <Grid item style={{padding:15}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={(e) => {
                                        this.state.searchType = Enums.SearchType.Item;
                                        this.handleSearchBarChange(e);
                                    }}
                                />
                            </Grid>
                            <Grid item style={{padding:15}}>
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
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
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

    async updateSearch(searchString)
    {
        let search;
        switch(this.state.searchType)
        {
            case Enums.SearchType.Car:
                search = await Queries.searchCars(searchString, this.state.carDropDown.selected);
                break;
            case Enums.SearchType.Service:
                search = await Queries.searchServices(searchString, this.state.serviceDropDown.selected);
                break;
            case Enums.SearchType.Item:
                search = await Queries.searchItems(searchString, this.state.itemDropDown.selected);
                break;
            default:
                search = [];
                break;
        }
        this.setState({ search });
    }
    
}

export default CreateBudget;