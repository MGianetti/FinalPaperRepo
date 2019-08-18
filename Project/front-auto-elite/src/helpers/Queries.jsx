import React, { Component } from 'react';
import CarEntityMiniature from './../components/cars/subComponents/carEntityMiniature';
import ClientEntity from './../components/clients/subComponents/clientEntity';
import ServiceEntity from './../components/services/subComponents/serviceEntity';
import ItemEntity from './../components/stock/subComponents/itemEntity';

export default class Queries {
    static searchCars(searchString, searchType) {
        //TODO: make this function search and return clients
        return [
            {'carPlaceholder1': <CarEntityMiniature key='carPlaceholder1'/>},
            {'carPlaceholder2': <CarEntityMiniature key='carPlaceholder2'/>},
            {'carPlaceholder3': <CarEntityMiniature key='carPlaceholder3'/>},
        ] //placeholder search
    }

    static searchClients(searchString, searchType) {
        //TODO: make this function search and return clients
        return [
            {'clientPlaceholder1': <ClientEntity key='clientPlaceholder1'/>},
            {'clientPlaceholder2': <ClientEntity key='clientPlaceholder2'/>},
            {'clientPlaceholder3': <ClientEntity key='clientPlaceholder3'/>},
        ] //placeholder search
    }

    static searchServices(searchString, searchType)
    {
        //TODO: make this function search and return services
        return [
            {'servicePlaceholder1': <ServiceEntity key='servicePlaceholder1'/>},
            {'servicePlaceholder2': <ServiceEntity key='servicePlaceholder2'/>},
            {'servicePlaceholder3': <ServiceEntity key='servicePlaceholder3'/>},
        ] //placeholder search
    }

    static searchItems(searchString, searchType)
    {
        //TODO: make this function search and return items
        return [
            {'itemPlaceholder1': <ItemEntity key='itemPlaceholder1'/>},
            {'itemPlaceholder2': <ItemEntity key='itemPlaceholder2'/>},
            {'itemPlaceholder3': <ItemEntity key='itemPlaceholder3'/>},
        ] //placeholder search
    }
}