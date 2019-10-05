import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Grid, Fab, Paper } from '@material-ui/core';
import EditInspection from './editInspection';
import Enums from '../../../helpers/Enums';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import DropDown from '../../common/dropDown';

class InspectionEntity extends Component {
    state = {
        info: {
            fuelLevel: {
                reserveTank: false,
                quarterTank: false,
                halfTank: false,
                threeQuarterTank: false,
                fullTank: false
            },
            warningLights: {
                fuelInjection: false, 
                oilPressure: false,
                battery: false,
                brake: false,
                temperature: false,
                airBag: false,
                ABS: false,
                EPC: false,
                EPS: false,
                ESC: false,
                TPMS: false
            },
            scratches:{                
                hood: false,
                frontBumper:false,
                rearBumper:false,
                driverDoor:false,
                passengerDoor:false,
                rightRearDoor:false,
                leftRearDoor:false,
                trunk:false
            },
            specialTireIron: false,            
        },
        dropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Busca serviço baseado em parâmetro",
            defaultText: "Buscar serviço...",
            selected: ''
        },
        searchField:'',
        search:[],
        service: "Resumo do serviço"
    };

    handleEdit = () => {
        const editingMode = true;
        this.setState({ editingMode });
    }

    handleModalClose = () => {
        const editingMode = false;
        this.setState({ editingMode });
    }

    handleEditSave = (info) => {
        this.setState({info});
    }
    
    render() {
        const { info, dropDown, searchField, search, service, editingMode} = this.state; 
        const {fuelLevel, warningLights, scratches, specialTireIron} = this.state.info;

        return (
            <React.Fragment>
                <EditInspection info={{}} sucessCallBack={this.handleEditSave} modalEnable={editingMode} onClose={this.handleModalClose} />
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container justify='space-between'>
                            <Grid item> <Typography variant='title'>Serviço: {service}</Typography> </Grid>
                            <Grid item> <Typography variant='subtitle1'>{info.plate}</Typography> </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Paper>
                            <Grid container style={{padding: 20}}>
                                <Grid container alignItems='center'>
                                    <Grid container style={{width:'85%'}} alignItems='center'>
                                        <Grid item style={{padding: 5}}>
                                            <Avatar src="https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg"/>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='title'style={{paddingLeft:10}}>{"oi"}</Typography>
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
                                    
                                </Grid>
                                <Grid container alignItems='center' style={{paddingTop:5}}>
                                    
                                </Grid>
                                <Grid container alignItems='center'>
                                   
                                </Grid>
                            </Grid>
                        </Paper>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        )
    }
}

InspectionEntity.defaultProps = {
    services: ['Service not found'],
    info: {
        id: -1,
        plate: "",
        model: "",
        year: 0,
        is_Mercosul: false,
        obs: "",
        Client: {
            name: "",
            cpf: ""
        }
    }
}

export default InspectionEntity;