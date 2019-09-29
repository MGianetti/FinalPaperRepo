import React, { Component } from 'react';
import { Paper, Grid, Avatar, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Build from '@material-ui/icons/Build';
import Done from '@material-ui/icons/Done';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty'
import Star from '@material-ui/icons/Star'
import Face from '@material-ui/icons/Face'
import DropDown from '../common/dropDown';
import Enums from '../../helpers/Enums';
import SearchBar from '../common/searchBar';

class SearchCarsMobile extends Component {
    state = {
        info: {
            id: -1,
            plate: "JEM2446",
            model: "Fox Prata- gasolina 2p",
            year: 2004,
            is_Mercosul: false,
            obs: "Observação sobre o fox",
            Client: {
                name: "Mateus Gianetti de Jesus",
                cpf: "44489977824"
            }
        },
        dropDownServices:{
            items: ['Service not found'],
            helpText: "Busca serviços de um carro",
            defaultText: "Buscar serviço...",
            selected: ''
        }, 
        dropDownSearch:{
            items: Enums.CarDropdown,
            helpText: "Busca carro baseado em parâmetro",
            defaultText: "Buscar carro...",
            selected: ''
        },
        searchField:'',
        search: []
    };

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };
    
    render() { 
        const { dropDownCars, dropDownServices, dropDownSearch, searchField } = this.state;
        return ( 
            <Grid container justify='center'>
                <Paper style={{width: '80%'}}>
                    <Grid container direction='row' justify='center' style={{paddingTop: 50, paddingBottom:50}}>
                        <Grid item > <DropDown data={{dropDownSearch}} onChange={this.handleDropMenuChange} /> </Grid>
                        <Grid item > <SearchBar value={searchField} onChange={this.hndleSearchBarChange} /> </Grid>
                    </Grid>
                </Paper>
                <Paper style={{width: '80%'}}>
                    <Grid  container justify='center' style={{padding: 10}}  >
                        <Grid container justify='center' alignItems='center' style={{width: "100%"}}>
                            <Grid container direction='row' justify='center' style={{width: "60%"}}>
                                <Avatar src={"https://i.ibb.co/NnTpQtM/car-avatar.png"}/>
                                <Typography style={{paddingLeft: 10}} variant='headline'>JEM-2446</Typography>                                                                
                            </Grid>
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{paddingTop:10, width: "100%"}}>
                            <Typography variant='headline'><p>{this.state.info.model}</p></Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>
                                <Star/>Ano: {this.state.info.year}
                            </Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>
                                <HourglassEmpty/>Serviço ativo:{1}
                            </Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 0, width: "100%"}}>
                            <Typography variant='headline'>
                                <Done/>
                                Serviços já feitos:
                            </Typography>                                                                
                            <Grid container justify='center' >
                                <p>{this.state.dropDownServices.items.length}</p>
                            </Grid>
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>
                                <Face/>Dono:
                            </Typography>                                                                
                            <Grid container justify='center'>
                                {this.state.info.Client.name}
                            </Grid>
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid alignItems='center' container justify='center' style={{padding: 5, width: "100%"}}>
                            <Build/>
                            <DropDown 
                                data={{dropDownServices}}
                                onChange={this.handleDropMenuChange}
                            />
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>
                </Paper>   
            </Grid>
        );
    }

}
 
export default SearchCarsMobile;

