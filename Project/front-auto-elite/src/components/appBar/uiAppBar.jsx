import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import UiAvatar from './subComponents/uiAvatar'
import UiWelcome from './subComponents/uiWelcome'
import UiVersion from './subComponents/uiVersion'
import UiDate from './subComponents/uiDate'
import UiClock from './subComponents/uiClock';
import '../../App.css';


const UiAppBar = () => {
    return ( 
		<React.Fragment>
			<AppBar position="static" id="appBarFixed">
				<Toolbar>
					<Grid container style={{width:'100%'}} alignItems='center'>
						<Grid item style={{width:'10%'}}>
							<Grid item style={{height:'100%'}}>
								<UiAvatar/>
							</Grid>
						</Grid>
						<Grid item style={{width:'15%'}} >
							<Grid item>
								<UiWelcome/>
							</Grid>
						</Grid>
						<Grid item style={{width:'60%'}}>
							<Grid item style={{height:'100%'}}>
								<UiVersion/>
							</Grid>
						</Grid>
						<Grid item style={{width:'10%'}}>
							<Grid item style={{height:'100%'}}>
								<UiDate/>
							</Grid>
						</Grid>
						<Grid item style={{width:'5%'}}>
							<Grid item style={{height:'100%'}}>
								<UiClock/>
							</Grid>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</React.Fragment>
    );
};

export default UiAppBar;