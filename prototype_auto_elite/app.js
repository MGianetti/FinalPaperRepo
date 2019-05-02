const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/config');
const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

const billingRoute = require('./endpoints/billing/billing_controller');
const budgetRoute = require('./endpoints/budget/budget_controller');
const carsRoute = require('./endpoints/cars/cars_controller');
const clientsRoute = require('./endpoints/clients/clients_controller');
const employeesRoute = require('./endpoints/employees/employees_controller');
const homeRoute = require('./endpoints/home/home_controller');
const indexRoute = require('./endpoints/index/index_controller');
const inspectionRoute = require('./endpoints/inspection/inspection_controller');
const servicesRoute = require('./endpoints/services/services_controller');
const stockRoute = require('./endpoints/stock/stock_controller')

app.use('/billing', billingRoute);
app.use('/budget', budgetRoute);
app.use('/cars', carsRoute);
app.use('/clients', clientsRoute);
app.use('/employees', employeesRoute);
app.use('/home', homeRoute);
app.use('/inspection', inspectionRoute);
app.use('/services', servicesRoute);
app.use('/stock', stockRoute);
app.use('/', indexRoute);

app.listen(port, console.log(`Server started on port ${port}!`));

module.exports = app;