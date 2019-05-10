import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Home from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import DirectionsCar from '@material-ui/icons/DirectionsCar';
import Build from '@material-ui/icons/Build'
import AttachMoney from '@material-ui/icons/AttachMoney'
import Person from '@material-ui/icons/Person'
import LocalMall from "@material-ui/icons/LocalMall"
import Payment from "@material-ui/icons/Payment"
import Visibility from "@material-ui/icons/Visibility"
import MenuBar from './common/menuBar';


class FixedMenuBar extends React.Component {
    state = {
        icons:[            
            ["Início", <Home/>],
            ["Clientes", <SupervisorAccount/>],
            ["Carros", <DirectionsCar/>],
            ["Serviços", <Build/>],
            ["Orçamentos", <AttachMoney/>],
            ["Mecânicos", <Person/>],
            ["Estoque", <LocalMall/>],
            ["Cobrança", <Payment/>],
            ["Vistoria", <Visibility/>]
        ]
    };
    render() {
        const { icons } = this.state;
        return (
            <React.Fragment>
                <MenuBar
                    data={icons}
                />
            </React.Fragment>
        );
    }
}

export default FixedMenuBar;
