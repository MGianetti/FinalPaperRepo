import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import UiAvatar from './subComponents/uiAvatar'
import UiWelcome from './subComponents/uiWelcome'
import UiVersion from './subComponents/uiVersion'
import UiDate from './subComponents/uiDate'
import '../../App.css';


const UiAppBar = () => {
    return ( 
		<React.Fragment>
			<AppBar position="static" id="appBarFixed">
				<Toolbar>
					<Grid container direction='row'>
						<Grid id="appBarAvatar" xs={2} item>
							<UiAvatar/>
						</Grid> 
						<Grid id="appBarWelcome" xs={2} item>
							<UiWelcome/>
						</Grid>
						<Grid id="appBarVersion" xs={6} item>
							<UiVersion/>
						</Grid>
						<Grid id="appBarDate" xs={1} item>
							<UiDate/>
						</Grid>
						<Grid id="appBarHour" xs={1} item>
							<uiClock/>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
    );
}

export default UiAppBar;