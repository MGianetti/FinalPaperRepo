import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper, Avatar, Grid, Fab } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import UiList from '../../common/uiList';
import ServiceEntity from './../../services/subComponents/serviceEntity';
import EditEmployee from './editEmployee';

class EmployeeEntity extends Component {
    state = {
        services: this.props.services,

        info: this.props.info,

        editingMode: false
    };

    handleEdit = () => {
        const editingMode = true;
        this.setState({ editingMode });
    };

    handleModalClose = () => {
        const editingMode = false;
        this.setState({ editingMode });
    };

    render() {
        const { services, employeeInfos, editingMode } = this.state; 
        const { name } = this.state.employeeInfos; 
        return (
            <React.Fragment>
                <EditEmployee data={employeeInfos} modalEnable={editingMode} onClose={this.handleModalClose}/>  
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Typography variant='title'>{name}</Typography>
                            </Grid>
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
                                            <Typography variant='title'style={{paddingLeft:10}}>{name}</Typography>
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
                                <Grid container alignItems='center'>
                                    <Grid container style={{width:'100%'}} alignItems='center'>
                                        <Typography>Serviços Ativos:</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems='center'>
                                    <Grid container style={{width:'100%'}} alignItems='center'>
                                        <UiList
                                            maxHeight={500}
                                            data={services}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        );
    };
};

EmployeeEntity.defaultProps = {
    services: ['Service not found'],
    info: {
        name:"Tiago Diego Assunção",
        cpf:"856.250.028-35",
        celDDD:"35",
        cel:"99550-8505",
        telDDD:"35",
        tel:"2818-1127",
        cep:"69086-280",
        houseNumber:"206",
        bankAccount:"0165 737290-6",
        employeeObservation:"Donec magna lorem, varius in mattis sit amet"
    }
}

export default EmployeeEntity;