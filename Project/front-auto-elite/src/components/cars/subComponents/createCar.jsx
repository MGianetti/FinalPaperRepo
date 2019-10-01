import React, { Component } from 'react';
import {Grid, Button, Fab} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CarEditFields from './carEditFields';
import UiList from '../../common/uiList';
import Queries from '../../../helpers/Queries';
import SearchBar from './../../common/searchBar';
import Enums from '../../../helpers/Enums';
import DropDown from '../../common/dropDown';
import { Person, Add, Close } from '@material-ui/icons'
import ClientEntity from '../../clients/subComponents/clientEntity';

class CreateCar extends Component {

    state = {
        info: {
            plate: "",
            model: "",
            year: 0,
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
        search:[],
        client: null
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
        let search = [];
        this.setState({search});
    }

    unselectClient = () => {
        const client = null;
        this.setState({client});
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    }

    handleSwitchCheckChange = (event) => {
        let { info } = this.state;
        info.is_Mercosul = event.target.checked;
        this.setState({ info });
    }

    selectClient = clientInfo => {
        const client_id = clientInfo.id;
        const client =  <Grid key={clientInfo.id} container justify='center' alignItems='center'>
                            <Grid item style={{width:"70%"}}><ClientEntity info={clientInfo}></ClientEntity></Grid>
                            <Grid container style={{width:"10%"}} justify='center'>
                                <Fab onClick={this.unselectClient} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab>
                            </Grid>
                        </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.client_id = client_id;
        this.setState({client, info});
    }
    
    async updateSearch(searchString) {
        let search;
        search = await Queries.searchClients(searchString, this.state.dropDown.selected);
        search = search.map(client => {
            const info = client.props.info;
            client = <Grid key={client.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{client}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectClient(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return client;
        });
        this.setState({ search });
    }

    async createCar(carInfo) {
        await Queries.createCar(carInfo);
        const info = {
            plate: "",
            model: "",
            year: 0,
            is_Mercosul: false,
            obs: "",
            client_id: ""
        }
        const client = null;
        alert("Carro criado com sucesso!")
        this.setState({client, info});
    }

    render() {
        const {search, searchField, dropDown, client} = this.state;

        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <CarEditFields info={this.state.info} onFormChange={this.handleFormChange} onSwitchCheckChange={this.handleSwitchCheckChange}></CarEditFields>
                        {!client &&
                        <Grid container justify='center'>
                            <Person fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>
                            </Grid>
                        </Grid>
                        }
                        {client && client}
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