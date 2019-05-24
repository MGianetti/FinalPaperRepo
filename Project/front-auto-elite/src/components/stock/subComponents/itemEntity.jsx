import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid } from '@material-ui/core';


class ItemEntity extends Component {
    state = {
        quantity:'20',
        code:'SV3E500',
        name:'Jogo Pastilha de Freio'
    };

    render() { 
        return (  
            <Grid container direction='row' style={{width:'100%'}}>
                <Grid item style={{width:'50%'}}>
                    <Typography>Nome do item</Typography>
                </Grid>
                <Grid item style={{width:'50%'}}>      
                    <Typography>R$:{'200,00'}</Typography>
                </Grid>
            </Grid>
        );
    };
};

export default ItemEntity;