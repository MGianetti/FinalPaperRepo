import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Paper, Avatar, Grid, Fab, Button } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import ThumbUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';
import UiList from '../../common/uiList';
import ItemEntity from '../../stock/subComponents/itemEntity';
import { Person, DriveEta } from '@material-ui/icons';

class BudgetEntity extends Component {

    state = {
        searchedItems:[
            {'5b21ca3eeb7f6fbccd471815': <ItemEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>}
        ],
        approved: true
    };

    handleApprovedChanging = () => {
        let state = this.state;
        state.approved = !state.approved;
        this.setState(state);
    };

    render() {
        const { searchedItems, approved } = this.state; 
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>{this.props.description}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>{this.props.key}</Typography>
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
                                        <Typography variant='title'style={{paddingLeft:10}}>{this.props.client}</Typography>
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
                                <Grid container style={{width:'80%'}} alignItems='center'>
                                    <UiList
                                        maxHeight={300}
                                        data={searchedItems}
                                    />
                                </Grid>
                                <Grid container style={{width:'20%'}}>
                                    {approved && 
                                        <Grid container  onClick={this.handleApprovedChanging} alignItems='center' style={{cursor: 'pointer', borderRadius:20, background:'#00ff00', width:130, height:100}}>
                                            <Typography style={{padding: 15}}>Aprovado!</Typography>
                                            <ThumbUp/>
                                        </Grid>
                                    }
                                    {!approved && 
                                        <Grid container  onClick={this.handleApprovedChanging} alignItems='center' style={{cursor: 'pointer', borderRadius:20, background:'#ff0000', width:130, height:100}}>
                                            <Typography style={{padding: 15}}>Negado!</Typography>
                                            <ThumbDown/>
                                        </Grid>
                                    }
                                </Grid>
                            </Grid>
                            <Grid container alignItems='center'>
                                <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'50%'}}>
                                    <Grid item style={{paddingRight: 4}}>
                                        <Person/>
                                    </Grid>
                                    <Grid item style={{paddingRight: 15}} >                                    
                                        <Typography variant='subtitle1'>Dono: {this.props.client}</Typography>
                                    </Grid>
                                    <Grid item style={{padding: 8}}>                                    
                                        <Button variant="contained" color='default'>Ver</Button>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems='center' style={{padding:4, paddingTop:10, paddingBottom:10, width:'50%'}}>
                                    <Grid item style={{paddingRight: 4}}>
                                        <DriveEta/>
                                    </Grid>
                                    <Grid item style={{paddingRight: 15}} >                                    
                                        <Typography variant='subtitle1'>Carro: {this.props.car}</Typography>
                                    </Grid>
                                    <Grid item style={{padding: 8}}>                                    
                                        <Button variant="contained" color='default'>Ver</Button>
                                    </Grid>
                                </Grid>
                                <Grid container style={{paddingTop:10}} justify='flex-end'>
                                    <Button variant="contained" color='default'>Encaminhar>></Button>
                                </Grid>                               
                            </Grid>
                        </Grid>
                    </Paper>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    };
};

BudgetEntity.defaultProps = {
    key: "KEY123456",
    client: "client_name",
    car: "AAA-1234 (car_model)",
    description: "description"
}

export default BudgetEntity;