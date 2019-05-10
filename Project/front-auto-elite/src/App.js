import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './components/navBar';
import FixedMenuBar from './components/fixedMenuBar';
import Grid from '@material-ui/core/Grid';
import './App.css';

function App() {
    return (
			<React.Fragment>
				<NavBar />
				<Grid container spacing={24}>
					<Grid item xs={3}>
						<div className="column">
							<FixedMenuBar/>
						</div>
					</Grid>
				</Grid>
			</React.Fragment>

    );
}

export default App;
