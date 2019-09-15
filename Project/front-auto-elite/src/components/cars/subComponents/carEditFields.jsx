import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';
import { DirectionsCar } from '@material-ui/icons'

class CarEditFields extends Component {
    render() {
        const {carPlate, carIsMercosul, carObservations} = this.props.info; 
        return <React.Fragment>
            <Grid style={{paddingTop:20}} container justify='center'>
                <DirectionsCar fontSize='large'/>
            </Grid>
            <Grid container style={{width:'90%'}} alignItems='center' justify='center'>
                <TextField
                    onChange={this.handleFormChange}
                    name='carPlate'
                    margin='normal'
                    label="Placa"
                    placeholder="Placa do carro do cliente"
                    value={carPlate}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'20%'}}    
                />
                <Typography style={{paddingLeft:60}} variant='h6'>Mercosul:</Typography>
                <Switch name='carIsMercosul' checked={carIsMercosul} onChange={this.handleSwitchCheckChange}/>
            </Grid>
            <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                <TextField
                    onChange={this.handleFormChange}
                    name='carObservations'
                    margin='normal'
                    label="Observações"
                    placeholder="Observações sobre o carro do cliente"
                    value={carObservations}
                    variant="outlined"
                    style={{backgroundColor:'#efefef',width:'80%'}} 
                    rowsMax='5'
                    multiline   
                />
            </Grid>    
            <Grid container style={{paddingBottom:50}} alignItems='center' justify='center'>
                <Button variant="contained" color='default'>Criar</Button>
            </Grid> 
        </React.Fragment>
    }
}

CarEditFields.defaultProps = {
    info: {
        carPlate: "",
        carIsMercosul: "",
        carObservation: ""
    }
}

export default CarEditFields
