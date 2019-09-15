import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Person } from '@material-ui/icons'

class ClientEditFields extends Component {
    render() {
        const { name, telDDD, tel, celDDD, cel, cpf, cep, houseNumber} = this.props.info; 
        return <React.Fragment>
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
                    placeholder="Nome do cliente"
                    value={name}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'99.4%'}}    
                />
            </Grid>
            <Grid container style={{width:'90%'}} justify='space-evenly'>
                <TextField
                    onChange={this.handleFormChange}
                    name='celDDD'
                    margin='normal'
                    label="DDD"
                    placeholder="DDD do celular"
                    value={celDDD}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'14.7%'}}    
                />
                <TextField
                    onChange={this.handleFormChange}
                    name='cel'
                    margin='normal'
                    label="Celular"
                    placeholder="Número do celular do cliente"
                    value={cel}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'34.3%'}}    
                />
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
                    placeholder="Número do telefone do cliente"
                    value={tel}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'34.3%'}}    
                />
            </Grid>
            <Grid style={{width:'90%'}} container justify='space-evenly'>
                <TextField
                    onChange={this.handleFormChange}
                    name='cpf'
                    margin='normal'
                    label="CPF"
                    placeholder="CPF do cliente"
                    value={cpf}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'29.4%'}}    
                />
                <TextField
                    onChange={this.handleFormChange}
                    name='cep'
                    margin='normal'
                    label="CEP"
                    placeholder="CEP do cliente"
                    value={cep}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'39.2%'}}    
                />
                <TextField
                    onChange={this.handleFormChange}
                    name='houseNumber'
                    margin='normal'
                    label="Casa"
                    placeholder="Número da casa do cliente"
                    value={houseNumber}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'29.4%'}}    
                />
            </Grid>

        </React.Fragment>
    }
}

ClientEditFields.defaultProps = {
    info: {
        name: "",
        telDDD: "",
        tel: "",
        celDDD: "",
        cel: "",
        cpf: "",
        cep: "",
        houseNumber: ""
    }
}

export default ClientEditFields
