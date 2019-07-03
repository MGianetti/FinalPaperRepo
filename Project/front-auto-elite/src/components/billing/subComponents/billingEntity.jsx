import React, { Component } from 'react';
import {Grid, Typography} from '@material-ui/core';
import {FiberManualRecord} from '@material-ui/icons';
import Button from '@material-ui/core/Button'

class bilingEntity extends Component {
    state={
    };

    render(){
        const {} = this.state;
        const {data} = this.props;
        return(
            <Grid container alignItems='center' direction="row" style={{width:'70vw'}}>
                <Grid item style={{width:"16.66%"}}>
                    <FiberManualRecord 
                        style={ (data.remain <3)? {color:"#d50000", fontSize:50} :
                                (data.remain >=3 && data.remain <=7)? {color:"#ffee58", fontSize:50} : {color:"#66bb6a", fontSize:50} }/>
                </Grid>
                <Grid item style={{width:"16.66%"}}>
                    <Typography variant="h7">{data.date}</Typography>
                </Grid>
                <Grid item style={{width:"16.66%"}}>
                    <Typography variant="h7">{data.plate}</Typography>
                </Grid>
                <Grid item style={{width:"20.66%"}}>
                    <Typography variant="h7">{data.name}</Typography>
                </Grid>
                <Grid item style={{width:"12.66%"}}>
                    <Typography variant="h7">{data.value}</Typography>
                </Grid>
                <Grid item style={{width:"16.66%"}}>
                    <Grid container>
                        <Grid item style={{width:"50%"}}>
                            <Button variant="outlined" color="primary"> Pago </Button> 
                        </Grid>
                        <Grid item style={{width:"50%"}}>
                            <Button variant="outlined" color="secondary"> Cobrar </Button> 
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }; 
};


export default bilingEntity;