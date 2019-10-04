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
import Checkbox from '@material-ui/core/Checkbox';


const InspectionEditFields = ({ info, onFormControlChange }) => {
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
                                onChange={(e) => onFormControlChange(e, "fuelLevel")}
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
                                onChange={(e) => onFormControlChange(e, "warningLights")}
                                row
                            >
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/9TnmYcd/abs.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="ABS"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/PFvVjjs/AirBag.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="airBag"                                        
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/RYFCQyB/Bateria.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="battery"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/31dnLGC/EPC.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="EPC"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/t8xNcFj/TMPS.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="TPMS"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                </Grid>
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/sCsQ5cL/EPS.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="EPS"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/X4pHYz8/ESC.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="ESC"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/PFgH8Ld/Freio.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="brake"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />                                    
                                    <Avatar src='https://i.ibb.co/djX7VpK/Inje-o-Eletronica.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="fuelInjection"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                    <Avatar src='https://i.ibb.co/DVjcvgQ/Press-o-De-leo.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}                            
                                        value="oilPressure"
                                        control={<Checkbox color="primary" />}
                                        labelPlacement="start"
                                    />
                                </Grid>
                                <Grid container justify='center' alignItems='center' style={{paddingBottom:10}}>
                                    <Avatar src='https://i.ibb.co/kH7hYYk/Temperatura.jpg'/>
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="temperature"
                                        control={<Checkbox color="primary" />}
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
                                onChange={(e) => onFormControlChange(e, "scratches")}
                                row
                            >
                                <Grid container justify='center' alignItems='center'>                                
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Checkbox color="primary" />}
                                        label="Capô"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Parachoque dianteiro"
                                        control={<Checkbox color="primary" />}
                                        label="Parachoque dianteiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Parachoque traseiro"
                                        control={<Checkbox color="primary" />}
                                        label="Parachoque traseiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta motorista"
                                        control={<Checkbox color="primary" />}
                                        label="Porta motorista"
                                        labelPlacement="start"
                                    />                     
                                </Grid>
                                <Grid container justify='center' alignItems='center'>                                 
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta passageiro"
                                        control={<Checkbox color="primary" />}
                                        label="Porta passageiro"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta traseira direita"
                                        control={<Checkbox color="primary" />}
                                        label="Porta traseira direita"
                                        labelPlacement="start"
                                    />                                                         
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta traseira esquerda"
                                        control={<Checkbox color="primary" />}
                                        label="Porta traseira esquerda"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Porta malas"
                                        control={<Checkbox color="primary" />}
                                        label="Porta malas"
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
                            <Typography style={{paddingBottom: 25}}>Chave especial:</Typography>
                        </Grid>
                        <Grid container justify='center'>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                onChange={(e) => onFormControlChange(e, "specialTireIron")}
                                row
                            >
                                <Grid container justify='center' alignItems='center'>                                
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="reserveTank"
                                        control={<Radio color="primary" />}
                                        label="Sim"
                                        labelPlacement="start"
                                    />                     
                                    <FormControlLabel
                                        style={{marginLeft:0, marginRight:25}}
                                        value="Parachoque dianteiro"
                                        control={<Radio color="primary" />}
                                        label="Não"
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
