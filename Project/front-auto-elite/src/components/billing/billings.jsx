import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UiTabs from './../common/uiTabs';
import ClosedBilling from './subComponents/closedBilling';
import PendentBilling from './subComponents/pendentBilling';

class Billing extends Component {
    state = { 
        tabs:[
            {0: "Pendentes"},
            {1: "Concluídas"}
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
                        {tabSelected === 0 && <PendentBilling/>}
                        {tabSelected === 1 && <ClosedBilling/>}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default Billing;