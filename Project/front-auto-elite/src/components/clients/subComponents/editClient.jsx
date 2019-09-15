import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClientEditFields from './clientEditFields';
import Grid from '@material-ui/core/Grid';

class EditClient extends Component {

    render() { 
        return (
            <Dialog onClose={this.props.onClose} open={this.props.modalEnable}  maxWidth='md' aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Cliente</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Para editar os dados de um cliente, modifique os campos desejados e clique em salvar.
                    </DialogContentText>
                    <Grid container alignItems='center' justify='center'>
                        <ClientEditFields info={this.props.info}></ClientEditFields>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} style={{color: 'red'}}>
                        Cancelar
                    </Button>
                    <Button onClick={this.props.onSave} style={{color: 'green'}}>
                        Salvar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };
};

EditClient.defaultProps = {
    info: {
        name:"João Pedro Batista Borges",
        cpf:"464.399.448-39",
        celDDD:'35',
        cel:"9 7595-6532",
        houseNumber:"3569",
        telDDD:'35',
        tel:"3666-8954",
        cep:"37500-013"
    }
}

export default EditClient;