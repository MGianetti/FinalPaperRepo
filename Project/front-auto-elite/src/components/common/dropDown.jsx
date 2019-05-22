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
                    {Object.values(items).map( i => {
                        return (
                            <MenuItem value={Object.values(items).indexOf(i)}>{i}</MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText> {helpText} </FormHelperText>
            </FormControl>
        </form>
    );
};

export default DropDown;