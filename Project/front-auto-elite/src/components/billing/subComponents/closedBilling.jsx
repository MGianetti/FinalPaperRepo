import React, { Component } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import UiList from '../../common/uiList';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';

class ClosedBilling extends Component {
    state = {
        dropDown:{
            items: Enums.BillingDropdown,
            helpText: "Busca cobrança baseada em parâmetro",
            defaultText: "Buscar cobrança...",
            selected: ''
        },
        searchField:'',
        search: []
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
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    render() {
        const { dropDown, searchField, search } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Grid container justify='center'style={{width:'100%'}} >
                        <Paper style={{width:'90%', marginTop:10}}>
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
                    <Paper style={{width:'90%', marginTop:15}}>
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
                        <Paper style={{width:'90%', marginTop:15}}>                
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

    async updateSearch(searchString) {
        let search;
        search = await Queries.searchClosedBillings(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
};

export default ClosedBilling;