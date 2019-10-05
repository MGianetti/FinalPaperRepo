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
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';


class InspectionEntity extends Component {
    state = {
        info: {
            fuelLevel: {
                reserveTank: true,
                quarterTank: true,
                halfTank: true,
                threeQuarterTank: true,
                fullTank: true
            },
            warningLights: {
                fuelInjection: true, 
                oilPressure: true,
                battery: true,
                brake: true,
                temperature: true,
                airBag: true,
                ABS: true,
                EPC: false,
                EPS: false,
                ESC: true,
                TPMS: true
            },
            scratches:{                
                hood: true,
                frontBumper:true,
                rearBumper:true,
                driverDoor:true,
                passengerDoor:true,
                rightRearDoor:true,
                leftRearDoor:true,
                trunk:true
            },
            specialTireIron: true,            
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
        const { info, dropDown, searchField, search, service} = this.state; 
        const {fuelLevel, warningLights, scratches, specialTireIron} = this.state.info;

        return (
            <React.Fragment>
                <EditInspection info={{}} sucessCallBack={this.handleEditSave} modalEnable={editingMode} onClose={this.handleModalClose} />
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container justify='space-between'>
                            <Grid item> <Typography variant='title'>Serviço: {service}</Typography> </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Paper>
                            <Grid container style={{padding: 20}}>
                                <Grid container alignItems='center'>
                                    <Grid container style={{width:'85%'}} alignItems='center'>
                                        <Grid item style={{padding: 5}}>
                                            <Avatar src="https://comps.canstockphoto.com/human-eye-icon-on-blue-round-background-clip-art-vector_csp52400962.jpg"/>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='title'style={{paddingLeft:10}}>{"Inspeção"}</Typography>
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
                                <Grid container alignItems='center'direction='row' style={{width:"100%", paddingTop:20}}>
                                    <Grid container>
                                        <Typography>
                                            Nível de combustível: {fuelLevel.reserveTank && "Reserva" || 
                                                                fuelLevel.quarterTank && "1/4" ||
                                                                fuelLevel.halfTank && "2/4" ||
                                                                fuelLevel.threeQuarterTank && "3/4" ||
                                                                fuelLevel.fullTank && "Cheio"}
                                        </Typography>
                                    </Grid>
                                    <Divider style={{margin:10,width: '95%', marginTop:10, marginBottom:10}}/>
                                    <Grid container>
                                        <Typography>
                                            Luzes de aviso painel acesas: {(!warningLights.ABS &&
                                                                    !warningLights.airBag &&
                                                                    !warningLights.battery &&
                                                                    !warningLights.EPC &&
                                                                    !warningLights.TPMS &&
                                                                    !warningLights.EPS &&
                                                                    !warningLights.ESC &&
                                                                    !warningLights.brake &&
                                                                    !warningLights.fuelInjection &&
                                                                    !warningLights.oilPressure && 
                                                                    !warningLights.temperature) && "nenhuma"}
                                        </Typography>
                                    </Grid>
                                    <Grid container direction='row' justify='space-evenly' style={{marginTop:20, width:'60vw'}}>
                                        {warningLights.ABS && <Avatar src='https://i.ibb.co/9TnmYcd/abs.jpg'/>}
                                        {warningLights.airBag && <Avatar src='https://i.ibb.co/PFvVjjs/AirBag.jpg'/>}
                                        {warningLights.battery && <Avatar src='https://i.ibb.co/RYFCQyB/Bateria.jpg'/>}
                                        {warningLights.EPC && <Avatar src='https://i.ibb.co/31dnLGC/EPC.jpg'/>}
                                        {warningLights.TPMS && <Avatar src='https://i.ibb.co/t8xNcFj/TMPS.jpg'/>}
                                        {warningLights.EPS && <Avatar src='https://i.ibb.co/sCsQ5cL/EPS.jpg'/>}
                                        {warningLights.ESC && <Avatar src='https://i.ibb.co/X4pHYz8/ESC.jpg'/>}
                                        {warningLights.brake && <Avatar src='https://i.ibb.co/PFgH8Ld/Freio.jpg'/>}
                                        {warningLights.fuelInjection && <Avatar src='https://i.ibb.co/djX7VpK/Inje-o-Eletronica.jpg'/>}
                                        {warningLights.oilPressure && <Avatar src='https://i.ibb.co/DVjcvgQ/Press-o-De-leo.jpg'/>}
                                        {warningLights.temperature && <Avatar src='https://i.ibb.co/kH7hYYk/Temperatura.jpg'/>}
                                    </Grid>
                                    <Divider style={{margin:10,width: '95%', marginTop:10, marginBottom:10}}/>
                                    <Grid container>
                                        <Typography>
                                            Riscos no carro: {!scratches.hood &&
                                                            !scratches.frontBumper &&
                                                            !scratches.rearBumper &&
                                                            !scratches.driverDoor &&
                                                            !scratches.passengerDoor &&
                                                            !scratches.rightRearDoor &&
                                                            !scratches.leftRearDoor &&
                                                            !scratches.trunk && "nenhum"}
                                        </Typography>
                                    </Grid>
                                    <Grid container justify='space-around' direction='column' style={{marginTop:20, width:'60vw'}}>
                                        {scratches.hood && <Typography variant='overline'>- Capô</Typography>}
                                        {scratches.frontBumper && <Typography variant='overline'>- Parahoque frontal</Typography>}
                                        {scratches.rearBumper && <Typography variant='overline'>- Parachoque traseiro</Typography>}
                                        {scratches.driverDoor && <Typography variant='overline'>- Porta motorista</Typography>}
                                        {scratches.passengerDoor && <Typography variant='overline'>- Porta passageiro</Typography>}
                                        {scratches.rightRearDoor && <Typography variant='overline'>- Porta traseira direita</Typography>}
                                        {scratches.leftRearDoor && <Typography variant='overline'>- Porta traseira esquerda</Typography>}
                                        {scratches.trunk && <Typography variant='overline'>- Porta malas</Typography>}                                       
                                    </Grid>
                                </Grid>
                                <Divider style={{margin:10,width: '95%', marginTop:10, marginBottom:10}}/>
                                <Grid container alignItems='center'>                                    
                                        <Typography variant='overline'>
                                            Chave especial:
                                        </Typography>
                                        <Typography variant='overline'>
                                             {!specialTireIron && "Não" ||
                                                specialTireIron && "Sim"}
                                        </Typography>
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