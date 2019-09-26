import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';
import { DirectionsCar } from '@material-ui/icons'

const CarEditFields = ({info, onFormChange, onSwitchCheckChange}) => {
    const {plate, isMercosul, obs} = info;
    return (<React.Fragment>
                <Grid style={{paddingTop:20}} container justify='center'>
                    <DirectionsCar fontSize='large'/>
                </Grid>
                <Grid container style={{width:'90%'}} alignItems='center' justify='center'>
                    <TextField
                        onChange={onFormChange}
                        name='plate'
                        margin='normal'
                        label="Placa"
                        placeholder="Placa do carro do cliente"
                        value={info.plate}
                        variant="outlined"
                        style={{backgroundColor:'#efefef', width:'20%'}}    
                    />
                    <Typography style={{paddingLeft:60}} variant='h6'>Mercosul:</Typography>
                    <Switch name='isMercosul' checked={isMercosul} onChange={onSwitchCheckChange}/>
                </Grid>
                <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                    <TextField
                        onChange={onFormChange}
                        name='obs'
                        margin='normal'
                        label="Observações"
                        placeholder="Observações sobre o carro do cliente"
                        value={obs}
                        variant="outlined"
                        style={{backgroundColor:'#efefef',width:'80%'}} 
                        rowsMax='5'
                        multiline   
                    />
                </Grid>     
            </React.Fragment> );
}
 
export default CarEditFields;
