const formatId = require("../../common/formatId");

const billings = [
    {
        _id:"ff2d3e3c4a55564f8ea3c200",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c201",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c202",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c203",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c204",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c205",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c206",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c207",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c208",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c209",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c210",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c211",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c212",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c213",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c214",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c215",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c216",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c217",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c218",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c219",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c220",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c221",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c222",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c223",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c224",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c225",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c226",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c227",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c228",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c229",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c230",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c231",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c232",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c233",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c234",
        createdAt:"2019-24-01 17:01:01.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 17:01:01.951367-05",
        status:"Pago"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c235",
        createdAt:"2019-28-01 08:21:32.951367-05",
        updatedAt:"",
        deadLine:"2019-31-01 08:21:32.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c236",
        createdAt:"2019-01-01 13:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-02-01 13:49:01.951367-05",
        status:"Pendente"
    },
    {
        _id:"ff2d3e3c4a55564f8ea3c237",
        createdAt:"2019-15-01 14:49:01.951367-05",
        updatedAt:"",
        deadLine:"2019-30-01 14:49:01.951367-05",
        status:"Pendente"
    }
];

function getBillings(){
    return billings;
};

function getBillingsById(id){
    const formatedId = "ff2d3e3c4a55564f8ea3c2" + formatId(id);
    return billings.filter( bill => bill._id === formatedId);
};

function getBillingsByStatus(status){
    return billings.filter( bill => status === bill.status);
};

module.exports = {
    getBillings, 
    getBillingsById, 
    getBillingsByStatus
};
