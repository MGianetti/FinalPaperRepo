import React, { Component } from 'react';

class CreateService extends Component {
    state = {
        newServiceForm:{
            summary:'',
            type:'',
            mecânico:'',
            cel:'',
            cpf:'',
            cep:'',
            houseNumber:'',
            carPlate:'',
            carIsMercosul:false,
            carObservations:''
        }
    };
    render() { 
        return ( <p>Create Service</p> );
    };
};

export default CreateService;