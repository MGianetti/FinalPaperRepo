import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';

const UiTabs = ({ data, onChange }) => {
    console.log(data)
    return (  
        <AppBar position="static">
            <Tabs onChange={onChange} centered>
                {data.map( d => 
                    <Tab label={Object.values(d)} />
                )}
            </Tabs>
        </AppBar>
    );
};

export default UiTabs;

