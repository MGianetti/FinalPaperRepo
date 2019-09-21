import React from 'react';
import { Grid, List, ListItem } from '@material-ui/core';

const UiList = ({ data, maxHeight }) => {
    return (  
        <React.Fragment>    
            <Grid container style={{padding:10, paddingBottom:40}}>
                <Grid item>
                    <List style={{maxHeight: maxHeight, overflow: 'auto'}}>                            
                        {data.map( d => {
                            return (
                                <ListItem key={d.key}>
                                    {d}
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