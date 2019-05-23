import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';
import { Person, DirectionsCar } from '@material-ui/icons'
class CreateClient extends Component {
    state = {
        newClientForm:{
            name:'',
            telDDD:'',
            tel:'',
            celDDD:'',
            cel:'',
            cpf:'',
            cep:'',
            houseNumber:'',
            carPlate:'',
            carIsMercosul:false,
            carObservations:''
        }
    };

    handleFormChange = (event) => {
        let newClientForm = this.state;
        newClienteForm[event.target.name] = event.target.value;
        this.setState 
    };

    render() {
        const { name, telDDD, tel, celDDD, cel, cpf, cep, houseNumber, carPlate, carIsMercosul, carObservations} = this.state.newClientForm; 
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%'}}>
                        <Grid justify='center' container style={{width:'100%'}} >
                            <Paper style={{width:'90%'}}>
                                <Grid style={{paddingTop:20}} container justify='center'>
                                    <Person fontSize='large'/>
                                </Grid>
                                <Grid container>
                                    <TextField
                                        onChange={this.handleFormChange}
                                        name='name'
                                        margin='normal'
                                        label="Nome"
                                        placeholder="Nome do novo cliente"
                                        value={name}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'100%'}}    
                                    />
                                </Grid>
                                <Grid container>
                                    <TextField
                                        name='celDDD'
                                        margin='normal'
                                        label="DDD"
                                        placeholder="DDD do celular"
                                        value={celDDD}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'15%'}}    
                                    />
                                    <TextField
                                        name='cel'
                                        margin='normal'
                                        label="Celular"
                                        placeholder="Número do celular do cliente"
                                        value={cel}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'35%'}}    
                                    />
                                    
                                    <TextField
                                        name='telDDD'
                                        margin='normal'
                                        label="DDD"
                                        placeholder="DDD do telefone"
                                        value={telDDD}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'15%'}}    
                                    />
                                    <TextField
                                        name='tel'
                                        margin='normal'
                                        label="Telefone"
                                        placeholder="Número do telefone do cliente"
                                        value={tel}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'35%'}}    
                                    />
                                </Grid>
                                <Grid container>
                                    <TextField
                                        name='cpf'
                                        margin='normal'
                                        label="CPF"
                                        placeholder="CPF do cliente"
                                        value={cpf}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'30%'}}    
                                    />
    
                                    <TextField
                                        name='cep'
                                        margin='normal'
                                        label="CEP"
                                        placeholder="CEP do cliente"
                                        value={cep}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'40%'}}    
                                    />
                                    <TextField
                                        name='houseNumber'
                                        margin='normal'
                                        label="Casa"
                                        placeholder="Número da casa do cliente"
                                        value={houseNumber}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'30%'}}    
                                    />
                                </Grid>
                                    <Grid style={{paddingTop:20}} container justify='center'>
                                        <DirectionsCar fontSize='large'/>
                                    </Grid>
                                <Grid container alignItems='center' justify='center'>
                                    <TextField
                                        name='carPlate'
                                        margin='normal'
                                        label="Placa"
                                        placeholder="Placa do carro do cliente"
                                        value={carPlate}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf', width:'20%'}}    
                                    />
                                    <Typography style={{paddingLeft:60}} variant='h6'>Mercosul:</Typography>
                                    <Switch value={carIsMercosul}/>
                                </Grid>
                                <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                                    <TextField
                                        name='carObservations'
                                        margin='normal'
                                        label="Observações"
                                        placeholder="Observações sobre o carro do cliente"
                                        value={carObservations}
                                        variant="outlined"
                                        style={{backgroundColor:'#dfdfdf',width:'80%'}} 
                                        rowsMax='5'
                                        multiline   
                                    />
                                </Grid>    
                                <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                                    <Button variant="contained" color='default'>Criar</Button>
                                </Grid> 
                            </Paper>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CreateClient;