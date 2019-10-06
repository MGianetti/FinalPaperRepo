import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Person, LocalMall } from '@material-ui/icons'

const StockEditFields = ({info, onFormChange}) => {
    const { idCode, description, quantity } = info;
    return ( 
        <React.Fragment>
            <Grid style={{paddingTop:50, width:'90%'}} container justify='center'>
                <LocalMall fontSize='large'/>
            </Grid>
            <Grid container style={{width:'90%'}} justify="center">
                <TextField
                    required
                    onChange={onFormChange}
                    name='idCode'
                    margin='normal'
                    label="Código"
                    placeholder="Código do produto"
                    value={idCode}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'15%'}}    
                />
                <TextField
                    required
                    onChange={onFormChange}
                    name='quantity'
                    margin='normal'
                    label="Quantidade"
                    placeholder="Quantidade"
                    value={quantity}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'15%'}}    
                />
            </Grid>
            <Grid container style={{width:'90%'}} justify='center'>            
                <TextField
                    required
                    onChange={onFormChange}
                    name='description'
                    margin='normal'
                    label="Descrição"
                    placeholder="Descrição do produto"
                    value={description}
                    variant="outlined"
                    style={{backgroundColor:'#efefef', width:'40%'}}    
                />
            </Grid>
        </React.Fragment>
    );
}
 
export default StockEditFields;
