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
            is_Mercosul:true
        }
    };

    handleCreate = (info) => {
        Queries.createClient(info);
    };

    render() {
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <ClientEditFields info={this.state.info}></ClientEditFields>
                            <CarEditFields info={this.state.info}></CarEditFields>
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