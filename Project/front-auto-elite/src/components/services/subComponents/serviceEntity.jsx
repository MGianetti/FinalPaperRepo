import React, { Component } from 'react';
import DropDown from '../../common/dropDown';

import { Avatar, Grid, Fab, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, 
    Typography, Button, TextField } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { RemoveRedEye, AttachMoney, Assignment, Delete, Edit, Person, DriveEta } from '@material-ui/icons';


class ServiceEntity extends Component {
    state = {
        dropDownBudgets:{
            items: [''],
            helpText: "Busca orçamentos de um serviço",
            defaultText: "Buscar orçamento...",
            selected: ''
        },
        serviceObservations:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    };
    render() {
        const { dropDownBudgets, serviceObservations } = this.state; 
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>Farol de neblina não funciona</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>SA34F5C6</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container style={{padding: 20}}>
                        <Grid container alignItems='center'>
                            <Grid container style={{width:'85%'}} alignItems='center' direction='row' alignContent='space-around'>
                                <Grid item style={{padding: 5, width:'10%'}}>
                                    <Avatar src={"https://i.ibb.co/D13hC4r/service-avatar.png"}/>
                                </Grid>
                                <Grid item style={{padding: 5, width:'40%'}}>
                                    <Typography variant='headline'>Serviço {'Corretivo'}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container style={{width:'15%'}}>
                                <Grid container style={{width:'50%'}}>
                                    <Grid item>
                                        <Fab style={{backgroundColor:'#FA8072'}} size='small'>
                                            <Delete/>
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Grid container style={{width:'50%'}}>
                                    <Grid item>
                                        <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
                                            <Edit/>
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Grid>  
                        </Grid>
                        <Grid container alignItems='center' style={{paddingTop:20}}>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Person/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Mecânico: {'Tiago'}</Typography>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30, paddingLeft:20}}>
                                <RemoveRedEye/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Vistoria: {'Obrigatória'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center' style={{paddingTop:5}}>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <DriveEta/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Carro: {'Fox City 1.0 prata 4p'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center'>
                            <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'40%'}}>
                                <Grid item style={{paddingRight: 4}}>
                                    <Person/>
                                </Grid>
                                <Grid item style={{paddingRight: 6}} >                                    
                                    <Typography variant='title2'>Dono: João Pedro Batista Borges</Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' variant='row' style={{padding:4, paddingTop:10, paddingBottom:10, width:'60%'}}>
                                <Grid item style={{paddingRight: 4}}>
                                    <AttachMoney/>
                                </Grid>
                                <Grid item style={{paddingLeft:5, paddingRight: 2}} >                                    
                                    <Typography variant='h6'>Orçamentos:</Typography>
                                </Grid>
                                <Grid item>                                    
                                    <DropDown 
                                        data={{ dropDownBudgets }}
                                        onChange={this.handleDropMenuChange}
                                    />
                                </Grid>
                                <Grid item style={{padding: 8}}>                                    
                                    <Button variant="contained" color='default'>Ver</Button>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' justify='flex-start' variant='row' style={{padding:4, paddingTop:10, paddingBottom:10}}>
                                <Grid item style={{paddingRight: 4}}>
                                    <Assignment/>
                                </Grid>
                                <Grid item style={{paddingLeft:5, paddingRight: 2, width:'80%'}} >                                    
                                    <TextField
                                        disabled
                                        name='carObservations'
                                        margin='normal'
                                        label="Observações"
                                        placeholder="Observações sobre o carro do cliente"
                                        value={serviceObservations}
                                        variant="outlined"
                                        style={{backgroundColor:'#efefef', width:'100%', justify:'center'}} 
                                        rowsMax='5'
                                        multiline   
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    };
};

export default ServiceEntity;