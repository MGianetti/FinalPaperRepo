import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import red from '@material-ui/core/colors/red';
import { Link } from "react-router-dom";

const MenuBar = ({ data, selectedIcon, onSelected }) => {
    
    const menuItems = [];
    
    for(let key in data){
        let bgColor = red[900];
        if(selectedIcon === key) bgColor = red[700];
        menuItems.push(
            <Link to={key} style={{textDecoration: 'none'}}>
                <MenuItem 
                    selected={selectedIcon === key}
                    key={key + "MenuItem"}
                    onClick={() => onSelected(key)}
                    style={{background: bgColor, color: 'white'}}
                    >
                    {data[key]}{key}                
                </MenuItem>
            </Link>    
        );
    }

    return (
        <MenuList id="menuList">
            {menuItems.map( e => e )}
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
            <MenuItem disabled style={{background: red[900], color: 'white'}}></MenuItem>
        </MenuList>
    );
}

export default MenuBar;
