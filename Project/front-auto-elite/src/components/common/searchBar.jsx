import React from 'react';
import { InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onChange, searchField }) => {
    return (
            <Grid container alignItems='center'>
                <SearchIcon/>  
                <InputBase 
                    placeholder="Search…" 
                    style={{backgroundColor:'blue'}} 
                    onChange={onChange}
                    value={searchField}
                />
            </Grid>
    );
};

export default SearchBar;