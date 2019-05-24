import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';

class CreateService extends Component {
    state = {
        newServiceForm:{
            summary:'',
            type:'',
            mecânico:'',
            cel:'',
            cpf:'',
            cep:'',
            houseNumber:'',
            carPlate:'',
            carIsMercosul:false,
            carObservations:''
        }
    };
    render() { 
        return ( <p>Create Service</p> );
    };
};

export default CreateService;