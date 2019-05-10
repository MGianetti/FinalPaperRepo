import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const MenuBar = ({ data }) => {
    return (
        <MenuList>
            {data.map(element => (
                    <MenuItem>
                        {element[1]}
                        {element[0]}
                    </MenuItem>
                ) 
            )}
        </MenuList>
    );
}

export default MenuBar;
