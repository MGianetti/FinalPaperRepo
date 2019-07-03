import React, { Component } from 'react';
import {Grid, Typography, IconButton,Fab} from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

class bilingClosedEntity extends Component {
    state={
    };

    render(){
        const {} = this.state;
        const {data} = this.props;
        return(
            <Grid container alignItems='center' direction="row" style={{width:'75vw'}}>
                <Grid item align='center' style={{width:"20%"}}>
                    <Typography variant="h7">{data.plate}</Typography>
                </Grid>
                <Grid item align='center'  style={{width:"20%"}}>
                    <Typography variant="h7">{data.service}</Typography>
                </Grid>
                <Grid item align='center' style={{width:"20%"}}>
                    <Typography variant="h7">{data.budget}</Typography>
                </Grid>
                <Grid item align='center' style={{width:"20%"}}>
                    <Typography variant="h7">{data.value}</Typography>
                </Grid>
                <Grid container style={{width:"20%"}}>
                    <Grid container alignItems='center' style={{width:'50%'}}>
                        <Grid item aling='center'>
                            <Fab style={{backgroundColor:'#FA8072'}} size='small'>
                                <Delete/>
                            </Fab>
                        </Grid>
                    </Grid>
                    <Grid container style={{width:'50%'}}>
                        <Grid item aling='center'>
                            <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
                                <Edit/>
                            </Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }; 
};


export default bilingClosedEntity;