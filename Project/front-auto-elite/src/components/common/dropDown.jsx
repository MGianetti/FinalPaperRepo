import React from 'react';
import { Select, MenuItem, FormControl, FormHelperText, InputLabel } from '@material-ui/core';

const DropDown = ({ data, onChange }) => {
    const { defaultText, helpText, items, selected } = data
    return (
        <form style={{justifyContent:'center', display:'flex'}}>
            <FormControl>
                <InputLabel htmlFor="age-helper">{defaultText}</InputLabel>
                <Select value={selected} onChange={onChange}>
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>
                    
                    <MenuItem key={1} value={0}>{items[0]}</MenuItem>
                    <MenuItem key={2} value={1}>{items[1]}</MenuItem>
                    <MenuItem key={3} value={2}>{items[2]}</MenuItem>
                    <MenuItem key={4} value={3}>{items[3]}</MenuItem>
                </Select>
                <FormHelperText> {helpText} </FormHelperText>
            </FormControl>
        </form>
    );
};

export default DropDown;