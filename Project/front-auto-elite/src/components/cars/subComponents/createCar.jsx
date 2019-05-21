import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import {Grid, MenuItem} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ClientList from '../../clients/subComponents/clientList';

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
      };

      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    render() { 
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
                <Grid item style={{width:'50%'}}>                                
                    <ClientList/>
                </Grid>
            </Grid>
           


        </React.Fragment>
        );
    };
    

};
 
export default CreateCar;