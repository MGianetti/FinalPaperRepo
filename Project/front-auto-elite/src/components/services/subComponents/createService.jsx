import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ServiceEditFields from './serviceEditFields';
import { Button, Paper, Fab } from '@material-ui/core';
import UiList from '../../common/uiList';
import DropDown from '../../common/dropDown';
import { DirectionsCar, Person, Add, Close } from '@material-ui/icons';
import SearchBar from '../../common/searchBar';
import Enums from '../../../helpers/Enums';
import Queries from '../../../helpers/Queries';
import CarEntity from '../../cars/subComponents/carEntity';
import EmployeeEntity from '../../employees/subComponents/employeeEntity';

class CreateService extends Component {
    state = {
        info: {
            id: -1,
            observations: '',
            obligatoryInspection: false,
            summary: '',
            status: '',
            type: '',
            price: '',
            car_id: '',
            employee_id: ''
        },
        dropDownCar:{
            items: Enums.CarDropdown,
            helpText: "Busca carro baseado em parâmetro",
            defaultText: "Buscar carro...",
            selected: ''
        },
        dropDownEmployee:{
            items: Enums.EmployeeDropdown,
            helpText: "Busca funcionário baseado em parâmetro",
            defaultText: "Buscar funcionário...",
            selected: '',
        },
        searchField:'',
        search: [],
        car: null,
        employee: null,
    }

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({[dropDownName]: newDropDownState});
    };

    handleSearchBarChangeCar = event => {
        this.setState({searchField: event.target.value});
        this.updateSearchCar(event.target.value);
    };

    handleSearchBarChangeEmployee = event => {
        this.setState({searchField: event.target.value});
        this.updateSearchEmployee(event.target.value);
    };

    clearSearch = () => {
        let search = [];
        this.setState({search});
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    }

    handleSwitchCheckChange = (event) => {
        let { info } = this.state;
        info.obligatoryInspection = event.target.checked;
        this.setState({ info });
    }

    handleRadioButtonChange = event => {
        let { info } = this.state;
        info.type = event.target.value;
        this.setState({ info });
    }

    async updateSearchCar(searchString) {
        let search;
        search = await Queries.searchCars(searchString, this.state.dropDownCar.selected);
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

    async updateSearchEmployee(searchString) {
        let search;
        search = await Queries.searchEmployees(searchString, this.state.dropDownEmployee.selected);
        search = search.map(employee => {
            const info = employee.props.info;
            employee = <Grid key={employee.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{employee}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectEmployee(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return employee;
        });
        this.setState({ search });
    }

    selectEmployee = employeeInfo => {
        const employee_id = employeeInfo.id;
        const employee = <Grid container justify='center'>
                            <Person fontSize='large'/>
                            <Grid key={employeeInfo.id} container justify='center' alignItems='center' style={{padding:15}}>
                                <Grid item style={{width:"70%"}}><EmployeeEntity info={employeeInfo}></EmployeeEntity></Grid>
                                <Grid container style={{width:"10%"}} justify='center'><Fab onClick={this.unselectEmployee} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab></Grid>
                            </Grid>
                         </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.employee_id = employee_id;
        this.setState({employee, info});
    }

    unselectEmployee = () => {
        const employee = null;
        this.setState({employee});
    }

    async createService(serviceInfo) {
        await Queries.createService(serviceInfo);
        const info = {
            id: -1,
            observations: '',
            obligatoryInspection: false,
            summary: '',
            status: '',
            type: '',
            price: '',
            car_id: '',
            employee_id: ''
        }
        const car = null;
        const employee = null;
        alert("Serviço criado com sucesso!")
        this.setState({car, employee, info});
    }
    
    render() {
        const {search, searchField, dropDownCar, dropDownEmployee, employee, car} = this.state;

        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0'}}>
                        <ServiceEditFields info={this.state.info} onFormChange={this.handleFormChange} onSwitchCheckChange={this.handleSwitchCheckChange} onRadioButtonChange={this.handleRadioButtonChange}></ServiceEditFields>
                        {!car &&
                        <Grid container justify='center'>
                            <DirectionsCar fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDownCar}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChangeCar} /> </Grid>
                            </Grid>
                        </Grid>}
                        {car && car}
                        {!employee &&
                        <Grid container justify='center'>
                            <Person fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDownEmployee}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChangeEmployee} /> </Grid>
                            </Grid>
                        </Grid>}
                        {employee && employee}
                        <Grid container style={{padding:50}} alignItems='center' justify='center'>
                            <Button onClick={() => this.createService(this.state.info)} variant="contained" color='default'>Criar</Button>
                        </Grid>
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' style={{padding:10}}><Button onClick={this.clearSearch} variant="contained" color='default'>Limpar busca</Button></Grid>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        )
    }
}

export default CreateService;