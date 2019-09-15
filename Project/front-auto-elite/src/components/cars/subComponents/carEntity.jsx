import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid, Fab } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import DropDown from '../../common/dropDown';
import Button from '@material-ui/core/Button';
import DriveEta from '@material-ui/icons/DriveEta';
import Build from '@material-ui/icons/Build';
import Category from '@material-ui/icons/Category';
import EditCar from './editCar';

class CarEntity extends Component {
    state = {
        dropDownServices:{
            items: this.props.services,
            helpText: "Busca serviços de um carro",
            defaultText: "Buscar serviço...",
            selected: ''
        },
        info: this.props.info,
        editingMode: false,
    };

    handleEdit = () => {
        const editingMode = true;
        this.setState({ editingMode });
    }

    handleModalClose = () => {
        const editingMode = false;
        this.setState({ editingMode });
    }

    handleModalSave = () => {
        //TODO: implement save button

        const editingMode = false;
        this.setState({ editingMode });
    }
    
    render() {
        const {dropDownServices, info, editingMode} = this.state; 
        return (  
            <ExpansionPanel>
                <EditCar info={info} modalEnable={editingMode} onClose={this.handleModalClose} onSave={this.handleModalSave}/>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>{info.name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>{info.plate}</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid container style={{padding: 20}}>
                        <Grid container alignItems='center'>
                            <Grid container style={{width:'85%'}} alignItems='center' direction='row' alignContent='space-around'>
                                <Grid item style={{padding: 5, width:'10%'}}>
                                    <Avatar src={"https://i.ibb.co/NnTpQtM/car-avatar.png"}/>
                                </Grid>
                                <Grid item style={{padding: 5, width:'40%'}}>
                                    <Typography variant='headline'>{info.name}</Typography>
                                </Grid>
                                <Grid item style={{ backgroundColor:'#e0e0e0', borderRadius:8, borderStyle:'solid', borderWidth: 1, borderColor:'#b0b0b0'}}>
                                    <Grid container direction='column' style={{padding: 20}}>
                                        <Grid item >
                                            <Typography style={{backgroundColor:'#d0d0d0', borderStyle:'solid', borderWidth: 1, borderColor:'#b0b0b0', paddingLeft:10, paddingRight:10}} variant='subtitle2'>São José dos Campos - SP</Typography>
                                        </Grid>
                                        <Grid item style={{width:'100%'}}>
                                            <Grid>
                                                <Typography align='center' variant='h4'>{info.plate}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container style={{width:'15%'}}>
                                <Grid container style={{width:'50%'}}>
                                    <Grid item>
                                        <Fab style={{backgroundColor:'#FA8072'}} size='small'>
                                            <Delete/>
                                        </Fab>
                                    </Grid>
                                </Grid>
                                <Grid container style={{width:'50%'}}>
                                    <Grid item>
                                        <Fab onClick={this.handleEdit} style={{backgroundColor:'#00FF7F'}} size='small'>
                                            <Edit/>
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Grid>  
                        </Grid>
                        <Grid container alignItems='center' style={{paddingTop:20}}>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Category/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Ano: {info.year}</Typography>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30, paddingLeft:20}}>
                                <Build/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Serviço Ativo: {info.isServiceActive}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center' style={{paddingTop:5}}>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Build/>
                            </Grid>
                            <Grid item style={{padding:4, paddingTop:30}}>
                                <Typography variant='h6'>Serviços já feitos: {info.completedServices}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems='center'>
                            <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'50%'}}>
                                <Grid item style={{paddingRight: 4}}>
                                    <DriveEta/>
                                </Grid>
                                <Grid item style={{paddingRight: 15}} >                                    
                                    <Typography variant='subtitle1'>Dono: {info.owner}</Typography>
                                </Grid>
                                <Grid item style={{padding: 8}}>                                    
                                    <Button variant="contained" color='default'>Ver</Button>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'50%'}}>
                                <Grid item style={{paddingRight: 4}}>
                                    <Build/>
                                </Grid>
                                <Grid item style={{paddingRight: 15}} >                                    
                                    <Typography variant='title'>Serviços:</Typography>
                                </Grid>
                                <Grid item>                                    
                                    <DropDown 
                                        data={{ dropDownServices }}
                                        onChange={this.handleDropMenuChange}
                                    />
                                </Grid>
                                <Grid item style={{padding: 8}}>                                    
                                    <Button variant="contained" color='default'>Ver</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

CarEntity.defaultProps = {
    services: ['Service not found'],
    info: {
        plate: 'JEM-2446',
        isMercosul: true,
        obs: "",
        name: 'Fox City 1.0 prata 4p',
        owner: '',
        isServiceActive: 'No',
        completedServices: 0,
        year: 2004
    }
}

export default CarEntity;