import React from 'react';
import { Grid, Paper, List, ListItem } from '@material-ui/core';

const UiList = ({ data }) => {
    return (  
        <React.Fragment>    
            <Grid container style={{padding:10, paddingBottom:40}}>
                <Grid item style={{paddingTop:35}}>
                    <Paper>
                        <List style={{maxHeight: 400, overflow: 'auto'}}>                            
                            {data.map( d => {
                                return (
                                    <ListItem  key={Object.keys(d)+1}>
                                        {Object.values(d)}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UiList;