import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UiTabs from './../common/uiTabs';
import SearchEmployee from './subComponents/searchEmployee';
import CreateEmployee from './subComponents/createEmployee';

class Employees extends Component {
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
                        {tabSelected === 0 && <CreateEmployee/>}
                        {tabSelected === 1 && <SearchEmployee/>}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default Employees;