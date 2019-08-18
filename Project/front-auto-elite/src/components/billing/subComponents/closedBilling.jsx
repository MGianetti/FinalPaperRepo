import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import UiList from '../../common/uiList';
import BillingClosedEntity from './billingClosedEntity';

class closedBilling extends Component {
    state = {
        dropDown:{
            items: ["Carro", 'Orçamento', 'Valor', 'Serviço'],
            helpText: "Busca cobrança baseada em parâmetro",
            defaultText: "Buscar cobrança...",
            selected: ''
        },
        searchField:'',
        search:[
            {'5b21ca3eeb7f6fbccd471815': <BillingClosedEntity data={{plate:"JYX-6432", service:"S0005445", value:"R$612", budget:'K0088987'}}/>},
            {'5b21ca3eeb7f6fbccd471816': <BillingClosedEntity data={{plate:"AOB-2190", service:"S0085477", value:"R$900", budget:'K0086574'}}/>},
            {'5b21ca3eeb7f6fbccd471817': <BillingClosedEntity data={{plate:"JUW-0295", service:"S0000411", value:"R$7350", budget:'K0046545'}}/>},
            {'5b21ca3eeb7f6fbccd471818': <BillingClosedEntity data={{plate:"JYX-6432", service:"S0009912", value:"R$230", budget:'K0081321'}}/>}
        ]
    };

    //improve performance
    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    //improve performance
    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { dropDown, searchField, search } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Grid container justify='center'style={{width:'100%'}} >
                        <Paper elevation='5' style={{width:'90%', marginTop:10}}>
                            <Grid container style={{padding: 20}}>
                                <Grid item style={{width:'50%'}}>
                                    <DropDown                                        
                                        data={{dropDown}}
                                        onChange={this.handleDropMenuChange}
                                    />
                                </Grid>
                                <Grid item style={{width:'50%'}}>
                                    <SearchBar 
                                        value={searchField} 
                                        onChange={this.handleSearchBarChange}
                                        />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' alignItems='center' style={{width:'100%',padding:20}}>
                                <Grid item align='center' style={{width:"20%"}}>
                                    <Typography variant='h7'>Carro</Typography>
                                </Grid>
                                <Grid item align='center' style={{width:"20%"}}>
                                    <Typography variant='h7'>Serviço</Typography>
                                </Grid>
                                <Grid item align='center'  style={{width:"20%"}}>
                                    <Typography variant='h7'>Orçamento</Typography>
                                </Grid>
                                <Grid item align='center' style={{width:"20%"}}>
                                    <Typography variant='h7'>Valor</Typography>
                                </Grid>
                                <Grid item align='center' style={{width:"20%"}}>
                                    <Typography variant='h7'>Ação</Typography>
                                </Grid>
                        </Grid>
                    </Paper>
                        <Paper elevation='5' style={{width:'90%', marginTop:15}}>                
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    {<UiList
                                        data={search}
                                        maxHeight={600}
                                    />}
                                </Grid>
                            </Grid>
                        </Paper>
                </Grid>
            </React.Fragment> 
        );
    };
};

export default closedBilling;