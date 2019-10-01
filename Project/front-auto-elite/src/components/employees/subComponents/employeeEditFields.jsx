import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Person } from '@material-ui/icons'

const EmployeeEditFields = ({info, onFormChange}) => {
    const { name, telephone, cellPhone, cpf, cep, bankAccount, observation} = info;
    return ( 
        <React.Fragment>
            <Grid container justify='center' style={{width:'100%'}} >
                <Grid style={{paddingTop:20, width:'90%'}} container justify='center'>
                    <Person fontSize='large'/>
                </Grid>
                <Grid container style={{width:'78%'}} justify='space-evenly'>
                    <TextField
                        onChange={onFormChange}
                        autoFocus
                        name='name'
                        margin='normal'
                        label="Nome"
                        placeholder="Nome do novo funcionário"
                        value={name}
                        variant="outlined"
                        inputProps={{maxLength: 100}}
                        style={{backgroundColor:'#efefef', width:'100%'}}    
                    />
                </Grid>
                <Grid container style={{width:'90%'}} justify='space-evenly'>
                    <TextField
                        onChange={onFormChange}
                        name='cpf'
                        margin='normal'
                        label="CPF"
                        placeholder="CPF do funcionário"
                        value={cpf}
                        variant="outlined"
                        inputProps={{maxLength: 11}}
                        style={{backgroundColor:'#efefef', width:'40%'}}    
                    />
                    <TextField
                        onChange={onFormChange}
                        name='cellPhone'
                        margin='normal'
                        label="Celular"
                        placeholder="Número do celular do funcionário"
                        value={cellPhone}
                        variant="outlined"
                        style={{backgroundColor:'#efefef', width:'40%'}}    
                    />
                </Grid>
                <Grid style={{width:'90%'}} container justify='space-evenly'>
                    <TextField
                        onChange={onFormChange}
                        name='telephone'
                        margin='normal'
                        label="Telefone"
                        placeholder="Número do telefone do funcionário"
                        value={telephone}
                        variant="outlined"
                        style={{backgroundColor:'#efefef', width:'40%'}}    
                    />
                    <TextField
                        onChange={onFormChange}
                        name='cep'
                        margin='normal'
                        label="CEP"
                        placeholder="CEP do funcionário"
                        value={cep}
                        variant="outlined"
                        style={{backgroundColor:'#efefef', width:'40%'}}    
                    />
                </Grid>
                <Grid style={{width:'90%'}} container alignItems='center' justify='center'>
                    <TextField
                        onChange={onFormChange}
                        name='bankAccount'
                        margin='normal'
                        label="Conta"
                        placeholder="Conta"
                        value={bankAccount}
                        variant="outlined"
                        style={{backgroundColor:'#efefef', width:'87%'}}    
                    />
                </Grid>
                <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                    <TextField
                        onChange={onFormChange}
                        name='observation'
                        margin='normal'
                        label="Observações"
                        placeholder="Observações sobre o funcionário"
                        value={observation}
                        variant="outlined"
                        style={{backgroundColor:'#efefef',width:'78%'}} 
                        rowsMax='5'
                        multiline   
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
 
export default EmployeeEditFields;
