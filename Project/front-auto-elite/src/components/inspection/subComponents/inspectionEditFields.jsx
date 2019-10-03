import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';
import { Visibility } from '@material-ui/icons'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';


const InspectionEditFields = ({info, onFormChange, onSwitchCheckChange}) => {
    return (<React.Fragment>
                <Grid style={{paddingTop:20}} container justify='center'>
                    <Visibility fontSize='large'/>
                </Grid>
                <Grid style={{paddingTop:20}} container justify='center'>
                    <Divider style={{margin:10,width: '80%'}}/>
                    <Grid direction='row' alignItems='center' container justify='center'>
                        <Typography style={{paddingRight:20}}>Combustível:</Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >
                                <FormControlLabel
                                    value="reservTank"
                                    control={<Radio color="primary" />}
                                    label="Reserva"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="quarterTank"
                                    control={<Radio color="primary" />}
                                    label="1/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="halfTank"
                                    control={<Radio color="primary" />}
                                    label="2/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="threeQuarterTank"
                                    control={<Radio color="primary" />}
                                    label="3/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="fullTank"
                                    control={<Radio color="primary" />}
                                    label="Cheio"
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Divider style={{margin:10,width: '80%'}}/>
                    <Grid direction='row' alignItems='center' container justify='center'>
                        <Grid container>
                            <Typography style={{paddingRight:20}}>Luzes painel:</Typography>
                        </Grid>
                        
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >
                                <Grid container justify='center' justify='center'>
                                    <FormControlLabel
                                        value="reservTank"
                                        control={<Radio color="primary" />}
                                        label="Reserva"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="quarterTank"
                                        control={<Radio color="primary" />}
                                        label="1/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="halfTank"
                                        control={<Radio color="primary" />}
                                        label="2/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="threeQuarterTank"
                                        control={<Radio color="primary" />}
                                        label="3/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="fullTank"
                                        control={<Radio color="primary" />}
                                        label="Cheio"
                                        labelPlacement="start"
                                    />
                                </Grid>                            
                                <Grid container justify='center'>
                                    <FormControlLabel
                                        value="reservTank"
                                        control={<Radio color="primary" />}
                                        label="Reserva"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="quarterTank"
                                        control={<Radio color="primary" />}
                                        label="1/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="halfTank"
                                        control={<Radio color="primary" />}
                                        label="2/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="threeQuarterTank"
                                        control={<Radio color="primary" />}
                                        label="3/4"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="fullTank"
                                        control={<Radio color="primary" />}
                                        label="Cheio"
                                        labelPlacement="start"
                                    />
                                </Grid>                            
                                <Grid container justify='center'>
                                    <FormControlLabel
                                        value="reservTank"
                                        control={<Radio color="primary" />}
                                        label="Reserva"
                                        labelPlacement="start"
                                    />
                                </Grid>                            
                            </RadioGroup>
                            
                        </FormControl>
                    </Grid>
                    <Divider style={{margin:10,width: '80%'}}/>
                    <Grid direction='row' alignItems='center' container justify='center'>
                        <Typography style={{paddingRight:20}}>Combustível:</Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                aria-label="position"
                                name="position"
                                value={"d"}
                                onChange={console.log('oi')}
                                row
                            >
                                <FormControlLabel
                                    value="reservTank"
                                    control={<Radio color="primary" />}
                                    label="Reserva"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="quarterTank"
                                    control={<Radio color="primary" />}
                                    label="1/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="halfTank"
                                    control={<Radio color="primary" />}
                                    label="2/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="threeQuarterTank"
                                    control={<Radio color="primary" />}
                                    label="3/4"
                                    labelPlacement="start"
                                />
                                <FormControlLabel
                                    value="fullTank"
                                    control={<Radio color="primary" />}
                                    label={'asd'}
                                    labelPlacement="start"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Divider style={{margin:10,width: '80%'}}/>
                </Grid>
                <Grid style={{paddingTop:20}} container justify='center'>
                </Grid>
                <Grid style={{paddingTop:20}} container justify='center'>
                </Grid>
                <Grid style={{paddingTop:20}} container justify='center'>
                </Grid>
                
            </React.Fragment> );
}
 
export default InspectionEditFields;
