import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Button, TextField } from '@material-ui/core';

class LoginPage extends Component {
    state = {  }
    render() { 
        return (
            <div style={{width: '98.7vw', height: '100vh', background:'LightCyan', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <Grid container style={{width: 500, height: 350, marginBottom: 200}} direction='column'>
                    <Paper style={{width: '100%', height: '100%', borderRadius:10}}>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <Typography variant='display1'>Login</Typography>
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <TextField
                                name='userName'
                                margin='normal'
                                label="Usuário"
                                placeholder="Usuário"
                                variant="outlined"
                                style={{backgroundColor:'#efefef', width:'80%', TextField:'red'}}    
                            />
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <TextField
                                type='password'
                                name='passWord'
                                margin='normal'
                                label="Senha"
                                placeholder="Senha"
                                variant="outlined"
                                style={{backgroundColor:'#efefef', width:'80%'}}    
                            />
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>                            
                            <Button variant="contained" color='default'>Entrar</Button>
                        </Grid>
                    </Paper>
                </Grid>  
            </div>
        );
    };
};

export default LoginPage;