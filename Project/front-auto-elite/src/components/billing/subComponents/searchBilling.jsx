import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import UiList from './../../common/uiList';

class SearchBilling extends Component {
    state = {
        dropDown:{
            items: ["Carro", 'Orçamento', 'Valor', 'Serviço'],
            helpText: "Busca cobrança baseada em parâmetro",
            defaultText: "Buscar cobrança...",
            selected: ''
        },
        searchField:'',
        searchedBillings:[
            {'5b21ca3eeb7f6fbccd471815': <h6>oi</h6>},
            {'5b21ca3eeb7f6fbccd471816': <h6>oi</h6>},
            {'5b21ca3eeb7f6fbccd471817': <h6>oi</h6>},
            {'5b21ca3eeb7f6fbccd471818': <h6>oi</h6>}
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
        const { dropDown, searchField, searchedBillings } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Grid justify='center' container style={{width:'100%'}} >
                        <Paper style={{width:'80%'}}>
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
                        <Paper elevation='5' style={{width:'90%', marginTop:15}}>                
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    <UiList
                                        data={searchedBillings}
                                        maxHeight={600}
                                    />
                                </Grid>
                            </Grid>
                        </Paper>
                        </Grid>
                </Grid>
            </React.Fragment> 
        );
    };
};

export default SearchBilling;