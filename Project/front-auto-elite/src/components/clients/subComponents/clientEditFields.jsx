import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Person } from '@material-ui/icons'

class ClientEditFields extends Component {
    state = {
        info: this.props.info 
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    render() {
        const { name, telephone, cellPhone, cpf, cep, houseNumber} = this.state.info; 
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
                    name='cellPhone'
                    margin='normal'
                    label="Celular"
                    placeholder="Número do celular do cliente"
                    value={cellPhone}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'49%'}}    
                />
                <TextField
                    onChange={this.handleFormChange}
                    name='telephone'
                    margin='normal'
                    label="Telefone"
                    placeholder="Número do telefone do cliente"
                    value={telephone}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'49%'}}    
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
                    value={'000'}
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
        telephone: "",
        cellPhone: "",
        cpf: "",
        cep: "",
        houseNumber: ""
    }
}

export default ClientEditFields
