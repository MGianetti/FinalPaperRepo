import React, { Component } from 'react';
import {Grid, Button, Fab, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
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
            service_id: -1      
        },
        dropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Busca serviço baseado em parâmetro",
            defaultText: "Buscar serviço...",
            selected: 0
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
        const service = <Grid container justify='center'>
                            <Build fontSize='large'/>
                            <Grid key={serviceInfo.id} container justify='center' alignItems='center' style={{padding:15}}>
                                <Grid item style={{width:"70%"}}><ServiceEntity info={serviceInfo}></ServiceEntity></Grid>
                                <Grid container style={{width:"10%"}} justify='center'>
                                    <Fab onClick={this.unselectService} style={{backgroundColor:'#FF0000'}} size='small'><Close/></Fab>
                                </Grid>
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
            service_id: -1      
        }
        const client = null;
        alert("Vistoria criada com sucesso!")
        this.setState({client, info});
    };

    handleFormControlChange = (event, name) => {
        var state = this.state;
        switch(name){
            case "fuelLevel":
                const fuelLevel = {
                    reserveTank: false,
                    quarterTank: false,
                    halfTank: false,
                    threeQuarterTank: false,
                    fullTank: false
                };
                fuelLevel[event.target.value] = true;
                state.info['fuelLevel'] = fuelLevel;
                this.setState( {state} );
                break;
            case "warningLights":
                state = this.state;
                const warningLights = this.state.info.warningLights;
                warningLights[event.target.value] = !warningLights[event.target.value];
                state.info['warningLights'] = warningLights;
                this.setState( {state} );
                break;
            case "scratches":
                state = this.state;
                const scratches = this.state.info.scratches;
                scratches[event.target.value] = !scratches[event.target.value];
                state.info['scratches'] = scratches;
                this.setState( {state} );
                break;
            case "specialTireIron":
                state = this.state;
                if(event.target.value === 'yes'){
                    state.info['specialTireIron'] = true;
                }else{
                    state.info['specialTireIron'] = false;
                }                
                this.setState( {state} );
                break;
            default:
                break;
        }
    };

    formatInfoForCreation(info) {
        const formattedInfo = {
            id: -1,
            fuelLevel_reserveTank: info.fuelLevel.reserveTank,
            fuelLevel_quarterTank: info.fuelLevel.quarterTank,
            fuelLevel_halfTank: info.fuelLevel.halfTank,
            fuelLevel_threeQuarterTank: info.fuelLevel.threeQuarterTank,
            fuelLevel_fullTank: info.fuelLevel.fullTank,
            warningLights_fuelInjection: info.warningLights.fuelInjection,
            warningLights_oilPressure: info.warningLights.oilPressure,
            warningLights_battery: info.warningLights.battery,
            warningLights_brake: info.warningLights.brake,
            warningLights_temperature: info.warningLights.temperature,
            warningLights_airBag: info.warningLights.airBag,
            warningLights_ABS: info.warningLights.ABS,
            warningLights_EPC: info.warningLights.EPC,
            warningLights_EPS: info.warningLights.EPS,
            warningLights_ESC: info.warningLights.ESC,
            warningLights_TPMS: info.warningLights.TPMS,
            scratches_hood: info.scratches.hood,
            scratches_frontBumper: info.scratches.frontBumper,
            scratches_rearBumper: info.scratches.rearBumper,
            scratches_driverDoor: info.scratches.driveDoor,
            scratches_passengerDoor: info.scratches.passengerDoor,
            scratches_rightRearDoor: info.scratches.rightRearDoor,
            scratches_leftRearDoor: info.scratches.leftRearDoor,
            scratches_trunk: info.scratches.trunk,
            specialTireIron: info.specialTireIron,
            service_id: info.service_id
        }
        return formattedInfo;
    }

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
                                {Enums.ServiceDropdown[this.state.dropDown.selected] === Enums.ServiceDropdownType.Summary && <Grid item style={{padding:20}}> <SearchBar value={searchField} onChange={this.handleSearchBarChange} /> </Grid>}
                                {Enums.ServiceDropdown[this.state.dropDown.selected] === Enums.ServiceDropdownType.Type && 
                                <Grid item style={{padding:20}}>
                                    <RadioGroup
                                        aria-label="position"
                                        name="position"
                                        value={this.state.searchField}
                                        onChange={this.handleSearchBarChange}
                                        row
                                    >
                                        <FormControlLabel
                                            value={Enums.ServiceType.Corrective}
                                            control={<Radio color="primary" />}
                                            label="Corretivo"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value={Enums.ServiceType.Preventive}
                                            control={<Radio color="primary" />}
                                            label="Preventivo"
                                            labelPlacement="start"
                                        />
                                        <FormControlLabel
                                            value={Enums.ServiceType.Eletronic}
                                            control={<Radio color="primary" />}
                                            label="Eletrônico"
                                            labelPlacement="start"
                                        />
                                    </RadioGroup>
                                </Grid>}
                            </Grid>
                        </Grid>
                        }
                        {service && service}
                        <Grid container justify='center' style={{padding:10}}> <Button onClick={() => this.createInspection(this.formatInfoForCreation(this.state.info))} variant="contained" color='default'>Criar</Button> </Grid>
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