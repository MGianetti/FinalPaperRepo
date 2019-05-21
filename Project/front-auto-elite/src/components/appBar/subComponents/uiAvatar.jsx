import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


class UiAvatar extends Component {
    render() { 
        const styles = {
            avatar:{
                margin: 0
            }
        };
        return (
            <Grid container justify="center">
                <Avatar src={''} style={styles.avatar}/>
            </Grid>
        );
    };
};

export default UiAvatar;