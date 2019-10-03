import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import UiTabs from '../common/uiTabs';
import CreateCar from './subComponents/createInspection';
import SearchCar from './subComponents/searchInspection';

class Inspection extends Component {
    state = {
        tabs:[
            {0: "Criar"},
            {1: "Buscar"}
        ],
        tabSelected: 0,
    };

    handleChange = (event, tabSelected) => {
        this.setState({tabSelected});
    };

    render() { 
        const {tabs,tabSelected} = this.state;

        return (
            <Grid container alignContent='flex-start'>
                <Grid container>
                    <UiTabs
                        data={tabs}
                        selected={tabSelected}
                        onChange={this.handleChange}
                    />
                </Grid>
                <Grid container>
                    {tabSelected === 0 && <CreateCar/>}
                    {tabSelected === 1 && <SearchCar/>}
                </Grid>
            </Grid>   

        );
    };
};

export default Inspection;