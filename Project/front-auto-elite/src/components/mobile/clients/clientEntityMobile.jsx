import React, { Component } from 'react';
import { Paper, Grid, Avatar, Typography} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Phone from '@material-ui/icons/Phone';
import Smartphone from '@material-ui/icons/Smartphone';
import Home from '@material-ui/icons/Home';
import DriveEta from '@material-ui/icons/DriveEta';
import Build from '@material-ui/icons/Build';
import DropDown from '../../common/dropDown'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class ClientEntityMobile extends Component {
    state = {
        info: {
            cpf: "03501082185",
            cellPhone: "35988552236",
            telephone: "3539664752",
            name: "Lucas Sevla de Laranjeira",
            cep: "04543120",
            plate:"",
            is_Mercosul:true
        },
        dropDownCars:{
            items: ["Oi","OI"],
            helpText: "Busca carro de um cliente",
            defaultText: "Buscar carro...",
            selected: ''
        },
        dropDownServices:{
            items:["Oi","OI"],
            helpText: "Busca serviço de um cliente",
            defaultText: "Buscar serviço...",
            selected: ''
        }
    };
    render() { 
        const { dropDownCars, dropDownServices } = this.state;
        const { name } = this.state.info;
        return (  

            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container> <Typography variant='subtitle1'>{name}</Typography> </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paper style={{width: '100%'}}>
                        <Grid  container justify='center' style={{padding: 5}}  >
                            <Grid container justify='space-evenly' alignItems='center' style={{width: "100%"}}>
                                <Grid container justify='flex-end' style={{width: "20%"}}>
                                    <Avatar src="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"/>
                                </Grid>
                                <Grid container justify='flex-start' style={{width: "70%"}}>
                                    <Typography variant='subtitle2'>{name}</Typography>                                                                
                                </Grid>
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Typography variant='subtitle2'>CPF: {this.state.info.cpf}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                                <Smartphone/>
                                <Typography variant='subtitle2'>Cel: {this.state.info.cellPhone}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                                <Phone/>
                                <Typography variant='subtitle2'>Tel: {this.state.info.telephone}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                                <Home/>
                                <Typography variant='subtitle2'>Cep: {this.state.info.cep}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, width: "100%"}}>
                                <DriveEta/>
                                <DropDown 
                                    data={{dropDownCars}}
                                    onChange={this.handleDropMenuChange}
                                />                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center'style={{padding: 5, width: "100%"}}>
                                <Build/>
                                <DropDown 
                                    data={{dropDownServices}}
                                    onChange={this.handleDropMenuChange}
                                />                                                                  
                            </Grid>
                        </Grid>
                    </Paper>   
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
 
export default ClientEntityMobile;