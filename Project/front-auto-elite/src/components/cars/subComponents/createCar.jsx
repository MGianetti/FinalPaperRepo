import React, { Component } from 'react';
import {Grid, Button} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CarEditFields from './carEditFields';
import UiList from '../../common/uiList';
import Queries from '../../../helpers/Queries';

class CreateCar extends Component {

    state = {
        info: {
            id: -1,
            plate: "",
            model: "",
            year: "",
            is_Mercosul: false,
            obs: "",
            client_id: ""
        },
        searchField:'',
        search:[]
    };

    render() {
        const {search} = this.state;

        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <CarEditFields></CarEditFields>
                        <Grid container justify='center' style={{padding:10}}> <Button variant="contained" color='default'>Criar</Button> </Grid>
                    </Paper>
                    <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' style={{padding:10}}><Button variant="contained" color='default'>Limpar busca</Button></Grid>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchCars(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }

}

export default CreateCar;