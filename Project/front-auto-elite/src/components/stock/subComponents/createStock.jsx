import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import StockEditFields from './stockEditFields';
import Button from '@material-ui/core/Button';
import Queries from './../../../helpers/Queries';

class CreateStock extends Component {
    state = {
        info: {
            idCode: "",
            description: "",
            quantity: "",
        }
    };


    handleFormChange = (event) => {
        let { info } = this.state;
        info[event.target.name] = event.target.value;
        this.setState({info})
    };

    handleCreate = async (createInfo) => {
        await Queries.createItem(createInfo);
        const info = {
            idCode: "",
            description: "",
            quantity: "",
        }
        alert("Item criado com sucesso!")
        this.setState({info});
    }

    render() { 
        return (
            <React.Fragment>
                <Grid container justify='center' style={{paddingTop:25}}>
                    <Paper style={{width:'90%', backgroundColor:'#e0e0e0'}}>
                        <Grid container justify='center' style={{width:'100%'}} >
                            <StockEditFields info={this.state.info} onFormChange={this.handleFormChange}/>
                            <Grid container style={{paddingBottom:50, paddingTop:50}} alignItems='center' justify='center'>
                                <Button onClick={() => this.handleCreate(this.state.info)} variant="contained" color='default'>Criar</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    };
};

export default CreateStock;