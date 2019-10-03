import { Typography, Button, Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Visibility } from '@material-ui/icons'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';


const InspectionEditFields = ({info, onFormChange, onSwitchCheckChange}) => {
    return (<React.Fragment>
                <Grid style={{paddingTop:20, paddingBottom:20}} container justify='center'>
                    <Visibility fontSize='large'/>
                </Grid>
                <Grid container alignItems='center' justify='center'>
                    <Grid container justify='center'>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid container justify='center'>
                            <Typography>Combustível:</Typography>
                        </Grid>
                        <Grid container justify='center'>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >                                
                                <Grid container justify='center'>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        label="Reserva"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="quarterTank"
                                        control={<Radio color="primary" />}
                                        label="1/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="halfTank"
                                        control={<Radio color="primary" />}
                                        label="2/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="threeQuarterTank"
                                        control={<Radio color="primary" />}
                                        label="3/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="fullTank"
                                        control={<Radio color="primary" />}
                                        label="Cheio"
                                        labelPlacement="start"
                                    />
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid container alignItems='center' justify='center'>
                    <Grid container justify='center'>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid container justify='center'>
                            <Typography style={{paddingBottom: 25}}>Luzes de aviso painel:</Typography>
                        </Grid>
                        <Grid container justify='center'>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/9TnmYcd/abs.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/PFvVjjs/AirBag.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="quarterTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/RYFCQyB/Bateria.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="halfTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/31dnLGC/EPC.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="threeQuarterTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/t8xNcFj/TMPS.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="fullTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                </Grid>
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/sCsQ5cL/EPS.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/X4pHYz8/ESC.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="quarterTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/PFgH8Ld/Freio.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="halfTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />                                    
                                    <Avatar src='https://i.ibb.co/djX7VpK/Inje-o-Eletronica.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="threeQuarterTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/DVjcvgQ/Press-o-De-leo.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}                            
                                        value="fullTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />
                                </Grid>
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/kH7hYYk/Temperatura.jpg'></Avatar>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        labelPlacement="start"
                                    />                                    
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                    </Grid>                 
                </Grid>
                <Grid container alignItems='center' justify='center'>
                    <Grid container justify='center'>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>
                    <Grid container justify='center'>
                        <Grid container justify='center'>
                            <Typography style={{paddingBottom: 25}}>Risco na lataria:</Typography>
                        </Grid>
                        <Grid container justify='center'>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >
                                <Grid container justify='center' alignItems='center'>                                
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        label="Capô"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Parachoque dianteiro"
                                        control={<Radio color="primary" />}
                                        label="Parachoque dianteiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Parachoque traseiro"
                                        control={<Radio color="primary" />}
                                        label="Parachoque traseiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta motorista"
                                        control={<Radio color="primary" />}
                                        label="Porta motorista"
                                        labelPlacement="start"
                                    />                     
                                </Grid>
                                <Grid container justify='center' alignItems='center'>                                 
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta passageiro"
                                        control={<Radio color="primary" />}
                                        label="Porta passageiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta traseira direita"
                                        control={<Radio color="primary" />}
                                        label="Porta traseira direita"
                                        labelPlacement="start"
                                    />                                                         
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta traseira esquerda"
                                        control={<Radio color="primary" />}
                                        label="Porta traseira esquerda"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta malas"
                                        control={<Radio color="primary" />}
                                        label="Porta malas"
                                        labelPlacement="start"
                                    />                     
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                        </Grid>
                    </Grid>     
                    <Grid container justify='center'>
                        <Divider style={{margin:10,width: '80%'}}/>
                    </Grid>               
                </Grid>
            </React.Fragment> );
}

export default InspectionEditFields;
