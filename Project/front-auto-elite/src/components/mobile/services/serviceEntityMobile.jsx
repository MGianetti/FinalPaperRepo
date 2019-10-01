import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Face'
import Build from '@material-ui/icons/Build';
import DropDown from '../../common/dropDown'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, 
    Typography, Button, TextField } from '@material-ui/core';
import { RemoveRedEye, AttachMoney, Assignment, Delete, Edit, Person, DriveEta } from '@material-ui/icons';


class ServiceEntityMobile extends Component {
    state = {
        info: {
            obs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
            inspection: 'Obrigatória',
            description: 'Farol de neblina não funciona',
            code: 'SA34F5C6',
            employee: 'Tiago',
            car: 'Fox City 1.0 prata 4p',
            owner: 'João Pedro Batista Borges',
            type: 'Corretivo'
        },
        dropDownBudgets:{
            items: ['Budget not found'],
            helpText: "Busca orçamentos de um serviço",
            defaultText: "Buscar orçamento...",
            selected: ''
        },
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    render() { 
        const { dropDownBudgets, budgets } = this.state;
        const { obs, inspection, description, code, employee, car, owner, type } = this.state.info;
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container> <Typography variant='subtitle1'>{description}</Typography> </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paper style={{width: '100%'}}>
                        <Grid  container justify='center' style={{padding: 5}}  >
                            <Grid container justify='space-evenly' alignItems='center' style={{width: "100%"}}>
                                <Grid container justify='flex-end' style={{width: "20%"}}>
                                    <Avatar src="https://i.ibb.co/D13hC4r/service-avatar.png"/>
                                </Grid>
                                <Grid container justify='flex-start' style={{width: "70%"}}>
                                    <Typography variant='subtitle2'>Serviço {type}</Typography>                                                                
                                </Grid>
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Person/>
                                <Typography variant='subtitle2'>Mecânico: {employee}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Face/>
                                <Typography variant='subtitle2'>Dono: {owner}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <DriveEta/>
                                <Typography variant='subtitle2'>Carro: {car}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <RemoveRedEye/>
                                <Typography variant='subtitle2'>Vistoria: {inspection}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center'style={{padding: 5, width: "100%"}}>
                                <AttachMoney/>
                                <DropDown 
                                    data={{dropDownBudgets}}
                                    onChange={this.handleDropMenuChange}
                                />                                                                  
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center'style={{padding: 5, width: "100%"}}>
                                <Assignment/>
                                <TextField
                                        disabled
                                        name='serviceObservations'
                                        margin='normal'
                                        label="Observações"
                                        placeholder="Observações sobre o serviço"
                                        value={obs}
                                        variant="outlined"
                                        style={{backgroundColor:'#efefef', width:'100%', justify:'center'}} 
                                        rowsMax='5'
                                        multiline   
                                    />                                                                 
                            </Grid>
                        </Grid>
                    </Paper>   
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}
 
export default ServiceEntityMobile;