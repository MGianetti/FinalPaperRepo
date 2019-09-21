import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import ServiceEditFields from './serviceEditFields';
import { Button, Paper } from '@material-ui/core';

class CreateService extends Component {

    render() { 
        return (
            <React.Fragment>
                {/* <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}> */}
                    <Grid container justify='center' style={{paddingTop:25}}>
                        <ServiceEditFields></ServiceEditFields>
                        <Grid container style={{padding:50}} alignItems='center' justify='center'>
                            <Button variant="contained" color='default'>Criar</Button>
                        </Grid>
                    </Grid>
                {/* </Paper> */}
            </React.Fragment>
        )
    }

}

export default CreateService;