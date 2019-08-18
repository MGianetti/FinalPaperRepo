import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid} from '@material-ui/core';
import Switch from '@material-ui/core/Switch';
import UiList from '../../common/uiList';
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { Person, DirectionsCar } from '@material-ui/icons'
import { Typography, Button } from '@material-ui/core';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';

class CreateCar extends Component {
    state = {
        dropDown:{
            items: Enums.ClientDropdownType,
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
                        <Grid container justify='center' alignContent='center' alignItems='center' style={{width:'100%'}} direction='column'>
                            <Grid container justify='center' alignItems='center' alignContent='center' direction='row'>
                                <DirectionsCar fontSize='large' style={{padding:20}}/>
                                <TextField
                                    style={{padding:20}}
                                    onChange={this.handleChange}
                                    autoFocus
                                    name='carPlate'
                                    margin='normal'
                                    label={Enums.CarDropdown.Plate}
                                    placeholder="Placa do carro"
                                    value={carPlate}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'30%'}}    
                                />
                                <Typography style={{padding:20}} variant='h6'>Mercosul:</Typography>
                                <Switch
                                    style={{padding:20}}
                                    name="carIsMercosul"
                                    value={carIsMercosul}
                                    control={<Switch color="primary"/>}
                                    onChange={this.handleSwitchCheckChange}
                                />
                            </Grid>
                            <Grid item justify='center' alignContent='center' alignItems='center' style={{width:'80%'}}>
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
                                    style={{backgroundColor:'#efefef', width:'100%'}}  
                                />
                            </Grid>
                            <Grid container justify='center' alignItems='center' alignContent='center' direction='row'>
                                <Grid item style={{padding:20}}> <Person fontSize='large'/> </Grid>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange}/> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange}/> </Grid>
                            </Grid>
                            <Grid item style={{padding:20}}> <Button variant="contained" color='default'>Criar</Button> </Grid>
                        </Grid>
                    </Paper>
                    <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                        <UiList data={search}/>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchClients(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

export default CreateCar;