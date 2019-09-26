import React, { Component } from 'react';
import { Paper, Grid, Avatar, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Phone from '@material-ui/icons/Phone';
import Smartphone from '@material-ui/icons/Smartphone';
import Home from '@material-ui/icons/Home';
import DriveEta from '@material-ui/icons/DriveEta';
import Build from '@material-ui/icons/Build';
import DropDown from '../common/dropDown';

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
        }
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };
    
    render() { 
        const { dropDownCars, dropDownServices } = this.state;
        return ( 
            <Grid container justify='center' style={{paddingTop: 100}}>
                <Paper style={{width: '80%'}}>
                    <Grid  container justify='center' style={{padding: 10}}  >
                        <Grid container justify='space-evenly' alignItems='center' style={{width: "100%"}}>
                            <Grid container justify='flex-end' style={{width: "20%"}}>
                                <Avatar src={"https://i.ibb.co/NnTpQtM/car-avatar.png"}/>
                            </Grid>
                            <Grid container justify='flex-start' style={{width: "70%"}}>
                                <Typography variant='headline'>JEM-2446</Typography>                                                                
                            </Grid>
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{paddingTop:10, width: "100%"}}>
                            <Typography variant='headline'><p>{this.state.info.model}</p></Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>Ano: {this.state.info.year}</Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>Serviço ativo:{1}</Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 0, width: "100%"}}>
                            <Typography variant='headline'>
                                Serviços já feitos:
                                <Grid container justify='center'>
                                    <p>{this.state.dropDownServices.items.length}</p>
                                </Grid>
                            </Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <Typography variant='headline'>
                                Dono:
                                <Grid container justify='center'>
                                    <p>{this.state.info.Client.name}</p>
                                </Grid>
                            </Typography>                                                                
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                        <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                            <DriveEta/>
                            {/* <DropDown 
                                data={{dropDownCars}}
                                onChange={this.handleDropMenuChange}
                            />*/}
                        </Grid>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>
                </Paper>   
            </Grid>
        );
    }

}
 
export default SearchCarsMobile;

