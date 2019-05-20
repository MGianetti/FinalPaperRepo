import React, { Component } from 'react';
import UiComposedChart from './subComponents/uiComposedChart';
import UiBarChart from './subComponents/uiBarChart';
import UiLineChart from './subComponents/uiLineChart';
import UiPieChart from './subComponents/uiPieChart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Grid container style={{width:'100%', margin:25, marginTop:15,borderRadius:2}}>
                    <Paper style={{width:'100%', background:'Lavender'}}>
                        <Typography variant="h3" style={{padding:10, paddingTop:20}}>
                        Auto Elite gráficos de gerência
                        </Typography>
                    </Paper>
                </Grid>
                {/*All charts container*/}
                <Grid container style={{width:'100%', margin:15, marginTop:20}}>
                    {/*First Chart Line*/}
                    <Grid container justify="center">
                        {/*Composed Chart*/}
                        <Grid item style={{padding: 15}}>
                            <Paper>                            
                                <Grid item style={{padding: 20, background:'GainsBoro'}}>                                              
                                        <Typography variant="h6">
                                            Auto Elite gráfico Composto
                                        </Typography>
                                    <UiComposedChart/>
                                </Grid>
                            </Paper>                                              
                        </Grid>
                        {/*End Composed Chart*/}

                        {/*Bars Chart*/}
                        <Grid item style={{padding: 15}}>
                            <Paper>                                                                          
                                <Grid item style={{padding: 20, background:'GainsBoro'}}>                                              
                                    <Typography variant="h6">
                                        Auto Elite gráfico de Barras
                                    </Typography>
                                    <UiBarChart/>
                                </Grid>
                            </Paper>                        
                        </Grid>
                        {/*Ends Bars Chart*/}
                    </Grid>                                             
                    {/*Ends First Chart Line*/}

                    {/*Second Chart Line*/}
                    <Grid container justify="center">                                              
                        {/*Line Chart*/}
                        <Grid item style={{padding: 15}}>
                            <Paper>                                                                          
                                <Grid item style={{padding: 20, background:'GainsBoro'}}>                                              
                                    <Typography variant="h6">
                                        Auto Elite gráfico de Linha
                                    </Typography>
                                    <UiLineChart/>
                                </Grid>
                            </Paper>                            
                        </Grid>
                        {/*Ends Line Chart*/}

                        {/*Bars Chart*/}
                        <Grid item style={{padding: 15}}>
                            <Paper>                                                                          
                                <Grid item style={{padding: 20, background:'GainsBoro'}}>                                              
                                    <Typography variant="h6">
                                        Auto Elite gráfico Pizza
                                    </Typography>
                                    <UiPieChart/>
                                </Grid>
                            </Paper>                            
                        </Grid>
                        {/*Bars Chart*/}
                    </Grid>                                             
                    {/*Ends Second Chart Line*/}
                </Grid>
                {/*Ends All charts container*/}                                             
            </React.Fragment>
        );
    };
};

export default Home;
