import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import UiList from './../../common/uiList';
import ItemEntity from './itemEntity';

class SearchStock extends Component {
    state = {
        dropDown:{
            items: ["Nome", 'ID', 'Preço'],
            helpText: "Busca item baseado em parâmetro",
            defaultText: "Buscar item...",
            selected: ''
        },
        searchField:'',
        searchedItems:[
            {'5b21ca3eeb7f6fbccd471815': <ItemEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <ItemEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471817': <ItemEntity key='5b21ca3eeb7f6fbccd471817'/>},
            {'5b21ca3eeb7f6fbccd471818': <ItemEntity key='5b21ca3eeb7f6fbccd471818'/>}
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
        const { dropDown, searchField, searchedItems } = this.state; 
        return ( 
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:15}}>
                    <Grid justify='center' container style={{width:'100%'}} >
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
                        <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                            <Grid container justify='center'>
                                <Grid item style={{paddingTop:50}}>                                
                                    <UiList
                                        data={searchedItems}
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

export default SearchStock;