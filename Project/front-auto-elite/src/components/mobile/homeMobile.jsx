import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import '../../button.css';

class HomeMobile extends Component {
    state = {  }

    render() { 
        return ( 
            <Grid container direction='column' justify='center' style={{background:'azure', paddingTop:'25vh'}}>
                <Grid container justify='center'>
                    <a href='/Clientes'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Clientes
                        </Button>
                    </a>
                </Grid>
                <Grid container justify='center'>
                    <a href='/Carros'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Carros  
                        </Button>
                    </a>
                </Grid>
                <Grid container justify='center'>
                    <a href='/Serviços'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Serviços  
                        </Button>   
                    </a>     
                </Grid>
                <Grid container justify='center'>
                    <a href='/Orçamentos'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Orçamentos    
                        </Button>  
                    </a>
                </Grid>
                <Grid container justify='center'>
                    <a href='/Mecânicos'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Mecânicos       
                        </Button>
                    </a>
                </Grid>
                <Grid container justify='center'>
                    <a href='/Estoque'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Estoque        
                        </Button>  
                    </a>          
                </Grid>
                <Grid container justify='center'>
                    <a href='/Cobrança'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Cobrança      
                        </Button>   
                    </a>           
                </Grid>
                <Grid container justify='center'>
                    <a href='/Vistoria'>
                        <Button class="action-button shadow animate blue" style={{color: 'black'}}>
                            Vistoria         
                        </Button>
                    </a>
                </Grid>
            </Grid>
        );
    };
};

export default HomeMobile;