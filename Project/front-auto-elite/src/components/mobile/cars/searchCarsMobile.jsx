import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import Enums from '../../../helpers/Enums';
import SearchBar from '../../common/searchBar';
import CarEntity from './carEntityMobile';
import UiList from './../../common/uiList';


class SearchCarsMobile extends Component {
    state = {
        info: {
            id: -1,
            plate: "JEM2446",
            model: "Fox Prata- gasolina 2p",
            year: 2004,
            is_Mercosul: false,
            obs: "Observação sobre o fox",
            Client: {
                name: "Mateus Gianetti de Jesus",
                cpf: "44489977824"
            }
        },
        dropDownServices:{
            items: ['Service not found'],
            helpText: "Busca serviços de um carro",
            defaultText: "Buscar serviço...",
            selected: ''
        }, 
        dropDownSearch:{
            items: Enums.CarDropdown,
            helpText: "Busca carro baseado em parâmetro",
            defaultText: "Buscar carro...",
            selected: ''
        },
        searchField:'',
        search: [<CarEntity/>, <CarEntity/>, <CarEntity/>, <CarEntity/>, <CarEntity/>,
             <CarEntity/>, <CarEntity/>, <CarEntity/>, <CarEntity/>, <CarEntity/>]
    };

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };
    
    render() { 
        const { dropDownSearch, searchField, search } = this.state;
        return ( 
            <Grid container justify='center'>
                <Grid container direction='row' justify='center' style={{paddingTop: 60, paddingBottom:10}}>
                    <Paper style={{width: '80%', paddingBottom: 15}}>
                        <Grid container justify='center'> <DropDown data={{dropDownSearch}} onChange={this.handleDropMenuChange} /> </Grid>
                        <Grid container justify='center'> <SearchBar value={searchField} onChange={this.hndleSearchBarChange} /> </Grid>
                    </Paper>
                    <Grid container justify='center' style={{padding:10}}>
                        <UiList maxHeight={600} data={search} />
                    </Grid>
                </Grid>                   
            </Grid>
        );
    }

}
 
export default SearchCarsMobile;

