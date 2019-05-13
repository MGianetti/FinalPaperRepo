import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import '../App.css';
import ClockComponent from './clock';

const FixedAppBar = () => {

    return ( 
		<React.Fragment>
			<AppBar position="static" id="appBarFixed">
				<Toolbar>
					<Grid container direction='row'>
						<Grid id="appBarWelcome" xs={2} item>
							<Typography align='left'>
								Bem vindo(a) Micaela
							</Typography>
						</Grid>
						<Grid id="appBarVersion" xs={7} item>
							<Typography align='center'>
								Web Application Version 1.0
							</Typography>
						</Grid>
						<Grid id="appBarDate" xs={1} item>
							<Typography align='right'>
								5/13/2019
							</Typography>
						</Grid>
						<Grid id="appBarHour" xs={1} item>
							<ClockComponent/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
    );
}

export default FixedAppBar;