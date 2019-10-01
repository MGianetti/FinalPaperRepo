import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import DropDown from '../../common/dropDown'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, 
    Typography, TextField } from '@material-ui/core';
import { AttachMoney, Build, Assignment, Person, Phone, Smartphone, Home } from '@material-ui/icons';


class EmployeeEntityMobile extends Component {
    state = {
        dropDownServices:{
            items: ['Service1', 'Service2'],
            helpText: "Busca serviços de um mecânico",
            defaultText: "Buscar serviço...",
            selected: ''
        },
        info: {
            name:"João Pedro Batista Borges",
            cpf:"464.399.448-39",
            cellPhone:"(35) 97595-6532",
            telephone:"(35) 3666-8954",
            cep:"37500-013",
            observations:"Observations about this employee",
            bankAccount:"266559-8"
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
        const { name, cpf, cellPhone, telephone, cep, observations, bankAccount } = this.state.info;
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container> <Typography variant='subtitle1'>{name}</Typography> </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paper style={{width: '100%'}}>
                        <Grid  container justify='center' style={{padding: 5}}  >
                            <Grid container justify='center' alignItems='center' style={{width: "100%"}}>
                                <Grid container justify='center' style={{width: "20%"}}>
                                    <Avatar src="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"/>
                                </Grid>
                                <Grid container justify='center' style={{width: "70%"}}>
                                    <Typography variant='subtitle2'>{name}</Typography>                                                                
                                </Grid>
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Typography variant='subtitle2'>CPF: {cpf}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Smartphone/>
                                <Typography variant='subtitle2'>Cel: {cellPhone}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Phone/>
                                <Typography variant='subtitle2'>Tel: {telephone}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Home/>
                                <Typography variant='subtitle2'>Cep: {cep}</Typography>                                                                
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center' style={{padding: 5, paddingTop:10, width: "100%"}}>
                                <Person/>
                                <Typography variant='subtitle2'>Conta: {bankAccount}</Typography>                                                                
                            </Grid>

                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center'style={{padding: 5, width: "100%"}}>
                                <Build/>
                                <DropDown 
                                    data={{dropDownServices}}
                                    onChange={this.handleDropMenuChange}
                                />                                                                  
                            </Grid>
                            <Divider style={{margin:10,width: '80%'}}/>
                            <Grid container alignItems='center' justify='center'style={{padding: 5, width: "100%"}}>
                                <Assignment/>
                                <TextField
                                        disabled
                                        name='employeeObservations'
                                        margin='normal'
                                        label="Observações"
                                        placeholder="Observações sobre o funcionário"
                                        value={observations}
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

export default EmployeeEntityMobile;