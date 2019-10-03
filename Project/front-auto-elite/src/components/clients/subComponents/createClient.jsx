import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ClientEditFields from './clientEditFields';
import CarEditFields from '../../cars/subComponents/carEditFields';
import Button from '@material-ui/core/Button';
import Queries from './../../../helpers/Queries';

class CreateClient extends Component {
    state = {
        info: {
            cpf: "",
            cellPhone: "",
            telephone: "",
            name: "",
            cep: "",
            plate:"",
            obs: "",
            is_Mercosul:true
        }
    };

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

    handleCreate = async (createInfo) => {
        await Queries.createClient(createInfo);
        const info = {  
            cpf: "",
            cellPhone: "",
            telephone: "",
            name: "",
            cep: "",
            obs: "",
            plate: "",
            is_Mercosul: true
        }
        alert("Cliente criado com sucesso!")
        this.setState({info});
    }

    render() {
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <ClientEditFields info={this.state.info} onFormChange={this.handleFormChange}/>
                            <CarEditFields info={this.state.info} onFormChange={this.handleFormChange} onSwitchCheckChange={this.handleSwitchCheckChange}></CarEditFields>
                            <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                                <Button onClick={() => this.handleCreate(this.state.info)} variant="contained" color='default'>Criar</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CreateClient;