import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Queries from './../../../helpers/Queries';
import EmployeeEditFields from './employeeEditFields';

class CreateEmployee extends Component {
    state = {
        info: {
            cpf: "",
            cellPhone: "",
            telephone: "",
            name: "",
            cep: "",
            observation: "",
            bankAccount: ""
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
        await Queries.createEmployee(createInfo);
        const info = {  
            cpf: "",
            cellPhone: "",
            telephone: "",
            name: "",
            cep: "",
            observation: "",
            bankAccount: ""
        }
        alert("Mecânico criado com sucesso!")
        this.setState({info});
    }

    render() {
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <EmployeeEditFields info={this.state.info} onFormChange={this.handleFormChange}></EmployeeEditFields>
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

export default CreateEmployee;