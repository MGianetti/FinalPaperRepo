import React, { Component } from 'react';
import Clock from 'react-live-clock';
import { Grid } from '@material-ui/core';
class UiClock extends Component {

    render() {
        return (  
            <React.Fragment >
                <Grid container justify="center">
                    <h5 style={{paddingBottom: 2, color: 'black'}}>
                    <Clock format="HH:mm" ticking={true} interval={1000}/>
                    </h5>
                </Grid>
            </React.Fragment>
        );
    };
};

export default UiClock;