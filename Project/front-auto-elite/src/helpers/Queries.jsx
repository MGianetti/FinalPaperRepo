import React from 'react';
import CarEntity from './../components/cars/subComponents/carEntity';
import ClientEntity from './../components/clients/subComponents/clientEntity';
import ServiceEntity from './../components/services/subComponents/serviceEntity';
import ItemEntity from './../components/stock/subComponents/itemEntity';
import BudgetEntity from './../components/budgets/subComponents/budgetEntity';
import EmployeeEntity from './../components/employees/subComponents/employeeEntity';
import InspectionEntity from './../components/inspection/subComponents/InspectionEntity';
import BillingEntity from './../components/billing/subComponents/billingEntity';
import BillingClosedEntity from './../components/billing/subComponents/billingClosedEntity';
import axios from 'axios'
import Enums from './Enums';

const SERVER_URL = 'http://192.168.0.190:8000';

export default class Queries {
    static async searchCars(searchString, searchType) {
        //TODO: make this function search and return clients
        return [
            {'carPlaceholder1': <CarEntity key='carPlaceholder1'/>},
            {'carPlaceholder2': <CarEntity key='carPlaceholder2'/>},
            {'carPlaceholder3': <CarEntity key='carPlaceholder3'/>},
        ] //placeholder search
    }

    static async searchClients(searchString, searchType) {
        //TODO: make this function search and return clients
        let clientJsons = [];
        await axios.get(`${SERVER_URL}/clients`).then(response => {
            clientJsons = response.data;
        }).catch(error => {
            console.log(error.message);
        });
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
            clientEntities.push(<ClientEntity key={clientJsons[i].id} info={clientJsons[i]}/>)
        }
        return clientEntities
    }

    static async updateClient(updatedClient, successCallBack, failCallBack){
        console.log(updatedClient)
        await axios.put(`${SERVER_URL}/clients/${updatedClient.id}`, updatedClient).then( () =>{
            console.log(`Updated client ${updatedClient.id} succesfully`)
            successCallBack();
        }).catch(error => {
            console.log(`Fail to update client ${updatedClient.id}`);
            failCallBack();
        });
    }

    static async searchServices(searchString, searchType)
    {
        //TODO: make this function search and return services
        return [
            {'servicePlaceholder1': <ServiceEntity key='servicePlaceholder1'/>},
            {'servicePlaceholder2': <ServiceEntity key='servicePlaceholder2'/>},
            {'servicePlaceholder3': <ServiceEntity key='servicePlaceholder3'/>},
        ] //placeholder search
    }

    static async searchItems(searchString, searchType)
    {
        //TODO: make this function search and return items
        return [
            {'itemPlaceholder1': <ItemEntity key='itemPlaceholder1'/>},
            {'itemPlaceholder2': <ItemEntity key='itemPlaceholder2'/>},
            {'itemPlaceholder3': <ItemEntity key='itemPlaceholder3'/>},
        ] //placeholder search
    }

    static async searchBudgets(searchString, searchType) {
        let searchedBudgets = [
            {key: '5b21ca3eeb7f6fbccd471815', client:'Lucas', car:'AAA-1234', description:'Budget placeholder 1'},
            {key: '5b21ca3eeb7f6fbccd471816', client:'Carla', car:'BBB-1234', description:'Budget placeholder 2'},
            {key: '5b21ca3eeb7f6fbccd471817', client:'Mateus', car:'CCC-1234', description:'Budget placeholder 3'},
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
        //TODO: make this function search and return employees
        return [
            {'6b21ca3eeb7f6fbccd471815': <EmployeeEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'6b21ca3eeb7f6fbccd471816': <EmployeeEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'6b21ca3eeb7f6fbccd471817': <EmployeeEntity key='5b21ca3eeb7f6fbccd471817'/>},
            {'6b21ca3eeb7f6fbccd471818': <EmployeeEntity key='5b21ca3eeb7f6fbccd471818'/>}
        ] //placeholder search
    }

    static async searchInspections(searchString, searchType) {
        //TODO: make this function search and return employees
        return [
            {'6b21ca3eeb7f6fbccd471815': <InspectionEntity key='5b21ca3eeb7f6fbccd471815'/>},
            {'6b21ca3eeb7f6fbccd471816': <InspectionEntity key='5b21ca3eeb7f6fbccd471816'/>},
            {'6b21ca3eeb7f6fbccd471817': <InspectionEntity key='5b21ca3eeb7f6fbccd471817'/>},
            {'6b21ca3eeb7f6fbccd471818': <InspectionEntity key='5b21ca3eeb7f6fbccd471818'/>}
        ] //placeholder search
    }

    static async searchPendentBillings(searchString, searchType) {
        return [
            {'1': <BillingEntity data={{date:"Vencido" , plate:"CBH-6554", name:"Gabriela Correia Santos", value:"R$596", remain:0}}/>},
            {'2': <BillingEntity data={{date:"3 dias" , plate:"AOB-2190", name:"José Lima Alves", value:"R$923,50", remain:3}}/>},
            {'3': <BillingEntity data={{date:"7 dias" , plate:"JUW-0295", name:"Diogo Costa Oliveira", value:"R$1000", remain:6}}/>},
            {'4': <BillingEntity data={{date:"15 dias" , plate:"JYX-6432", name:"Victor Gomes Borges", value:"R$612", remain:15}}/>},
        ]
    }

    static async searchClosedBillings(searchString, searchType) {
        return [
            {'5b21ca3eeb7f6fbccd471815': <BillingClosedEntity data={{plate:"JYX-6432", service:"S0005445", value:"R$612", budget:'K0088987'}}/>},
            {'5b21ca3eeb7f6fbccd471816': <BillingClosedEntity data={{plate:"AOB-2190", service:"S0085477", value:"R$900", budget:'K0086574'}}/>},
            {'5b21ca3eeb7f6fbccd471817': <BillingClosedEntity data={{plate:"JUW-0295", service:"S0000411", value:"R$7350", budget:'K0046545'}}/>},
            {'5b21ca3eeb7f6fbccd471818': <BillingClosedEntity data={{plate:"JYX-6432", service:"S0009912", value:"R$230", budget:'K0081321'}}/>}
        ]
    }
}