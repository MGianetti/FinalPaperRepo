import React, { Component } from 'react';
import { Paper, Grid, Avatar, Typography} from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Divider from '@material-ui/core/Divider';
import Build from '@material-ui/icons/Build';
import Done from '@material-ui/icons/Done';
import HourglassEmpty from '@material-ui/icons/HourglassEmpty'
import Star from '@material-ui/icons/Star'
import Face from '@material-ui/icons/Face'
import DropDown from '../../common/dropDown';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class CarEntity extends Component {
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
        const { dropDownServices } = this.state;
        const { plate, model, year, Client } = this.state.info;
        return ( 

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container> <Typography variant='title'>{plate}</Typography> </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paper style={{width: '100%'}}>
                        <Grid  container justify='center' style={{padding: 5}}  >
                            <Grid container justify='center' alignItems='center' style={{width: "100%"}}>
                                <Grid container direction='row' justify='center' style={{width: "60%"}}>
                                    <Avatar src={"https://i.ibb.co/NnTpQtM/car-avatar.png"}/>
                                    <Typography style={{paddingLeft: 10}} variant='headline'>{plate}</Typography>                                                                
                                </Grid>
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{paddingTop:10, width: "100%"}}>
                                <Typography align='center' variant='headline'><p>{this.state.info.model}</p></Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                                <Typography variant='headline'>
                                    <Star/>Ano: {year}
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
                                    {Client.name}
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
                </ExpansionPanelDetails>
            </ExpansionPanel>
         );
    }
}
 
export default CarEntity;