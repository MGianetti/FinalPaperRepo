import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

class UiVersion extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Grid container justify="center">
                    <Typography>
                        Web Application Version 0.1
                    </Typography>
                </Grid>
            </div>  
        );
    };
};

export default UiVersion;