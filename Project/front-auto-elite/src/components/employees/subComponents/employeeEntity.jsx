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



class EmployeeEntity extends Component {
    state = {
        searchedServices:[
            {'5b21ca3eeb7f6fbccd471815': <ServiceEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ServiceEntity key='5b21ca3eeb7f6fbccd471816'/>}
        ],
        approved: true
    };

    handleApprovedChanging = () => {
        let state = this.state;
        state.approved = !state.approved;
        this.setState(state);
    };

    render() {
        const { searchedServices, approved } = this.state; 
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>Tiago</Typography>
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
                                        <Typography variant='title'style={{paddingLeft:10}}>Tiago</Typography>
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
                                            <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
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
                                        data={searchedServices}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    };
};

export default EmployeeEntity;