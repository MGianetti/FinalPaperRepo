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
import EditInspection from './editInspection';
import Enums from '../../../helpers/Enums';

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
        service: null
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
        const { info, dropDown, searchField, search, service} = this.state; 
        const {fuelLevel, warningLights, scratches, specialTireIron} = this.state.info;

        return (
            <React.Fragment>
                <EditInspection info={{}} sucessCallBack={this.handleEditSave} modalEnable={editingMode} onClose={this.handleModalClose} />
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container justify='space-between'>
                            <Grid item> <Typography variant='title'>{info.model}</Typography> </Grid>
                            <Grid item> <Typography variant='subtitle1'>{info.plate}</Typography> </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container style={{padding: 20}}>
                            InspectionEntity
                        </Grid>
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