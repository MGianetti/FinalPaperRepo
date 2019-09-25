import React, { Component } from 'react';
import {Grid, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CarEditFields from './carEditFields';
import UiList from '../../common/uiList';
import Queries from '../../../helpers/Queries';
import SearchBar from './../../common/searchBar';
import Enums from '../../../helpers/Enums';
import DropDown from '../../common/dropDown';
import { Person } from '@material-ui/icons'

class CreateCar extends Component {

    state = {
        info: {
            id: -1,
            plate: "",
            model: "",
            year: "",
            is_Mercosul: false,
            obs: "",
            client_id: ""
        },
        dropDown:{
            items: Enums.ClientDropdown,
            helpText: "Busca cliente baseado em parâmetro",
            defaultText: "Buscar cliente...",
            selected: ''
        },
        searchField:'',
        search:[]
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

    clearSearch = () => {
        let search = []
        this.setState({search});
    }

    async updateSearch(searchString) {
        let search;
        search = await Queries.searchClients(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }

    async createCar(carInfo) {
        await Queries.createCar(carInfo);
    }

    render() {
        const {search, searchField, dropDown} = this.state;

        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <CarEditFields></CarEditFields>
                        <Grid container justify='center'>
                            <Person fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justify='center' style={{padding:10}}> <Button onClick={() => this.createCar(this.state.info)} variant="contained" color='default'>Criar</Button> </Grid>
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' style={{padding:10}}><Button onClick={this.clearSearch} variant="contained" color='default'>Limpar busca</Button></Grid>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

}

export default CreateCar;