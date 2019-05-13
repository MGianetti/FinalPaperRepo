import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

const FixedAppBar = () => {

    return ( 
		<React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<Grid container spacing={0}  justify='space-evenly'>
						<Grid item xs={2}>
							Bem vindo(a) Micaela
						</Grid>
						<Grid item xs={6}>
							Web Application Version 1.0
						</Grid>
						<Grid item xs={2}>
							5/13/2019
						</Grid>
						<Grid item xs={2}>
							11:10
						</Grid>
					</Grid>

				</Toolbar>
			</AppBar>
		</React.Fragment>
    );
}

export default FixedAppBar;