import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Avatar, Fab, Button } from '@material-ui/core';
import ExpansionPanel  from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary  from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';


class ItemEntity extends Component {

    render() { 
        const {     quantity, code, name } = this.props.info;
        return (  
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Grid container justify='space-between'>
                        <Grid item>
                            <Typography variant='title'>{`${name}`}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='subtitle1'>{`(${code})`}</Typography>
                        </Grid>
                    </Grid>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Paper>
                        <Grid container direction='row' style={{width:'68vw', padding: 20}}>
                            <Grid container alignItems='center' direction='row'>
                                <Grid container style={{width:'75%'}} alignItems='center'>
                                    <Grid item style={{padding: 5}}>
                                        <Avatar src="https://i.ibb.co/12ktmtW/item-avatar.png"/>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='title'style={{paddingLeft:10}}>{`${name}`}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container style={{width:'25%'}}>
                                    <Grid container style={{padding:5, width:'50%'}}>
                                        <Grid item>
                                            <Fab style={{backgroundColor:'#FA8072'}} size='small'>
                                                <Delete/>
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{padding:5, width:'50%'}}>
                                        <Grid item>
                                            <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
                                                <Edit/>
                                            </Fab>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid container direction='row'>
                                <Grid container alignItems="center">
                                    <Grid item style={{padding:15}}>
                                        <Typography variant='display2' style={{fontSize: '20px'}}>
                                            Quantidade:                                 
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{padding:15}}>
                                        <Typography variant='display2' style={{fontSize:'20px'}} align="center">
                                            {quantity}                                    
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container alignItems="center" >
                                    <Typography style={{padding:15, fontSize: '20px'}} variant='display2'>
                                        Código:  
                                    </Typography>
                                    <Typography style={{color:'#000000', padding:15, fontSize: '20px'}} variant='display2'>
                                        {code}                           
                                    </Typography>                            
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    };
};

ItemEntity.defaultProps = {
    info: {
        cost: 20,
        quantity: 20,
        code:'SV3E500',
        name:'item_name'
    }
}

export default ItemEntity;