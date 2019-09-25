import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClientEditFields from './clientEditFields';
import Grid from '@material-ui/core/Grid';
import Queries from './../../../helpers/Queries';

class EditClient extends Component {

    state = {
        info: this.props.info 
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    handleModalSave = (info) => {
        Queries.updateClient(info, () => this.props.sucessCallBack(info), this.props.failCallBack);
        this.props.onClose();
    };

    render() { 
        return (
            <Dialog onClose={this.props.onClose} open={this.props.modalEnable}  maxWidth='md' aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Cliente</DialogTitle>
                <DialogContent >
                    <DialogContentText>
                        Para editar os dados de um cliente, modifique os campos desejados e clique em salvar.
                    </DialogContentText>
                    <Grid container alignItems='center' justify='center'>
                        <ClientEditFields onFormChange={this.handleFormChange} info={this.state.info}></ClientEditFields>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.onClose} style={{color: 'red'}}>
                        Cancelar
                    </Button>
                    <Button onClick={() => this.handleModalSave(this.state.info)} style={{color: 'green'}}>
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
        cellPhone:"9 7595-6532",
        telephone:"3666-8954",
        cep:"37500-013"
    },
    sucessCallBack: () => console.log("Sucess"),
    failCallBack: () => console.log("Fail")
}

export default EditClient;