/*const Sequelize = require('sequelize');

const sequelize = new Sequelize('auto', 'postgres', 'mgj1996', {
    host: 'localhost',
    dialect: 'postgres'
});
const models = {
    billing: sequelize.import('../endpoints/billing/billing_model'),
    budget: sequelize.import('../endpoints/budget/budget_model'),
    cars: sequelize.import('../endpoints/cars/cars_model'),
    clients: sequelize.import('../endpoints/clients/clients_model'),
    employees: sequelize.import('../endpoints/employees/employees_model'),
    home: sequelize.import('../endpoints/home/home_model'),
    index: sequelize.import('../endpoints/index/index_model'),
    inspection: sequelize.import('../endpoints/inspection/inspection_model'),
    services: sequelize.import('../endpoints/services/services_model'),
    stock: sequelize.import('../endpoints/stock/stock_model')
}

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

Object.keys(models).forEach((modelName) => {
    if('associate' in models[modelName]) {
        models[modelName].associate(models);
    }
});

models.Sequelize = Sequelize;
models.sequelize = sequelize;
export default models;*/