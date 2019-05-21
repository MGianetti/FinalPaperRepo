import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';

class SearchBilling extends Component {
    state = {
        dropDown:{
            items: ["Carro", 'Orçamento', 'Valor', 'Serviço'],
            helpText: "Busca cobrança baseada em parâmetro",
            defaultText: "Buscar cobrança...",
            selected: ''
        },
        searchField:''
    };

    //improve performance
    handleDropMenuChange = event => {
        let dropDown = this.state.dropDown;
        dropDown['selected'] = event.target.value;
        this.setState({dropDown});
    };

    //improve performance
    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value})
    };

    render() {
        const { dropDown, searchField } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Paper style={{width:'90%'}}>
                        <Grid justify='center' container style={{width:'100%'}} >
                            <Paper style={{width:'80%'}}>
                                <Grid container style={{padding: 20}}>
                                    <Grid item style={{width:'50%'}}>
                                        <DropDown                                        
                                            data={dropDown}
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
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    {/*Must do a list component*/}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment> 
        );
    };
};

export default SearchBilling;