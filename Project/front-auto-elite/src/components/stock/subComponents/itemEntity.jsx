import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Paper, Grid, Avatar, Fab, Button } from '@material-ui/core';
import ExpansionPanel  from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary  from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import EditItem from './editItem';

class ItemEntity extends Component {

    state = {
        info: this.props.info,
        editingMode: false,
    };

    handleEdit = () => {
        const editingMode = true;
        this.setState({ editingMode });
    }

    handleModalClose = () => {
        const editingMode = false;
        this.setState({ editingMode });
    }

    handleEditSave = (info) => {
        this.setState({info});
    }

    render() { 
        const { editingMode } = this.state;
        const { id, quantity, idCode, description } = this.state.info;
        return (  
            <React.Fragment>
                <EditItem info={{id, quantity, idCode, description}} sucessCallBack={this.handleEditSave} modalEnable={editingMode} onClose={this.handleModalClose} />
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Grid container justify='space-between'>
                            <Grid item>
                                <Typography variant='title'>{`${description}`}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='subtitle1'>{`(${idCode})`}</Typography>
                            </Grid>
                        </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Paper>
                            <Grid container direction='row' style={{width:'68vw', padding: 20}}>
                                <Grid container alignItems='center' direction='row'>
                                    <Grid container style={{width:'75%'}} alignItems='center'>
                                        <Grid item style={{padding: 5}}>
                                            <Avatar src="https://i.ibb.co/12ktmtW/item-avatar.png"/>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant='title'style={{paddingLeft:10}}>{`${description}`}</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container style={{width:'25%'}}>
                                        <Grid container style={{padding:5, width:'50%'}}>
                                            <Grid item>
                                                <Fab style={{backgroundColor:'#FA8072'}} size='small'>
                                                    <Delete/>
                                                </Fab>
                                            </Grid>
                                        </Grid>
                                        <Grid container style={{padding:5, width:'50%'}}>
                                            <Grid item>
                                                <Fab style={{backgroundColor:'#00FF7F'}} size='small'>
                                                    <Edit onClick={this.handleEdit}/>
                                                </Fab>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid container direction='row'>
                                    <Grid container alignItems="center">
                                        <Grid item style={{padding:15}}>
                                            <Typography variant='display2' style={{fontSize: '20px'}}>
                                                Quantidade:                                 
                                            </Typography>
                                        </Grid>
                                        <Grid item style={{padding:15}}>
                                            <Typography variant='display2' style={{fontSize:'20px'}} align="center">
                                                {quantity}                                    
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" >
                                        <Typography style={{padding:15, fontSize: '20px'}} variant='display2'>
                                            Código:  
                                        </Typography>
                                        <Typography style={{color:'#000000', padding:15, fontSize: '20px'}} variant='display2'>
                                            {idCode}                           
                                        </Typography>  
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        );
    };
};

ItemEntity.defaultProps = {
    info: {
        id: -1,
        quantity: 20,
        idCode:'SV3E500',
        description:'item_name'
    }
}

export default ItemEntity;