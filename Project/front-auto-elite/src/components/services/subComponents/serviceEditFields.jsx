import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Typography } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import Switch from '@material-ui/core/Switch';
import Enums from '../../../helpers/Enums';

const ServiceEditFields = ({info, onFormChange, onSwitchCheckChange, onRadioButtonChange}) => {
    return ( 
        <React.Fragment>
            <Grid container justify='center'>
                <TextField
                    onChange={onFormChange}
                    autoFocus
                    name='summary'
                    margin='normal'
                    label="Resumo"
                    placeholder="Resumo do serviço"
                    value={info.summary}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'80%'}}    
                />
            </Grid>
            <Grid container alignItems='center' justify="center">
                <Typography>Tipo:</Typography>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="position"
                        name="position"
                        value={info.type}
                        onChange={onRadioButtonChange}
                        row
                    >
                        <FormControlLabel
                            value={Enums.ServiceType.Corrective}
                            control={<Radio color="primary" />}
                            label="Corretivo"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value={Enums.ServiceType.Preventive}
                            control={<Radio color="primary" />}
                            label="Preventivo"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value={Enums.ServiceType.Eletronic}
                            control={<Radio color="primary" />}
                            label="Eletrônico"
                            labelPlacement="start"
                        />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid container alignItems='center' justify='center'>
                <Typography style={{marginRight:20}}> Vistoria obrigatória: </Typography>
                <Switch name='obligatoryInspection' checked={info.obligatoryInspection} onChange={onSwitchCheckChange}/>
            </Grid>
            <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                <TextField
                    onChange={onFormChange}
                    name='observations'
                    margin='normal'
                    label="Observações"
                    placeholder="Observações detalhadas sobre o serviço"
                    value={info.observations}
                    variant="outlined"
                    style={{backgroundColor:'#efefef',width:'80%'}} 
                    rowsMax='5'
                    multiline   
                />
            </Grid>
        </React.Fragment>
    );
}
 
export default ServiceEditFields;
