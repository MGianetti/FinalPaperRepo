import React, { Component } from 'react';
import {Grid, Button, Fab} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InspectionEditFields from './inspectionEditFields';
import UiList from '../../common/uiList';
import Queries from '../../../helpers/Queries';
import SearchBar from '../../common/searchBar';
import Enums from '../../../helpers/Enums';
import DropDown from '../../common/dropDown';
import { Add, Close } from '@material-ui/icons'
import ServiceEntity from '../../services/subComponents/serviceEntity';
import { Build } from '@material-ui/icons'

class CreateInspection extends Component {

    state = {
        info: {
            fuelLevel: {
                reserveTank: false,
                quarterTank: false,
                halfTank: false,
                threeQuarterTank: false,
                fullTank: false
            },
            warningLights: {
                fuelInjection: false, 
                oilPressure: false,
                battery: false,
                brake: false,
                temperature: false,
                airBag: false,
                ABS: false,
                EPC: false,
                EPS: false,
                ESC: false,
                TPMS: false
            },
            scratches:{                
                hood: false,
                frontBumper:false,
                rearBumper:false,
                driverDoor:false,
                passengerDoor:false,
                rightRearDoor:false,
                leftRearDoor:false,
                trunk:false
            },
            specialTireIron: false,            
        },
        dropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Busca serviço baseado em parâmetro",
            defaultText: "Buscar serviço...",
            selected: ''
        },
        searchField:'',
        search:[],
        service: null
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    clearSearch = () => {
        let search = [];
        this.setState({search});
    };

    unselectService = () => {
        const service = null;
        this.setState({service});
    };

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    handleSwitchCheckChange = (event) => {
        let { info } = this.state;
        info.is_Mercosul = event.target.checked;
        this.setState({ info });
    };

    selectService = serviceInfo => {
        const service_id = serviceInfo.id;
        const service =  <Grid key={serviceInfo.id} container justify='center' alignItems='center'>
                            <Grid item style={{width:"70%"}}><ServiceEntity info={serviceInfo}></ServiceEntity></Grid>
                            <Grid container style={{width:"10%"}} justify='center'>
                                <Fab onClick={this.unselectService} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab>
                            </Grid>
                        </Grid>
        this.clearSearch();
        let {info} = this.state;
        info.service_id = service_id;
        this.setState({service, info});
    };
    
    async updateSearch(searchString) {
        let search;
        search = await Queries.searchServices(searchString, this.state.dropDown.selected);
        search = search.map(client => {
            const info = client.props.info;
            client = <Grid key={client.key} container alignItems='center'>
                        <Grid item style={{width:"90%"}}>{client}</Grid>
                        <Grid container style={{width:"10%"}} justify='center'>
                            <Fab onClick={() => this.selectService(info)} style={{backgroundColor:'#00FF00'}} size='small'><Add/></Fab>
                        </Grid>
                    </Grid>
            return client;
        });
        this.setState({ search });
    };

    async createInspection(inspectionInfo) {
        await Queries.createInspection(inspectionInfo);
        const info = {
            plate: "",
            model: "",
            year: 0,
            is_Mercosul: false,
            obs: "",
            client_id: ""
        }
        const client = null;
        alert("Carro criado com sucesso!")
        this.setState({client, info});
    };

    handleFormControlChange = (event, name) => {
        switch(name){
            case "fuelLevel":
                break;
            case "warningLights":
                break;
            case "scratches":
                break;
            case "specialTireIron ":
                break;
        }
    };

    render() {
        const {search, searchField, dropDown, service} = this.state;

        return ( 
            <React.Fragment>  
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%',backgroundColor:'#e0e0e0', justify: 'center'}}>
                        <InspectionEditFields info={this.state.info} onFormControlChange={this.handleFormControlChange}/>
                        {!service &&
                        <Grid container style={{paddingTop: 50}} justify='center'>
                            <Build fontSize='large'/>
                            <Grid container direction='row' justify='center'>
                                <Grid item style={{padding:20}}> <DropDown data={{dropDown}} onChange={this.handleDropMenuChange} /> </Grid>
                                <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>
                            </Grid>
                        </Grid>
                        }
                        {service && service}
                        <Grid container justify='center' style={{padding:10}}> <Button onClick={() => this.createInspection(this.state.info)} variant="contained" color='default'>Criar</Button> </Grid>
                    </Paper>
                    <Paper style={{width:'90%', marginTop:15}}>
                        <Grid container justify='center' style={{padding:10}}><Button onClick={this.clearSearch} variant="contained" color='default'>Limpar busca</Button></Grid>
                        <UiList maxHeight={600} data={search} />
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

export default CreateInspection;