import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';

const UiList = ({ data }) => {
    return (  
        <React.Fragment>    
            <Grid container style={{padding:10, paddingBottom:40}}>
                <Grid item>
                    <List style={{maxHeight: 600, overflow: 'auto'}}>                            
                        {data.map( d => {
                            return (
                                <ListItem  key={Object.keys(d)+1}>
                                    {Object.values(d)}
                                </ListItem>
                            )
                        })}
                    </List>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default UiList;