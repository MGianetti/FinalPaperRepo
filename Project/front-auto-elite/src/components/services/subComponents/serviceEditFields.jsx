import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Typography } from '@material-ui/core';
import DropDown from '../../common/dropDown';
import Switch from '@material-ui/core/Switch';
import SearchBar from './../../common/searchBar';
import Enums from '../../../helpers/Enums';
import UiList from '../../common/uiList';
import Queries from '../../../helpers/Queries';

class ServiceEditFields extends Component {
    state = {
        newServiceForm:{
            summary:'',
            type:'',
            employee:'',
            obligatoryInspection: false,
            serviceObservations:''
        },
        searchField:'',
        dropDown:{
            items: Enums.ServiceDropdown,
            helpText: "Associar um mecânico ao serviço",
            defaultText: "Buscar cliente...",
            selected: ''
        },
        search:[]
    };

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    handleSwitchCheckChange = (event) => {
        let { newServiceForm } = this.state;
        newServiceForm[event.target.name] = event.target.checked;
        this.setState({ newServiceForm })
    };

    handleSearchBarChange = event => {
        this.setState({searchField: event.target.value});
        this.updateSearch(event.target.value);
    };

    render() { 
        const { searchField, dropDown, search } = this.state;
        return (
            <React.Fragment>
                <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                    <Grid container justify='center' style={{width:'100%'}} >
                        <Grid container style={{width:'90%'}} justify='space-evenly'>
                                <TextField
                                    //onChange={this.handleFormChange}
                                    autoFocus
                                    name='summary'
                                    margin='normal'
                                    label="Resumo"
                                    placeholder="Resumo do serviço"
                                    //value={name}
                                    variant="outlined"
                                    style={{backgroundColor:'#efefef', width:'99.4%'}}    
                                />
                        </Grid>
                        <Grid container alignItems='center' justify="center" style={{width:'90%'}}>
                            <Typography>Tipo:</Typography>
                            <FormControl component="fieldset">
                                <RadioGroup
                                    aria-label="position"
                                    name="position"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    row
                                >
                                    <FormControlLabel
                                        value="corrective"
                                        control={<Radio color="primary" />}
                                        label="Corretivo"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="preventive"
                                        control={<Radio color="primary" />}
                                        label="Preventivo"
                                        labelPlacement="start"
                                    />
                                    <FormControlLabel
                                        value="eletronic"
                                        control={<Radio color="primary" />}
                                        label="Eletrônico"
                                        labelPlacement="start"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid container alignItems='center' style={{width:'90%'}}>
                            <Grid container alignItems='center' justify='center' style={{width:'50%'}}>
                                <Typography style={{marginRight:20}}> Mecânico: </Typography>
                                <DropDown                                        
                                    data={{dropDown}}
                                    onChange={this.handleDropMenuChange}
                                />
                            </Grid>
                            <Grid container alignItems='center' style={{width:'50%'}}>
                                <Typography style={{marginRight:20}}> Vistoria obrigatória: </Typography>
                                <Switch name='obligatoryInspection' onChange={this.handleSwitchCheckChange}/>
                            </Grid>
                        </Grid>
                        <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                            <TextField
                                //onChange={this.handleFormChange}
                                name='serviceObservations'
                                margin='normal'
                                label="Observações"
                                placeholder="Observações detalhadas sobre o serviço"
                                //value={carObservations}
                                variant="outlined"
                                style={{backgroundColor:'#efefef',width:'80%'}} 
                                rowsMax='5'
                                multiline   
                            />
                        </Grid>
                        <Grid container style={{alignItems:'center', display:'flex', paddingTop:25}} alignItems='center' justify='center'>
                            <Grid item>                                    
                                <Typography> Associar carro:  </Typography>
                            </Grid>
                            <Grid item>                                     
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                />
                            </Grid>
                        </Grid>   
                    </Grid>
                </Paper>
                <Paper style={{width:'90%', marginTop:15}}>
                    <UiList maxHeight={600} data={search} />
                </Paper>
            </React.Fragment>
        )
    }

    updateSearch(searchString) {
        let search;
        search = Queries.searchCars(searchString, this.state.dropDown.selected);
        this.setState({ search });
    }
}

ServiceEditFields.defaultProps = {
    
}

export default ServiceEditFields;