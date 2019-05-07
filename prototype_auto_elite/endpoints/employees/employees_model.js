const employees = [
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71815",
        cpf:"856.250.028-35",
        neighborhood:"Jardim Sion",
        houseNumber:"206",
        name:"Severino Diego Assunção",
        cellPhone:"(35) 99550-8505",
        telePhone:"(35) 2818-1127",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua 27",
        state:"MG",
        city:"Varginha",
        cep:"69086-280",
        bankAccount:"0165 737290-6",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71816",
        name:"Kauê Diego Augusto Santos",
        cpf:"312.892.879-70",
        cellPhone:"(35) 99719-6404",
        neighborhood:"Jardim Sion",
        houseNumber:"462",
        telePhone:"(35) 2570-3163",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua Dois",
        state:"MG",
        city:"Varginha",
        cep:"35183-256",
        bankAccount:"0861 0101013-1",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71817",
        name:"Renan Marcos Souza",
        cpf:"432.748.201-30",
        cellPhone:"(35) 99984-4168",
        neighborhood:"Jardim Sion",
        houseNumber:"414",
        telePhone:"(35) 3755-0915",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua Aires",
        state:"MG",
        city:"Varginha",
        cep:"32242-250",
        bankAccount:"1712 1999622-0",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71818",
        name:"Otávio Joaquim Araújo",
        cpf:"845.975.208-99",
        cellPhone:"(35) 99756-6808",
        neighborhood:"Jardim Sion",
        houseNumber:"516",
        telePhone:"(35) 3758-0018",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Praça Coronel Rafael Silva Araújo",
        state:"MG",
        city:"Varginha",
        cep:"35300-255",
        bankAccount:"0392 1480882-5",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71819",
        name:"José Lucca Renan Corte Real",
        cpf:"641.202.529-49",
        cellPhone:"(35) 98808-5155",
        neighborhood:"Jardim Sion",
        houseNumber:"333",
        telePhone:"(35) 3993-5561",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua Marquês de Valença",
        state:"MG",
        city:"Varginha",
        cep:"35931-122",
        bankAccount:"3122 1904132-8",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71820",
        name:"Carlos Eduardo Gustavo Corte Real",
        cpf:"112.204.207-86",
        cellPhone:"(35) 98265-7475",
        neighborhood:"Jardim Sion",
        houseNumber:"390",
        telePhone:"(35) 3691-1163",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua Antônio Marciano",
        state:"MG",
        city:"Varginha",
        cep:"35661-632",
        bankAccount:"4584 113975-4",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71821",
        name:"Mateus Pedro Henrique Bento Silveira",
        cpf:"021.735.116-61",
        cellPhone:"(35) 98687-4393",
        neighborhood:"Jardim Sion",
        houseNumber:"852",
        telePhone:"(35) 2955-2678",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Avenida Agulhas Negras",
        state:"MG",
        city:"Varginha",
        cep:"30210-340",
        bankAccount:"2055 132733-X",
        observation:"Donec magna lorem, varius in mattis sit amet, auctor scelerisque ligula. Donec bibendum semper orci in imperdiet."
    },
    {
        _id:"b7f6b2cd41ebcf5cd4ca3e71822",
        name:"Edson César Santos",
        cpf:"343.568.750-95",
        cellPhone:"(35) 99123-2157",
        neighborhood:"Jardim Sion",
        houseNumber:"245",
        telePhone:"(35) 3975-0280",
        createdAt:"2018-05-02 17:39:15.014961-05",
        updatedAt:"2019-04-13 10:26:40.065047-05",
        street:"Rua República Dominicana",
        state:"MG",
        city:"Varginha",
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