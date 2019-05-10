import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import NavBar from './components/navBar';
import FixedMenuBar from './components/fixedMenuBar';
import './App.css';

function App() {
    return (
		<React.Fragment>
			<NavBar />
			<FixedMenuBar/>
		</React.Fragment>
    );
}

export default App;
