const axios = require('axios');

const employees = [
    {
        name:"Kauê Diego Augusto Santos",
        cpf:"312.892.879-70",
        cellPhone:"(35) 99719-6404",
        telephone:"(35) 2570-3163",
        cep:"35183-256",
        bankAccount:"0861 0101013-1",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"Renan Marcos Souza",
        cpf:"432.748.201-30",
        cellPhone:"(35) 99984-4168",
        telephone:"(35) 3755-0915",
        cep:"32242-250",
        bankAccount:"1712 1999622-0",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"Otávio Joaquim Araújo",
        cpf:"845.975.208-99",
        cellPhone:"(35) 99756-6808",
        telephone:"(35) 3758-0018",
        cep:"35300-255",
        bankAccount:"0392 1480882-5",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"José Lucca Renan Corte Real",
        cpf:"641.202.529-49",
        cellPhone:"(35) 98808-5155",
        telephone:"(35) 3993-5561",
        cep:"35931-122",
        bankAccount:"3122 1904132-8",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"Carlos Eduardo Gustavo Corte Real",
        cpf:"112.204.207-86",
        cellPhone:"(35) 98265-7475",
        telephone:"(35) 3691-1163",
        cep:"35661-632",
        bankAccount:"4584 113975-4",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"Mateus Pedro Henrique Bento Silveira",
        cpf:"021.735.116-61",
        cellPhone:"(35) 98687-4393",
        telephone:"(35) 2955-2678",
        cep:"30210-340",
        bankAccount:"2055 132733-X",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        name:"Edson César Santos",
        cpf:"343.568.750-95",
        cellPhone:"(35) 99123-2157",
        telephone:"(35) 3975-0280",
        cep:"35702-640",
        bankAccount:"0782 70993-5",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    }
];

function getEmployees(){
    return employees;
};
function getEmployeeByCpf(cpf){
    const formatedCpf = `${cpf.substring(0,3)}.${cpf.substring(3,6)}.${cpf.substring(6,9)}-${cpf.substring(9,11)}`;
    
    return employees.filter( employee => employee.cpf === formatedCpf );
};
function getEmployeeById(id){
    const formatedId = "b7f6b2cd41ebcf5cd4ca3e718" + id;
    return employees.filter( employee => employee._id === formatedId );
};
function getEmployeeByName(name){
    return employees.filter( employee => employee.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
};

module.exports = {
    getEmployees,
    getEmployeeById,
    getEmployeeByCpf,
    getEmployeeByName
};

employees.map(employee => {
    axios.post(`http://localhost:8000/employees`, employee).then(() => {
        console.log(`success posting ${employee.name}`);
    });
});