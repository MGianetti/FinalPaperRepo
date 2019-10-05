//Declaring packages
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const authCtrl = require('./controller/authenticationController')

app.use(cors);
app.use(bodyParser.json());
app.use(cookieParser());
// app.use((req,res,next) => {
//     if(req.cookies.authToken){
//         authCtrl.validadeCookie(req.cookies.authToken, res, next);
//     }else{

//     }
// })

const db = require('./models/index')
//Declaring Routes Handlers
//const homeRoute = require('./routes/homeRoute');
const carsRoute = require('./routes/carRoute');
const billingRoute = require('./routes/billingRoute');
const budgetsRoute = require('./routes/budgetRoute');
const clientsRoute = require('./routes/clientRoute');
const employeesRoute = require('./routes/employeeRoute');
const inspectionsRoute = require('./routes/inspectionRoute');
const itemsRoute = require('./routes/itemRoute');
const servicesRoute = require('./routes/serviceRoute');
const usersRoute = require('./routes/userRoute');

const port = process.env.PORT || 8000;
//Custom Routes
//app.use('/home', homeRoute);
app.use('/billings', billingRoute);
app.use('/cars', carsRoute);
app.use('/budgets', budgetsRoute);
app.use('/clients', clientsRoute);
app.use('/employees', employeesRoute);
app.use('/inspections', inspectionsRoute);
app.use('/items', itemsRoute);
app.use('/services', servicesRoute);
app.use('/users', usersRoute);

//test runnning back
app.get('/', (req, res)=>{res.sendStatus(418)})

app.listen(port, console.log(`Server started on port ${port}!`));
