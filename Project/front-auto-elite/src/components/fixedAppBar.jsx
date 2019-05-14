import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClockComponent from './appBarComponents/clock';
import FixedAvatar from './appBarComponents/fixedAvatar'
import FixedWelcome from './appBarComponents/fixedWelcome';
import FixedDate from './appBarComponents/fixedDate';
import FixedVersion from './appBarComponents/fixedVersion';
import '../App.css';


const FixedAppBar = () => {
    return ( 
		<React.Fragment>
			<AppBar position="static" id="appBarFixed">
				<Toolbar>
					<Grid container direction='row'>
						<Grid id="appBarAvatar" xs={2} item>
							<FixedAvatar/>
						</Grid>
						<Grid id="appBarWelcome" xs={2} item>
							<FixedWelcome/>
						</Grid>
						<Grid id="appBarVersion" xs={6} item>
							<FixedVersion/>
						</Grid>
						<Grid id="appBarDate" xs={1} item>
							<FixedDate/>
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