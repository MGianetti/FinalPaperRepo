import React, { Component } from 'react';
import {Grid, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CarEditFields from './carEditFields';

class CreateCar extends Component {

    render() {
        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <CarEditFields></CarEditFields>
                        <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                            <Button variant="contained" color='default'>Criar</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

}

export default CreateCar;