import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Queries from './../../../helpers/Queries';
import ServiceEditFields from './serviceEditFields';

class EditService extends Component {

    state = {
        info: this.props.info 
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    handleSwitchCheckChange = (event) => {
        let { info } = this.state;
        info.obligatoryInspection = event.target.checked;
        this.setState({ info });
    }

    handleRadioButtonChange = event => {
        let { info } = this.state;
        info.type = event.target.value;
        this.setState({ info });
    }

    handleModalSave = (info) => {
        Queries.updateService(info, () => this.props.sucessCallBack(info), this.props.failCallBack);
        this.props.onClose();
    }

    render() { 
        return (
            <Dialog onClose={this.props.onClose} open={this.props.modalEnable}  maxWidth='md' aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Serviço</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para editar os dados do serviço, modifique os campos desejados e clique em salvar.
                    </DialogContentText>
                    <Grid container alignItems='center' justify='center'>
                        <ServiceEditFields info={this.state.info} onFormChange={this.handleFormChange} onSwitchCheckChange={this.handleSwitchCheckChange} onRadioButtonChange={this.handleRadioButtonChange}></ServiceEditFields>
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

EditService.defaultProps = {
    info: {
        id: -1,
        observations: '',
        obligatoryInspection: '',
        summary: '',
        status: '',
        type: '',
        price: '',
        car: '',
        employee: ''
    },
    sucessCallBack: () => console.log("Sucess"),
    failCallBack: () => console.log("Fail")
}

export default EditService;