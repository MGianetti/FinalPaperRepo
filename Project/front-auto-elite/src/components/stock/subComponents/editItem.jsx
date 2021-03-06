import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StockEditFields from './stockEditFields';
import Grid from '@material-ui/core/Grid';
import Queries from './../../../helpers/Queries';

class EditItem extends Component {

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
        info.is_Mercosul = event.target.checked;
        this.setState({ info });
    }

    handleModalSave = (info) => {
        Queries.updateItem(info, () => this.props.sucessCallBack(info), this.props.failCallBack);
        this.props.onClose();
    };

    render() { 
        return (
            <Dialog onClose={this.props.onClose} open={this.props.modalEnable}  maxWidth='md' aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Para editar os dados do item, modifique os campos desejados e clique em salvar.
                    </DialogContentText>
                    <Grid container alignItems='center' justify='center'>
                        <StockEditFields info={this.state.info} onFormChange={this.handleFormChange} onSwitchCheckChange={this.handleSwitchCheckChange}></StockEditFields>
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

EditItem.defaultProps = {
    info: {
        id: -1,
        plate: "",
        model: "",
        year: "",
        is_Mercosul: false,
        obs: "",
        Client: {
            name: "",
            cpf: ""
        }
    },
    sucessCallBack: () => console.log("Sucess"),
    failCallBack: () => console.log("Fail")
}

export default EditItem;