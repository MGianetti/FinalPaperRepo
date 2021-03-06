import React from 'react';
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const ItemsDrawer = ({ data, selectedIcon, onSelected }) => {
    
    const menuItems = [];
    
    for(let key in data){
        let bgColor = 'LightCyan';
        if(selectedIcon === key) bgColor = 'PaleTurquoise';
        menuItems.push(
            <Link to={key} key={'Link' + key} style={{textDecoration: 'none'}}>
                <MenuItem 
                    selected={selectedIcon === key}
                    key={key + "MenuItem"}
                    onClick={() => onSelected(key)}
                    style={{background: bgColor}}
                    >
                    {data[key]}{key}                
                </MenuItem>
            </Link>    
        );
    }

    return (
        <MenuList id="menuList">
            {menuItems.map( e => e )}
        </MenuList>
    );
}

export default ItemsDrawer;
