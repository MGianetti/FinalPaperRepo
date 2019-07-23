import React, { Component } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Image from '@material-ui/icons/Image'
import Delete from '@material-ui/icons/Delete'
import { Paper, TextField, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

class CreateInspectionMobile extends Component {
    state = {  
        pictureQuantity: 1,
        filesNames: ['Hello.png', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge', '0000.jpge'],
        service:'',
        serviceObservations:'',
    }

    handleFormChange = (event) => {
        let state = this.state;
        state[event.target.name] = event.target.value;
        this.setState({ state })
    };

    Row = () => {
        const { filesNames } = this.state;
        return (
            filesNames.map( name => {
                return(
                    <Grid container alignItems="center" direction='row' style={{width: '100vmin'}}>                        
                        <Grid item style={{width: '87%'}}>                            
                            <ListItem button>
                                <ListItemIcon style={{margin: 0}}>
                                    <Image/>
                                </ListItemIcon>
                                <ListItemText primary={name}/>
                            </ListItem>
                        </Grid>
                        <Grid item style={{width: '13%'}}>
                            <Delete/>                            
                        </Grid>
                    </Grid>
                    
                );
        }));
    };

    render() {
        const { pictureQuantity, service, serviceObservations } = this.state;
        return (
            <React.Fragment>
                <Grid container direction='column' alignContent='center' style={{paddingTop:65}}>
                    <Grid item style={{paddingBottom:30}}>
                        <TextField
                            onChange={this.handleFormChange}
                            autoFocus
                            name='service'
                            margin='normal'
                            label="Associar serviço"
                            placeholder="Serviço"
                            value={service}
                            variant="outlined"
                            style={{backgroundColor:'#efefef', width:'99.4%'}}    
                        />
                    </Grid>
                    <Divider/>
                    <Grid item style={{paddingTop:20, paddingBottom:20}}>
                        <Paper style={{width: '100vmin', marginTop:15}}>
                            <div style={{width: '100%', height: 200}}>
                                <FixedSizeList height={200} width={'100%'} itemSize={35} itemCount={pictureQuantity}>
                                    {this.Row}
                                </FixedSizeList>
                            </div>
                        </Paper>
                    </Grid>
                    <Divider/>
                    <Grid item style={{paddingTop:20, paddingBottom:20}}>
                        <TextField
                            disabled
                            id="outlined-disabled"
                            defaultValue=""
                            value={'image.png'}
                            margin="normal"
                            variant="outlined"
                            style={{width:'99.4%'}} 
                        />
                    </Grid>
                    <Grid item style={{display: 'flex', justifyContent: 'center', paddingTop:20, paddingBottom:20}}>
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            type="file"
                            style={{display: 'none'}}
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" component="span">
                                Upload
                            </Button>
                        </label>
                    </Grid>
                    <Divider/>
                    <Grid item style={{display: 'flex', justifyContent: 'center', paddingTop:20, paddingBottom:20}}>
                        <TextField
                            onChange={this.handleFormChange}
                            name='serviceObservations'
                            margin='normal'
                            label="Observações sobre o serviço"
                            placeholder="Observações"
                            value={serviceObservations}
                            variant="outlined"
                            style={{backgroundColor:'#efefef', width:'100%'}} 
                            rowsMax='5'
                            multiline   
                        />
                    </Grid>
                    <Divider/>
                </Grid>
            </React.Fragment>
        );
    };
};

export default CreateInspectionMobile;