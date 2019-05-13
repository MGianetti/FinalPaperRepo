import React from "react";
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
        icons:{
            Inicio: <Home/>,
            Clientes: <SupervisorAccount/> ,
            Carros: <DirectionsCar/>,
            Serviços: <Build/>,
            Orçamentos: <AttachMoney/>,
            Mecânicos: <Person/>,
            Estoque: <LocalMall/>,
            Cobrança: <Payment/>,
            Vistoria: <Visibility/> 
        },
        selectedIcon: "Inicio"            
    };

    handleSelectedChange = iconKey => {
        this.setState( { selectedIcon: iconKey });
    };

    render() {
        const { icons, selectedIcon } = this.state;
        return (
            <React.Fragment>
                <MenuBar
                    data={icons}
                    selectedIcon={selectedIcon}
                    onSelected={this.handleSelectedChange}
                />
            </React.Fragment>
        );
    }
}

export default FixedMenuBar;
