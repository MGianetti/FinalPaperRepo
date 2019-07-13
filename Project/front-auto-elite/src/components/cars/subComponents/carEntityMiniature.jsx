import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar, Grid, Fab } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import DriveEta from '@material-ui/icons/DriveEta';

class CarEntityMiniature extends Component {
    render() {
        return (
            <Paper style={{scale:0}}>
                <Grid container style={{width:'100%'}} alignItems='center' direction='row' alignContent='space-around'>
                    <Grid container style={{width:'48%', padding:'1%'}} alignItems='center' direction='row'>
                        <Grid container style={{width:'100%'}}>
                            <Avatar src={"https://i.ibb.co/NnTpQtM/car-avatar.png"}/>
                            <Typography variant='headline' style={{paddingLeft:10}}>Fox City 1.0 prata 4p</Typography>
                        </Grid>
                        <Grid container style={{width:'100%'}} alignItems='center' direction='row'>
                            <DriveEta/>
                            <Typography variant='subtitle1' style={{paddingLeft:10, paddingRight:10}}>Dono: João Pedro Batista Borges</Typography>
                            <Button variant="contained" color='default'>Ver</Button>
                        </Grid>
                    </Grid>
                    <Grid container style={{width:'38%', padding:'1%'}}>
                        <Grid item style={{ backgroundColor:'#e0e0e0', borderRadius:8, borderStyle:'solid', borderWidth: 1, borderColor:'#b0b0b0'}}>
                            <Grid container direction='column' style={{padding: 20}}>
                                <Typography style={{backgroundColor:'#d0d0d0', borderStyle:'solid', borderWidth: 1, borderColor:'#b0b0b0', paddingLeft:10, paddingRight:10}} variant='subtitle2'>
                                    São José dos Campos - SP
                                </Typography>
                                <Typography align='center' variant='h4'>
                                    JEM-2446
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container style={{width:'8%', padding: '1%'}} alignItems='center' direction='column'>
                        <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
                            <Edit/>
                        </Fab>
                    </Grid>
                </Grid>
            </Paper>
        );
    };
};

export default CarEntityMiniature;