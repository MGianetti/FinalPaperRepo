import React from 'react';
import { Select, MenuItem, FormControl, FormHelperText, InputLabel } from '@material-ui/core';

const DropDown = ({ data, onChange }) => {
    let dropDown = Object.keys(data)[0];
    dropDown = data[dropDown]
    const { defaultText, selected, items, helpText} = dropDown;
    return (
        <form style={{justifyContent:'center', display:'flex'}}>
            <FormControl>
                <InputLabel htmlFor="age-helper">{defaultText}</InputLabel>
                <Select value={selected} name={Object.keys(data) + ''} onChange={onChange}>
                    <MenuItem value="">
                        <em>Nenhum</em>
                    </MenuItem>                    
                    {Object.values(items).map( i => {
                        return (
                            <MenuItem 
                                value={Object.values(items).indexOf(i)}
                                key={Object.keys(data) + i}
                            >
                                {i}
                            </MenuItem>
                        )
                    })}
                </Select>
                <FormHelperText> {helpText} </FormHelperText>
            </FormControl>
        </form>
    );
};

export default DropDown;