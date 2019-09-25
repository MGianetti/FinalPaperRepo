const axios = require('axios')

const clients = [
    {
        name:"Francisco Bernardo Dias",
        cpf:"488.442.670-39",
        cellPhone:"(92) 99550-8505",
        telephone:"(92) 2892-4284",
        cep:"69086-280"
    },
    {
        name:"Kauê Diego Augusto Santos",
        cpf:"666.305.006-01",
        cellPhone:"(31) 99719-6404",
        telephone:"(31) 2570-3163",
        cep:"35183-256"
    },
    {
        name:"Diego Benjamin da Rosa",
        cpf:"149.377.896-00",
        cellPhone:"(31) 99984-4168",
        telephone:"(31) 3755-0915",
        cep:"32242-250"
    },
    {
        name:"Sandra Cecília Castro",
        cpf:"728.569.126-72",
        cellPhone:"(33) 99756-6808",
        telephone:"(33) 3758-0018",
        cep:"35300-255"
    },
    {
        name:"Tereza Natália Sebastiana Duarte",
        cpf:"063.966.086-00",
        cellPhone:"(31) 98808-5155",
        telephone:"(31) 3993-5561",
        cep:"35931-122"
    },
    {
        name:"Cristiane Evelyn Andrea Ferreira",
        cpf:"054.851.596-48",
        cellPhone:"(37) 98265-7475",
        telephone:"(37) 3691-1163",
        cep:"35661-632"
    },
    {
        name:"Victor Miguel Martins",
        cpf:"938.518.066-54",
        cellPhone:"(31) 98687-4393",
        telephone:"(31) 2955-2678",
        cep:"30210-340"
    },
    {
        name:"Nicolas Vinicius da Conceição",
        cpf:"288.492.056-00",
        cellPhone:"(31) 99123-2157",
        telephone:"(31) 3975-0280",
        cep:"35702-640"
    },
    {
        name:"Esther Laura Rodrigues",
        cpf:"184.817.906-56",
        cellPhone:"(33) 98219-4497",
        telephone:"(33) 2756-2333",
        cep:"35300-294"
    },
    {
        name:"Ana Cecília Ester Barros",
        cpf:"321.195.196-25",
        cellPhone:"(38) 99204-2373",
        telephone:"(38) 2510-1965",
        cep:"39402-676"
    },
    {
        name:"Cecília Giovana Silvana das Neves",
        cpf:"572.569.136-56",
        cellPhone:"(32) 98390-8915",
        telephone:"(32) 3699-3376",
        cep:"36770-400"
    },
    {
        name:"Luzia Letícia Nascimento",
        cpf:"014.006.606-37",
        cellPhone:"(33) 99478-2975",
        telephone:"(33) 2944-8007",
        cep:"39803-005"
    },
    {
        name:"Osvaldo Augusto Pires",
        cpf:"281.429.776-72",
        cellPhone:"(31) 98891-1602",
        telephone:"(31) 2646-5743",
        cep:"35164-140"
    },
    {
        name:"Roberto Anderson Teixeira",
        cpf:"427.156.186-03",
        cellPhone:"(34) 98844-3274",
        telephone:"(34) 3925-2258",
        cep:"38410-200"
    },
    {
        name:"Raimundo André Assunção",
        cpf:"958.625.116-01",
        cellPhone:"(34) 99517-7222",
        telephone:"(34) 3635-1505",
        cep:"38408-336"
    },
    {
        name:"Isadora Aline Brito",
        cpf:"160.028.936-36",
        cellPhone:"(34) 98894-3724",
        telephone:"(34) 3928-0522",
        cep:"38411-506"
    },
    {
        name:"Allana Marlene Andreia da Rosa",
        cpf:"746.094.926-44",
        cellPhone:"(31) 98819-6678",
        telephone:"(31) 2926-1565",
        cep:"35703-592"
    },
    {
        name:"Elias Caleb Antonio Silveira",
        cpf:"280.867.096-63",
        cellPhone:"(34) 99927-9107",
        telephone:"(34) 3933-8566",
        cep:"38700-116"
    },
    {
        name:"Mário Luiz Vicente Moura",
        cpf:"083.415.036-03",
        cellPhone:"(34) 98694-5402",
        telephone:"(34) 3989-3695",
        cep:"38415-399"
    }
];

clients.map(client => {
    axios.post(`http://localhost:8000/clients`, client).then(() => {
        console.log(`success posting ${client.name}`);
    })
});
