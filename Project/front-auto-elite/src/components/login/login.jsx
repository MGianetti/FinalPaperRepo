import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography, Button, TextField } from '@material-ui/core';

class LoginPage extends Component {
    state = {
        userName:'',
        passWord:''
    };

    handleFormChange = (event) => {
        let state = this.state;
        state[event.target.name] = event.target.value;
        this.setState({ state })
    };

    render() { 
        const { userName, passWord } = this.state;
        return (
            <div style={{width: '98.7vw', height: '100vh', background:'LightCyan', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                <Grid container style={{width: 500, height: 350, marginBottom: 200}} direction='column'>
                    <Paper style={{width: '100%', height: '100%', borderRadius:10}}>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <Typography variant='display1'>Login</Typography>
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <TextField
                                value={userName}
                                name='userName'
                                margin='normal'
                                label="Usuário"
                                placeholder="Usuário"
                                variant="outlined"
                                style={{backgroundColor:'#efefef', width:'80%', TextField:'red'}} 
                                onChange={this.handleFormChange}   
                            />
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <TextField
                                value={passWord}
                                type='password'
                                name='passWord'
                                margin='normal'
                                label="Senha"
                                placeholder="Senha"
                                variant="outlined"
                                style={{backgroundColor:'#efefef', width:'80%'}}    
                                onChange={this.handleFormChange}   
                            />
                        </Grid>
                        <Grid item style={{width: '100%', height: '25%', display: 'flex', alignItems: 'center', justifyContent:'center'}}>                            
                            <Button 
                                onClick={() => this.props.onAuth(userName, passWord)} 
                                variant="contained" 
                                color='default'
                            >Entrar
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>  
            </div>
        );
    };
};

export default LoginPage;