import React from 'react';
import { InputBase, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search'

const SearchBar = ({ onChange, searchField }) => {
    return (
            <Grid container style={{alignItems:'center', display:'flex', paddingTop:25}}>
                <SearchIcon/>  
                <InputBase 
                    placeholder="Buscar…" 
                    style={{background: '#efefef', borderRadius: 5,borderStyle:'solid', borderWidth:1}} 
                    onChange={onChange}
                    value={searchField}
                />
            </Grid>
    );
};

export default SearchBar;