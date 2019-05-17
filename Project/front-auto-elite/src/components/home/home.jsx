import React, { Component } from 'react';
import UiComposedChart from './subComponents/uiComposedChart';
import UiBarChart from './subComponents/uiBarChart';
import UiLineChart from './subComponents/uiLineChart';
import UiPieChart from './subComponents/uiPieChart';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>
                <Grid container style={{margin:25, marginTop:15,borderRadius:10, background:'grey'}}>
                    <Typography variant="h3">
                        Auto Elite gráficos de gerência
                    </Typography>
                </Grid>
                {/*All charts container*/}
                <Grid container style={{margin:25, marginTop:50}}>
                    {/*First Chart Line*/}
                    <Grid container>
                        {/*Composed Chart*/}
                        <Grid item style={{padding: 6}}>                                              
                            <Grid item style={{padding: 10, background:'grey'}}>                                              
                                <Typography variant="h6">
                                    Auto Elite gráfico Composto
                                </Typography>
                                <UiComposedChart/>
                            </Grid>
                        </Grid>
                        {/*End Composed Chart*/}

                        {/*Bars Chart*/}
                        <Grid item style={{padding: 6}}>                                              
                            <Grid item style={{padding: 10, background:'grey'}}>                                              
                                <Typography variant="h6">
                                    Auto Elite gráfico de Barras
                                </Typography>
                                <UiBarChart/>
                            </Grid>
                        </Grid>
                        {/*Ends Bars Chart*/}
                    </Grid>                                             
                    {/*Ends First Chart Line*/}

                    {/*Second Chart Line*/}
                    <Grid container>                                              
                        {/*Line Chart*/}
                        <Grid item style={{padding: 6}}>                                              
                            <Grid item style={{padding: 10, background:'grey'}}>                                              
                                <Typography variant="h6">
                                    Auto Elite gráfico de Linha
                                </Typography>
                                <UiLineChart/>
                            </Grid>
                        </Grid>
                        {/*Ends Line Chart*/}

                        {/*Bars Chart*/}
                        <Grid item style={{padding: 6}}>                                              
                            <Grid item style={{padding: 10, background:'grey'}}>                                              
                                <Typography variant="h6">
                                    Auto Elite gráfico Pizza
                                </Typography>
                                <UiPieChart/>
                            </Grid>
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
