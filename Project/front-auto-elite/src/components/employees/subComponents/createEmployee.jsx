import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { Person } from '@material-ui/icons'

class CreateEmployee extends Component {
    state = {
        newEmployeeForm:{
            name:"",
            cpf:"",
            celDDD:"",
            cel:"",
            telDDD:"",
            tel:"",
            cep:"",
            houseNumber:"",
            bankAccount:"",
            employeeObservation:""
        }
    };

    handleFormChange = (event) => {
        let { newEmployeeForm } = this.state;
        newEmployeeForm[event.target.name] = event.target.value;
        this.setState({ newEmployeeForm })
    };

    handleSwitchCheckChange = (event) => {
        let { newEmployeeForm } = this.state;
        newEmployeeForm[event.target.name] = event.target.checked;
        this.setState({ newEmployeeForm })
    };

    render() {
        const { name, telDDD, tel, celDDD, cel, cpf, cep, houseNumber, employeeObservations} = this.state.newEmployeeForm; 
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <Grid style={{paddingTop:20, width:'90%'}} container justify='center'>
                                <Person fontSize='large'/>
                            </Grid>
                            <Grid container style={{width:'90%'}} justify='space-evenly'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    autoFocus
                                    name='name'
                                    margin='normal'
                                    label="Nome"
                                    placeholder="Nome do novo funcionário"
                                    value={name}
                                    variant="outlined"
                                    inputProps={{maxLength: 100}}
                                    style={{backgroundColor:'#efefef', width:'99.4%'}}    
                                />
                            </Grid>
                            <Grid container style={{width:'90%'}} justify='space-evenly'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='cpf'
                                    margin='normal'
                                    label="CPF"
                                    placeholder="CPF do funcionário"
                                    value={cpf}
                                    variant="outlined"
                                    inputProps={{maxLength: 11}}
                                    style={{backgroundColor:'#efefef', width:'41.65%'}}    
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='celDDD'
                                    margin='normal'
                                    label="DDD"
                                    placeholder="DDD do celular"
                                    value={celDDD}
                                    variant="outlined"
                                    inputProps={{maxLength: 2}}
                                    style={{backgroundColor:'#efefef', width:'14.7%'}}  
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='cel'
                                    margin='normal'
                                    label="Celular"
                                    placeholder="Número do celular do funcionário"
                                    value={cel}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'41.65%'}}    
                                />
                                

                            </Grid>
                            <Grid style={{width:'90%'}} container justify='space-evenly'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='telDDD'
                                    margin='normal'
                                    label="DDD"
                                    placeholder="DDD do telefone"
                                    value={telDDD}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'14.7%'}} 
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='tel'
                                    margin='normal'
                                    label="Telefone"
                                    placeholder="Número do telefone do funcionário"
                                    value={tel}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'34.3%'}}    
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='cep'
                                    margin='normal'
                                    label="CEP"
                                    placeholder="CEP do funcionário"
                                    value={cep}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'34.3%'}}    
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='houseNumber'
                                    margin='normal'
                                    label="Casa"
                                    placeholder="Número da casa do funcionário"
                                    value={houseNumber}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'14.7%'}}     
                                />
                            </Grid>
                            <Grid style={{width:'90%'}} container alignItems='center' justify='center'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='agency'
                                    margin='normal'
                                    label="Agência"
                                    placeholder="Agência"
                                    value={houseNumber}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'25%'}}    
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='account'
                                    margin='normal'
                                    label="Conta"
                                    placeholder="Conta"
                                    value={houseNumber}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'25%'}}    
                                />
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='digit'
                                    margin='normal'
                                    label="Dígito"
                                    placeholder="Dígito"
                                    value={houseNumber}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'10%'}}    
                                />
                            </Grid>
                            <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                                <TextField
                                    onChange={this.handleFormChange}
                                    name='employeeObservations'
                                    margin='normal'
                                    label="Observações"
                                    placeholder="Observações sobre o funcionário"
                                    value={employeeObservations}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef',width:'80%'}} 
                                    rowsMax='5'
                                    multiline   
                                />
                            </Grid>    
                            <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                                <Button variant="contained" color='default'>Criar</Button>
                            </Grid> 
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
};

export default CreateEmployee;