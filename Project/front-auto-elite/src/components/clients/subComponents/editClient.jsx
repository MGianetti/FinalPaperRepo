import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core/';
import { Person } from '@material-ui/icons/';


class EditClient extends Component {

    render() { 
        const { name, cpf, cel, houseNumber, tel, cep, celDDD, telDDD } = this.props.data;  
        const { modalEnable } = this.props;
        return (
            <Dialog onClose={this.props.onClose} open={modalEnable}  maxWidth='md' aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Cliente</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Para editar os dados de um cliente, modifique os campos desejados e clique em salvar.
                    </DialogContentText>
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
                                    placeholder="Nome do novo cliente"
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
                        </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} style={{color: 'red'}}>
                        Cancelar
                    </Button>
                    <Button style={{color: 'green'}}>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };
};

export default EditClient;