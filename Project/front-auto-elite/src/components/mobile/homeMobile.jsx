import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'

class HomeMobile extends Component {
    state = {  }
    render() { 
        return ( 
            <Grid container direction='column' style={{background:'azure', paddingTop:'25vh', paddingBottom:'20vh'}} alignContent='space-around'>
                <Grid item>
                    <a style={{textDecoration: 'none'}} href='/Vistoria'>
                        <div style={{fontSize:'5vw', 
                                    color: 'white',
                                    fontFamily: 'Montserrat', 
                                    textAlign: 'center', 
                                    width: '50vw', 
                                    height: '20vw', 
                                    background:'#78C3FB', 
                                    boxShadow:'0.5px 0.5px 2px #404040',
                                    cursor:'pointer'}}>
                            Vistoria
                        </div>
                    </a>
                </Grid>
                <Grid item style={{paddingTop: 10}}>
                    <a style={{textDecoration: 'none'}} href='/OrçamentoCriar'>
                        <div 
                            style={{fontSize:'5vw',
                                    color: 'white',
                                    fontFamily: 'Montserrat',
                                    textAlign: 'center', 
                                    width: '50vw', 
                                    height: '20vw', 
                                    background:'#78C3FB', 
                                    boxShadow:'0.5px 0.5px 2px #404040',
                                    cursor:'pointer'}}>
                            Criar
                            <p>Orçamento</p>
                        </div>
                    </a>
                </Grid>
                <Grid item style={{paddingTop: 10}}>
                    <a style={{textDecoration: 'none'}} href='/OrçamentoBuscar'>
                        <div style={{fontSize:'5vw', 
                                    color: 'white',
                                    fontFamily: 'Montserrat', 
                                    textAlign: 'center', 
                                    width: '50vw', 
                                    height: '20vw', 
                                    background:'#78C3FB', 
                                    boxShadow:'0.5px 0.5px 2px #404040',
                                    cursor:'pointer'}}>
                            Buscar 
                            <p>Orçamento</p>
                        </div>
                    </a>
                </Grid>
            </Grid>
        );
    };
};

export default HomeMobile;