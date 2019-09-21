import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ClientEditFields from './clientEditFields';
import CarEditFields from '../../cars/subComponents/carEditFields';
import Button from '@material-ui/core/Button';

class CreateClient extends Component {

    render() {
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <ClientEditFields></ClientEditFields>
                            <CarEditFields></CarEditFields>
                            <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                                <Button variant="contained" color='default'>Criar</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CreateClient;