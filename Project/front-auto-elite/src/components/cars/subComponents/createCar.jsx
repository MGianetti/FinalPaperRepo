import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid, MenuItem} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import UiList from '../../common/uiList';
import ClientEntity from './../../clients/subComponents/clientEntity';
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Person, DirectionsCar } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core';
import Enums from './../../../Enums';

class CreateCar extends Component {
    state = {
        dropDown:{
            items: [Enums.ClientDropdown.Name, Enums.ClientDropdown.CPF, Enums.ClientDropdown.Phone],
            helpText: "Digite a informação do cliente",
            defaultText: "Associar Cliente...",
            selected: ''
        },
        newCarForm:{
            carPlate:'',
            carIsMercosul:false,
            carObservations:''
        },
        searchField:'',
        search: [],
             
    };

    handleChange = name => event => {
        let { newCarForm } = this.state;
        newCarForm[event.target.name] = event.target.value;
        this.setState({ newCarForm })
    };

    handleSwitchCheckChange = (event) => {
        let { newCarForm } = this.state;
        newCarForm[event.target.name] = event.target.checked;
        this.setState({ newCarForm })
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

    render() {
        const { searchField, search, dropDown } = this.state;
        const { carPlate,carIsMercosul } = this.state.newCarForm;
        
        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}}>
                            <Grid container style={{paddingTop:20}} justify='center'>
                                <DirectionsCar fontSize='large'/>
                            </Grid>
                            <Grid container style={{width:'90%'}} justify='center' alignItems='center'>
                                <TextField
                                    onChange={this.handleChange}
                                    autoFocus
                                    name='carPlate'
                                    margin='normal'
                                    label="Placa"
                                    placeholder="Placa do carro"
                                    value={carPlate}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'30%'}}    
                                />
                                <Typography style={{paddingLeft:40}} variant='h6'>Mercosul:</Typography>
                                <Switch
                                    name="carIsMercosul"
                                    value={carIsMercosul}
                                    control={<Switch color="primary" />}
                                    onChange= {this.handleSwitchCheckChange}
                                />
                            </Grid>
                            <Grid container style={{width:'90%'}} justify='space-evenly'>
                                    <TextField
                                        onChange={this.handleChange}
                                        name="carObservations"
                                        margin="normal"
                                        label="Observações"
                                        placeholder="Observações..."
                                        fullWidth
                                        multiline
                                        rowsMax = '5'
                                        variant="outlined"
                                        style={{backgroundColor:'#efefef', width:'60%'}}  
                                    />
                            </Grid>
                            <Grid container style={{paddingTop:20}} justify='center'>
                                <Person fontSize='large'/>
                            </Grid>
                            <Grid container style={{width:'70%', paddingBottom:20}} justify='center'>
                                    <DropDown
                                        data={{dropDown}}
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
                            <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                                <Button variant="contained" color='default'>Criar</Button>
                            </Grid> 
                        </Grid>
                    </Paper>
                    <Paper elevation='5' style={{width:'90%', marginTop:15}}>
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
        let search;
        search = this.searchClients(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }

    searchClients(searchString, searchType)
    {
        //TODO: make this function search and return clients
        return [
            {'clientPlaceholder1': <ClientEntity key='clientPlaceholder1'/>},
            {'clientPlaceholder2': <ClientEntity key='clientPlaceholder2'/>},
            {'clientPlaceholder3': <ClientEntity key='clientPlaceholder3'/>},
        ] //placeholder search
    }
}

export default CreateCar;