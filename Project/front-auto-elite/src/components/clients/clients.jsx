import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import CreateClient from './subComponents/createClient';
import SearchClient from './subComponents/searchClient';
import UiTabs from './../common/uiTabs';
class Clients extends Component {
    state = { 
        tabs:[
            {0: "Criar"},
            {1: "Buscar"}
        ],
        tabSelected: 0,
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
                        {tabSelected === 0 && <CreateClient/>}
                        {tabSelected === 1 && <SearchClient/>}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default Clients;