import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper, Avatar, Grid, Fab } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Phone from '@material-ui/icons/Phone';
import Smartphone from '@material-ui/icons/Smartphone';
import DropDown from '../../common/dropDown';
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import DriveEta from '@material-ui/icons/DriveEta';
import Build from '@material-ui/icons/Build';

class ClientEntity extends Component {
    state = {
        dropDownCars:{
            items: ["JEM-2446"],
            helpText: "Busca carro de um cliente",
            defaultText: "Buscar carro...",
            selected: ''
        },
        dropDownServices:{
            items: [''],
            helpText: "Busca serviço de um cliente",
            defaultText: "Buscar serviço...",
            selected: ''
        }
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    render() { 
        const { dropDownCars, dropDownServices } = this.state;
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>João Pedro Batista Borges</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>464.399.448-39</Typography>
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
                                        <Typography variant='title'style={{paddingLeft:10}}>João Pedro Batista Borges</Typography>
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
                            <Grid container alignItems='center' style={{paddingTop:20}}>
                                <Grid item style={{padding:4}}>
                                    <Phone/>
                                </Grid>
                                <Grid item style={{padding:4}}>
                                    <Typography variant='inherit'>(35) 3666-8954</Typography>
                                </Grid>
                                <Grid item style={{padding:4, paddingLeft:20}}>
                                    <Smartphone/>
                                </Grid>
                                <Grid item style={{padding:4}}>
                                    <Typography variant='inherit'>(35) 9 7595-6532</Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center' style={{paddingTop:5}}>
                                <Grid item style={{padding:4}}>
                                    <Home/>
                                </Grid>
                                <Grid item style={{padding:4}}>
                                    <Typography variant='subtitle2'>
                                        {'37500-013, '} 
                                        {'3569'}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center'>
                                <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'50%'}}>
                                    <Grid item style={{paddingRight: 4}}>
                                        <DriveEta/>
                                    </Grid>
                                    <Grid item style={{paddingRight: 15}} >                                    
                                        <Typography variant='title'>Carros:</Typography>
                                    </Grid>
                                    <Grid item>                                    
                                        <DropDown 
                                            data={{dropDownCars}}
                                            onChange={this.handleDropMenuChange}
                                        />
                                    </Grid>
                                    <Grid item style={{padding: 8}}>                                    
                                        <Button variant="contained" color="#2a2a2a">Ver</Button>
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
                                        <Button variant="contained" color="#2a2a2a">Ver</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    };
};

export default ClientEntity;