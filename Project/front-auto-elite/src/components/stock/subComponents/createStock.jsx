import React, { Component } from 'react';
<<<<<<< HEAD
import ItemEntity from './itemEntity';
=======
import { Grid, Paper } from '@material-ui/core';
import StockEditFields from './stockEditFields';
import Button from '@material-ui/core/Button';
import Queries from './../../../helpers/Queries';
>>>>>>> createStock

class CreateStock extends Component {
    state = {
        info: {
            code: "",
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
        /*await Queries.createItem(createInfo);
        const info =  {
            code: "",
            description: "",
            quantity: "",
        }
        alert("Item criado com sucesso!")
        this.setState({info});*/
        alert('Handle Item Create');
    }

    render() { 
<<<<<<< HEAD
        return ( <ItemEntity key='itemPlaceholder1'/>);
=======
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
>>>>>>> createStock
    };
};

export default CreateStock;