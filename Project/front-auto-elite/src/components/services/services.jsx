import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UiTabs from './../common/uiTabs';
import SearchService from './subComponents/searchService';
import CreateService from './subComponents/createService';

class Services extends Component {
    state = { 
        tabs:[
            {0: "Criar"},
            {1: "Buscar"}
        ],
        tabSelected: 1,
    };

    handleChange = (event, tabSelected) => {
        this.setState({ tabSelected });
    };
    
    render() {
        const { tabs, tabSelected} = this.state;
        return (
            <Grid container alignContent='flex-start'>
                <Grid container>
                    <Grid item style={{width:'100%'}}>
                        <UiTabs 
                            data={tabs} 
                            onChange={this.handleChange}
                            selected={tabSelected}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container styles={{width:'100%'}}>
                        {tabSelected === 0 && <CreateService/>}
                        {tabSelected === 1 && <SearchService/>}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default Services;