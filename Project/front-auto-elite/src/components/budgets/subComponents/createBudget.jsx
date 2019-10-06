import React, { Component } from 'react';
import {Grid} from '@material-ui/core';
import UiList from '../../common/uiList';
import Paper from '@material-ui/core/Paper';
import DropDown from './../../common/dropDown';
import SearchBar from './../../common/searchBar';
import { DirectionsCar } from '@material-ui/icons'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Enums from './../../../helpers/Enums';
import Queries from './../../../helpers/Queries';
import { Button, Fab } from '@material-ui/core';
import { Build, Add, Close } from '@material-ui/icons';
import CarEntity from '../../cars/subComponents/carEntity'
import ServiceEntity from '../../services/subComponents/serviceEntity'
import ItemEntity from '../../stock/subComponents/itemEntity'



class CreateBudget extends Component {
    state = {
        info:{
            car_id:'',
            service_id:'',
            itens:['']
        },
        carDropDown:{
            items: Enums.CarDropdown,
            helpText: "Digite a informação do carro",
            defaultText: "Procurar por...",
            selected: ''
        },
        serviceDropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Digite a informação do serviço",
            defaultText: "Procurar por...",
            selected: ''
        },
        itemDropDown:{
            items: Enums.ItemDropdown,
            helpText: "Digite a informação do item",
            defaultText: "Procurar por...",
            selected: ''
        },
        newBudgetForm:{
            car: ''
        },
        searchType: Enums.SearchType.NoSearch,
        searchField:'',
        search: [],
        car: null,
        service: null,
        item: null
    };

    handleChange = event => {
        let { newBudgetForm } = this.state;
        newBudgetForm[event.target.name] = event.target.value;
        this.setState({ newBudgetForm })
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    clearSearch = () => {
        let search = [];
        this.setState({search});
    };

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };
    
    //Choosing car:

    handleSearchBarChangeCar = event => {
        this.setState({searchField: event.target.value});
        this.updateSearchCar(event.target.value);
    };

    async updateSearchCar(searchString) {
        let search;
        search = await Queries.searchCars(searchString, this.state.carDropDown.selected);
        search = search.map(car => {
            const info = car.props.info;
            car = <Grid key={car.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{car}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectCar(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return car;
        });
        this.setState({ search });
    }

    selectCar = carInfo => {
        const car_id = carInfo.id;
        const car = <Grid container justify='center'>
                        <DirectionsCar fontSize='large'/>
                        <Grid key={carInfo.id} container justify='center' alignItems='center' style={{padding:15}}>
                            <Grid item style={{width:"70%"}}><CarEntity info={carInfo}></CarEntity></Grid>
                            <Grid container style={{width:"10%"}} justify='center'><Fab onClick={this.unselectCar} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab></Grid>
                        </Grid>
                    </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.car_id = car_id;
        this.setState({car, info});
    }

    unselectCar = () => {
        const car = null;
        this.setState({car});
    }

    //Choosing service

    handleSearchBarChangeService = event => {
        this.setState({searchField: event.target.value});
        this.updateSearchService(event.target.value);
    };

    async updateSearchService(searchString) {
        let search;
        search = await Queries.searchServices(searchString, this.state.serviceDropDown.selected);
        search = search.map(service => {
            const info = service.props.info;
            service = <Grid key={service.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{service}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectService(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return service;
        });
        this.setState({ search });
    }

    selectService = serviceInfo => {
        const service_id = serviceInfo.id;
        const service = <Grid container justify='center'>
                        <Build fontSize='large'/>
                        <Grid key={serviceInfo.id} container justify='center' alignItems='center' style={{padding:15}}>
                            <Grid item style={{width:"70%"}}><ServiceEntity info={serviceInfo}/></Grid>
                            <Grid container style={{width:"10%"}} justify='center'><Fab onClick={this.unselectService} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab></Grid>
                        </Grid>
                    </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.service_id = service_id;
        this.setState({service, info});
    }

    unselectService = () => {
        const service = null;
        this.setState({ service });
    }

    //Choosing item

    handleSearchBarChangeItem = event => {
        this.setState({searchField: event.target.value});
        this.updateSearchItem(event.target.value);
    };

    async updateSearchItem(searchString) {
        let search;
        search = await Queries.searchItems(searchString, this.state.itemDropDown.selected);
        search = search.map(item => {
            const info = item.props.info;
            item = <Grid key={item.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{item}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectItem(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return item;
        });
        this.setState({ search });
    }

    selectItem = itemInfo => {
        const item_id = itemInfo.id;
        const item = <Grid container justify='center'>
                        <DirectionsCar fontSize='large'/>
                        <Grid key={itemInfo.id} container justify='center' alignItems='center' style={{padding:15}}>
                            <Grid item style={{width:"70%"}}><ItemEntity info={itemInfo}/></Grid>
                            <Grid container style={{width:"10%"}} justify='center'><Fab onClick={this.unselectItem} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab></Grid>
                        </Grid>
                    </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.item_id = item_id;
        this.setState({item, info});
    }

    unselectItem= () => {
        const item = null;
        this.setItem({ item });
    }

    
    handleFormChange = (event) => {
        let { newBudgetForm } = this.state;
        newBudgetForm[event.target.name] = event.target.value;
        this.setState({ newBudgetForm })
    };

    render() {
        const { carDropDown, serviceDropDown, itemDropDown, searchField, search } = this.state;
        const { car, service, item } = this.state;
        
        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        {!car &&
                        <Grid container justify='center'>
                            <DirectionsCar fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{carDropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChangeCar} /> </Grid>
                            </Grid>
                        </Grid>}
                        {car && car}
                        {!service &&
                        <Grid container justify='center'>
                            <Build fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{serviceDropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChangeService} /> </Grid>
                            </Grid>
                        </Grid>}
                        {service && service}
                        {!item &&
                        <Grid container justify='center'>
                            <Build fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{itemDropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChangeItem} /> </Grid>
                            </Grid>
                        </Grid>}
                        {item && item}
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' style={{width:'100%'}} direction='column' alignItems='center'>
                            <Typography>
                                Search Results
                            </Typography>
                            <Grid item style={{paddingTop:30}}>
                                <UiList data={search}/>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }

    async   updateSearch(searchString)
    {
        let search;
        switch(this.state.searchType)
        {
            case Enums.SearchType.Car:
                search = await Queries.searchCars(searchString, this.state.carDropDown.selected);
                break;
            case Enums.SearchType.Service:
                search = await Queries.searchServices(searchString, this.state.serviceDropDown.selected);
                break;
            case Enums.SearchType.Item:
                search = await Queries.searchItems(searchString, this.state.itemDropDown.selected);
                break;
            default:
                search = [];
                break;
        }
        this.setState({ search });
    }
    
}

export default CreateBudget;