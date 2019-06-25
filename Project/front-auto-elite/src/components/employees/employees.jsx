import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchEmployee from './subComponents/searchEmployee';
import CreateEmployee from './subComponents/createEmployee';
import UiTabs from './../common/uiTabs';
import styles from './styles';
class Employees extends Component {
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
                    <Grid item style={styles.grid}>
                        <UiTabs 
                            data={tabs} 
                            onChange={this.handleChange}
                            selected={tabSelected}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid container styles={styles.grid}>
                        {tabSelected === 0 && <CreateEmployee/>}
                        {tabSelected === 1 && <SearchEmployee/>}
                    </Grid>
                </Grid>
            </Grid>
        );
    };
};

export default Employees;