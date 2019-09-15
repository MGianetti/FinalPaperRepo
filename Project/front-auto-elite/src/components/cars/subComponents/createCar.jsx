import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';
import CarEditFields from './carEditFields';

class CreateCar extends Component {
    state = {
        dropDown:{
            items: Enums.ClientDropdownType,
            helpText: "Digite a informação do cliente",
            defaultText: "Associar Cliente...",
            selected: ''
        },
        newCarForm:{
            carPlate:'',
            carIsMercosul:false,
            carObservations:''
        },
        searchField:'',
        search: [],
             
    }

    // handleChange = name => event => {
    //     let { newCarForm } = this.state;
    //     newCarForm[event.target.name] = event.target.value;
    //     this.setState({ newCarForm })
    // }

    // handleSwitchCheckChange = (event) => {
    //     let { newCarForm } = this.state;
    //     newCarForm[event.target.name] = event.target.checked;
    //     this.setState({ newCarForm })
    // }

    // handleDropMenuChange = event => {
    //     const dropDownName = event.target.name;
    //     let newDropDownState = this.state[dropDownName];
    //     newDropDownState['selected'] = event.target.value;
    //     this.setState({ [dropDownName]: newDropDownState});
    // }

    // handleSearchBarChange = event => {
    //     this.setState({searchField: event.target.value});
    //     this.updateSearch(event.target.value);
    // }

    render() {
        // const { searchField, search, dropDown } = this.state;
        // const { carPlate,carIsMercosul } = this.state.newCarForm;

        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <CarEditFields></CarEditFields>
                    </Paper>
                    {/* <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                        <UiList data={search}/>
                    </Paper> */}
                </Grid>
            </React.Fragment>
        );
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchClients(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

export default CreateCar;