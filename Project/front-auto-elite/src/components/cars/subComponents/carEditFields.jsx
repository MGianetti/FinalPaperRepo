import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import { Typography, Button } from '@material-ui/core';
import { DirectionsCar } from '@material-ui/icons'

class CarEditFields extends Component {

    state = {
        info: this.props.info 
    }

    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    handleSwitchCheckChange = (event) => {
        let { isMercosul } = this.state.info;
        isMercosul = event.target.checked;
        this.props.info.isMercosul = isMercosul;
        this.setState({ isMercosul });
    }

    render() {
        const {plate, isMercosul, obs} = this.props.info; 
        return <React.Fragment>
            <Grid style={{paddingTop:20}} container justify='center'>
                <DirectionsCar fontSize='large'/>
            </Grid>
            <Grid container style={{width:'90%'}} alignItems='center' justify='center'>
                <TextField
                    onChange={this.handleFormChange}
                    name='plate'
                    margin='normal'
                    label="Placa"
                    placeholder="Placa do carro do cliente"
                    value={this.state.info.plate}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'20%'}}    
                />
                <Typography style={{paddingLeft:60}} variant='h6'>Mercosul:</Typography>
                <Switch name='isMercosul' checked={isMercosul} onChange={this.handleSwitchCheckChange}/>
            </Grid>
            <Grid container style={{paddingBottom:20}} alignItems='center' justify='center'>
                <TextField
                    //onChange={this.handleChange}
                    name='obs'
                    margin='normal'
                    label="Observações"
                    placeholder="Observações sobre o carro do cliente"
                    value={obs}
                    variant="outlined"
                    style={{backgroundColor:'#efefef',width:'80%'}} 
                    rowsMax='5'
                    multiline   
                />
            </Grid>     
        </React.Fragment>
    }
}

CarEditFields.defaultProps = {
    info: {
        plate: "",
        isMercosul: true,
        obs: ""
    }
}

export default CarEditFields
