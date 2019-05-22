import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid, MenuItem} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import UiList from '../../common/uiList';
import ClientEntity from './../../clients/subComponents/clientEntity';

const currencies = [
    {
        value: 'JEM-4556',
        label: 'Placa',
    },
    {
        value: '1186548123',
        label: 'CPF',
    },
    {
        value: 'João das Neves',
        label: 'Nome',
    },
    {
        value: '35 32228946',
        label: 'Telefone',
    },
    {
        value: '35 998453215',
        label: 'Celular',
    },
    {
        value: '37664-984',
        label: 'CEP',
    },
];
class CreateCar extends Component {
    state = {
        checkedA: true,
        checkedB: true,
        currency: 'Placa',
        searchedClients:[
            {'5b21ca3eeb7f6fbccd471815': <ClientEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'5b21ca3eeb7f6fbccd471816': <ClientEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'5b21ca3eeb7f6fbccd471817': <ClientEntity key='5b21ca3eeb7f6fbccd471817'/>},
            {'5b21ca3eeb7f6fbccd471818': <ClientEntity key='5b21ca3eeb7f6fbccd471818'/>},
            {'5b21ca3eeb7f6fbccd471819': <ClientEntity key='5b21ca3eeb7f6fbccd471819'/>},
            {'5b21ca3eeb7f6fbccd471820': <ClientEntity key='5b21ca3eeb7f6fbccd471820'/>},
            {'5b21ca3eeb7f6fbccd471821': <ClientEntity key='5b21ca3eeb7f6fbccd471821'/>},
            {'5b21ca3eeb7f6fbccd471822': <ClientEntity key='5b21ca3eeb7f6fbccd471822'/>},
            {'5b21ca3eeb7f6fbccd471823': <ClientEntity key='5b21ca3eeb7f6fbccd471823'/>}
        ]
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    
    render() {
        const { searchedClients } = this.state;
        return ( 
        <React.Fragment>    
            <Grid container justify='center' alignItems='center'>
                    <TextField
                        id="filled-name"
                        label="Placa"
                        value="JEM-2446"
                        margin="normal"
                        variant="filled"
                    />
                    <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Mercosul"
                    />
            </Grid>
            <Grid container justify='center' alignContent='center'>
                <Grid item style={{width:'50%'}}>
                    <TextField
                        id="observations"
                        value="Observações..."
                        margin="normal"
                        fullWidth
                        multiline
                        rowsMax = '5'
                        variant="filled"
                    />
                </Grid>
            </Grid>
            <Grid container justify='center' alignContent='center'>
                <Grid item justify='center'>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Associar Cliente"
                        value={this.state.currency}
                        onChange={this.handleChange('currency')}
                        helperText="Digite a informação do cliente"
                        margin="normal"
                        variant="filled"
                        >{currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item justify='center'>
                    <TextField
                        id="search"
                        type="search"
                        label="Buscar"
                        margin="normal"
                        variant="filled"
                    />
                </Grid>
            </Grid>
            <Grid container justify='center'>
                <Grid item style={{width:'90%'}}>                                
                    <UiList data={searchedClients}/>
                </Grid>
            </Grid>
        </React.Fragment>
        );
    };
};

export default CreateCar;