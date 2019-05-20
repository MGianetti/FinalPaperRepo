import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';

const UiTabs = ({ data, onChange, selected }) => {
    return (  
        <AppBar position="static">
            <Tabs onChange={onChange} centered value={selected} 
                TabIndicatorProps={{style: {backgroundColor: "#7FFFD4"}}}
                style={{background: '#2E8B57'}}
            >
                {data.map( d => 
                    <Tab key={'Tab' + Object.keys(d)} label={Object.values(d)} />
                )}
            </Tabs>
        </AppBar>
    );
};

export default UiTabs;

