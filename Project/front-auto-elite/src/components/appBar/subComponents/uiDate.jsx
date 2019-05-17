import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
class UiDate extends Component {
    state = {  }
    render() { 
        return (
            <Grid container justify="center">
                <Typography align='right'>
                    5/13/2019
                </Typography>
            </Grid> 
        );
    };
};

export default UiDate;