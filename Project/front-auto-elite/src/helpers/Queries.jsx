import React from 'react';
import axios from 'axios';
import CarEntity from './../components/cars/subComponents/carEntity';
import ClientEntity from './../components/clients/subComponents/clientEntity';
import ServiceEntity from './../components/services/subComponents/serviceEntity';
import ItemEntity from './../components/stock/subComponents/itemEntity';
import BudgetEntity from './../components/budgets/subComponents/budgetEntity';
import EmployeeEntity from './../components/employees/subComponents/employeeEntity';
import InspectionEntity from '../components/inspection/subComponents/inspectionEntity'
import BillingEntity from './../components/billing/subComponents/billingEntity';
import BillingClosedEntity from './../components/billing/subComponents/billingClosedEntity';
import Enums from './Enums';
import { isMobile } from 'react-device-detect';
import ClientEntityMobile from '../components/mobile/clients/clientEntityMobile';
import CarEntityMobile from '../components/mobile/cars/carEntityMobile';
import EmployeeEntityMobile from '../components/mobile/employees/employeeEntityMobile';

const SERVER_URL = 'http://192.168.0.32:8000';

export default class Queries {

    static async searchClients(searchString, searchType) {
        let clientJsons = [];
        await axios.get(`${SERVER_URL}/clients`).then(response => clientJsons = response.data).catch(error => console.log(error.message));
        switch(Enums.ClientDropdown[searchType]) {
            case Enums.ClientDropdownType.Plate:
                clientJsons = clientJsons.filter(client => {
                    for (let i in client.Cars) {
                        if(client.Cars[i].plate.toLowerCase().includes(searchString.toLowerCase())) { return true }
                    }
                    return false;
                });
                break;
            case Enums.ClientDropdownType.CPF:
                clientJsons = clientJsons.filter(client => client.cpf.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.ClientDropdownType.Telephone:
                clientJsons = clientJsons.filter(client => client.telephone.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.ClientDropdownType.Cellphone:
                clientJsons = clientJsons.filter(client => client.cellPhone.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.ClientDropdownType.Name:
                clientJsons = clientJsons.filter(client => client.name.toLowerCase().includes(searchString.toLowerCase()));
                break;
        }
        let clientEntities = [];
        for (let i in clientJsons) {
            if(isMobile)
            {
                clientEntities.push(<ClientEntityMobile key={clientJsons[i].id} info={clientJsons[i]}/>);
            } else 
            {
                clientEntities.push(<ClientEntity key={clientJsons[i].id} info={clientJsons[i]}/>);
            }
        }
        return clientEntities
    }

    static async searchCars(searchString, searchType) {
        let carJsons = [];
        await axios.get(`${SERVER_URL}/cars`).then(response => carJsons = response.data).catch(error => console.log(error.message));
        let addCarsByClientProperty = property => carJsons = carJsons.filter(car => car.Client[property].toLowerCase().includes(searchString.toLowerCase()));
        switch(Enums.CarDropdown[searchType]) {
            case Enums.CarDropdownType.Plate:
                carJsons = carJsons.filter(car => car.plate.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.CarDropdownType.ClientName:
                addCarsByClientProperty('name');
                break;
            case Enums.CarDropdownType.ClientCPF:
                addCarsByClientProperty('cpf');
                break;
        }

        let carEntities = [];
        for (let car of carJsons) {
            if(isMobile)
            {
                carEntities.push(<CarEntityMobile key={car.id} info={car}/>);
            } else
            {
                carEntities.push(<CarEntity key={car.id} info={car}/>);
            }
        }
        return carEntities;
    }

    static async searchServices(searchString, searchType)
    {
        let serviceJsons = [];
        await axios.get(`${SERVER_URL}/services`).then(response => serviceJsons = response.data).catch(error => console.log(error.message));
        switch(Enums.ServiceDropdown[searchType]) {
            case Enums.ServiceDropdownType.Type:
                serviceJsons = serviceJsons.filter(service => service.type.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.ServiceDropdownType.Summary:
                serviceJsons = serviceJsons.filter(service => service.summary.toLowerCase().includes(searchString.toLowerCase()));
                break;
        }

        let serviceEntities = [];
        for (let service of serviceJsons) {
            if(isMobile)
            {
                // serviceEntities.push(<ServiceEntityMobile key={service.id} info={service}/>);
            } else
            {
                serviceEntities.push(<ServiceEntity key={service.id} info={service}/>);
            }
        }
        return serviceEntities;
    }

    static async searchItems(searchString, searchType)
    {
        //TODO: make this function search and return items
        return [
            <ItemEntity key='itemPlaceholder1'/>,
            <ItemEntity key='itemPlaceholder2'/>,
            <ItemEntity key='itemPlaceholder3'/>,
        ] //placeholder search
    }

    static async searchBudgets(searchString, searchType) {
        let searchedBudgets = [
            <BudgetEntity key='budgetPlaceholder1'></BudgetEntity>,
            <BudgetEntity key='budgetPlaceholder2'></BudgetEntity>,
            <BudgetEntity key='budgetPlaceholder3'></BudgetEntity>,
        ];//placeholder info

        let budgets = [];
        for(let i = 0; i < searchedBudgets.length; i++)
        {
            const key = searchedBudgets[i].key;
            budgets.push({key: <BudgetEntity key={key} client={searchedBudgets[i].client} car={searchedBudgets[i].car} description={searchedBudgets[i].description} />});
        }
        return budgets; 
    }

    static async searchEmployees(searchString, searchType) {
        let employeeJsons = [];
        await axios.get(`${SERVER_URL}/employees`).then(response => employeeJsons = response.data).catch(error => console.log(error.message));
        switch(Enums.EmployeeDropdown[searchType]) {
            case Enums.EmployeeDropdownType.CPF:
                employeeJsons = employeeJsons.filter(employee => employee.cpf.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.EmployeeDropdownType.Telephone:
                employeeJsons = employeeJsons.filter(employee => employee.telephone.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.EmployeeDropdownType.Cellphone:
                employeeJsons = employeeJsons.filter(employee => employee.cellPhone.toLowerCase().includes(searchString.toLowerCase()));
                break;
            case Enums.EmployeeDropdownType.Name:
                employeeJsons = employeeJsons.filter(employee => employee.name.toLowerCase().includes(searchString.toLowerCase()));
                break;
        }
        let employeeEntities = [];
        for (let i in employeeJsons) {
            if(isMobile)
            {
                employeeEntities.push(<EmployeeEntityMobile key={employeeJsons[i].id} info={employeeJsons[i]}/>);
            } else
            {
                employeeEntities.push(<EmployeeEntity key={employeeJsons[i].id} info={employeeJsons[i]}/>);
            }
        }
        return employeeEntities;
    }

    static async searchInspections(searchString, searchType) {
        //TODO: make this function search and return employees
        return [
            <InspectionEntity key='5b21ca3eeb7f6fbccd471815'/>,
            <InspectionEntity key='5b21ca3eeb7f6fbccd471816'/>,
            <InspectionEntity key='5b21ca3eeb7f6fbccd471817'/>,
            <InspectionEntity key='5b21ca3eeb7f6fbccd471818'/>
        ] //placeholder search
    }

    static async searchPendentBillings(searchString, searchType) {
        return [
            <BillingEntity data={{date:"Vencido" , plate:"CBH-6554", name:"Gabriela Correia Santos", value:"R$596", remain:0}}/>,
            <BillingEntity data={{date:"3 dias" , plate:"AOB-2190", name:"José Lima Alves", value:"R$923,50", remain:3}}/>,
            <BillingEntity data={{date:"7 dias" , plate:"JUW-0295", name:"Diogo Costa Oliveira", value:"R$1000", remain:6}}/>,
            <BillingEntity data={{date:"15 dias" , plate:"JYX-6432", name:"Victor Gomes Borges", value:"R$612", remain:15}}/>,
        ]
    }

    static async searchClosedBillings(searchString, searchType) {
        return [
            <BillingClosedEntity data={{plate:"JYX-6432", service:"S0005445", value:"R$612", budget:'K0088987'}}/>,
            <BillingClosedEntity data={{plate:"AOB-2190", service:"S0085477", value:"R$900", budget:'K0086574'}}/>,
            <BillingClosedEntity data={{plate:"JUW-0295", service:"S0000411", value:"R$7350", budget:'K0046545'}}/>,
            <BillingClosedEntity data={{plate:"JYX-6432", service:"S0009912", value:"R$230", budget:'K0081321'}}/>,
        ]
    }

    static async createClient(clientFormInfo){
        const {cpf, cellPhone, telephone, name, cep} = clientFormInfo;
        const {model, year, plate, is_Mercosul} = clientFormInfo;
        var client_id;
        //create client
        await axios.post(`${SERVER_URL}/clients`, {cpf, cellPhone, telephone, name, cep}).then( (response) =>{
            console.log(`Created client ${response.data.name} succesfully`);
            client_id = response.data.id;
        }).catch(error => {
            console.log(`Fail to create ${clientFormInfo.name} with erro: ${error}`);
        });
        //after create client
        await axios.post(`${SERVER_URL}/cars`, {model, year, plate, is_Mercosul, client_id}).then( (response) =>{
            console.log(`Created car ${response.data.plate} succesfully`);
        }).catch(error => {
            console.log(`Fail to create ${clientFormInfo.plate} with erro: ${error}`);
        });
    }

    static async createCar(carFormInfo) {
        let {model, year, plate, is_Mercosul, client_id} = carFormInfo;
        year = Number.parseInt(year);
        await axios.post(`${SERVER_URL}/cars`, {model, year, plate, is_Mercosul, client_id}).then( (response) =>{
            console.log(`Created car ${response.data.plate} succesfully`);
        }).catch(error => {
            console.log(`Fail to create ${carFormInfo.plate} with erro: ${error}`);
        });
    }

    static async createEmployee(employeeFormInfo){
        const {cpf, cellPhone, telephone, name, cep, bankAccount, observation} = employeeFormInfo;
        //create employee
        await axios.post(`${SERVER_URL}/employees`, {cpf, cellPhone, telephone, name, cep, bankAccount, observation}).then( (response) =>{
            console.log(`Created employee ${response.data.name} succesfully`);
        }).catch(error => {
            console.log(`Fail to create ${employeeFormInfo.name} with erro: ${error}`);
        });
    }

    static async createService(serviceFormInfo){
        const {observations, obligatoryInspection, summary, status, type, price, car_id, employee_id} = serviceFormInfo;
        //create employee
        await axios.post(`${SERVER_URL}/services`, {observations, obligatoryInspection, summary, status, type, price, car_id, employee_id}).then( (response) =>{
            console.log(`Created service ${response.data.summary} succesfully`);
        }).catch(error => {
            console.log(`Fail to create ${serviceFormInfo.summary} with erro: ${error}`);
        });
    }

    static async updateClient(updatedClient, successCallBack, failCallBack){
        await axios.put(`${SERVER_URL}/clients/${updatedClient.id}`, updatedClient).then( () =>{
            console.log(`Updated client ${updatedClient.name} succesfully`)
            successCallBack();
        }).catch(error => {
            console.log(`Fail to update client ${updatedClient.name}`);
            failCallBack();
        });
    }

    static async updateCar(updatedCar, successCallBack, failCallBack){
        await axios.put(`${SERVER_URL}/cars/${updatedCar.id}`, updatedCar).then( () =>{
            console.log(`Updated car ${updatedCar.plate} succesfully`)
            successCallBack();
        }).catch(error => {
            console.log(`Fail to update car ${updatedCar.plate}`);
            failCallBack();
        });
    }

    static async updateService(updatedService, successCallBack, failCallBack){
        await axios.put(`${SERVER_URL}/services/${updatedService.id}`, updatedService).then( () =>{
            console.log(`Updated Service ${updatedService.summary} succesfully`)
            successCallBack();
        }).catch(error => {
            console.log(`Fail to update Service ${updatedService.summary}`);
            failCallBack();
        });
    }

    static async updateEmployee(updatedEmployee, successCallBack, failCallBack){
        await axios.put(`${SERVER_URL}/employees/${updatedEmployee.id}`, updatedEmployee).then( () =>{
            console.log(`Updated employee ${updatedEmployee.name} succesfully`)
            successCallBack();
        }).catch(error => {
            console.log(`Fail to update employee ${updatedEmployee.name}`);
            failCallBack();
        });
    }

}