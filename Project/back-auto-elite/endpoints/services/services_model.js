const formatId = require('../../common/formatId');

const services = [
    {
        _id:"c68a4fe3cd6a2b5cc4ef8100",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat",
        status:"Em execução", 
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d00",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c200",
        inspection:"31dfe4f3d5a051603acbc500"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8101",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d01",
        employee:"b7f6b2cd41ebcf5cd4ca3e71816",
        billing:"ff2d3e3c4a55564f8ea3c201",
        inspection:"31dfe4f3d5a051603acbc501"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8102",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d02",
        employee:"b7f6b2cd41ebcf5cd4ca3e71817",
        billing:"ff2d3e3c4a55564f8ea3c202",
        inspection:"31dfe4f3d5a051603acbc502"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8103",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d03",
        employee:"b7f6b2cd41ebcf5cd4ca3e71818",
        billing:"ff2d3e3c4a55564f8ea3c203",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8104",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d04",
        employee:"b7f6b2cd41ebcf5cd4ca3e71819",
        billing:"ff2d3e3c4a55564f8ea3c204",
        inspection:"31dfe4f3d5a051603acbc503"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8105",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d05",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c205",
        inspection:"31dfe4f3d5a051603acbc504"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8106",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d06",
        employee:"b7f6b2cd41ebcf5cd4ca3e71821",
        billing:"ff2d3e3c4a55564f8ea3c206",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8107",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d07",
        employee:"b7f6b2cd41ebcf5cd4ca3e71822",
        billing:"ff2d3e3c4a55564f8ea3c207",
        inspection:"31dfe4f3d5a051603acbc505"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8108",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d08",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c208",
        inspection:"31dfe4f3d5a051603acbc506"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8109",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d09",
        employee:"b7f6b2cd41ebcf5cd4ca3e71816",
        billing:"ff2d3e3c4a55564f8ea3c209",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8110",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d10",
        employee:"b7f6b2cd41ebcf5cd4ca3e71817",
        billing:"ff2d3e3c4a55564f8ea3c210",
        inspection:"31dfe4f3d5a051603acbc507"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8111",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d11",
        employee:"b7f6b2cd41ebcf5cd4ca3e71818",
        billing:"ff2d3e3c4a55564f8ea3c211",
        inspection:"31dfe4f3d5a051603acbc508"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8112",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d12",
        employee:"b7f6b2cd41ebcf5cd4ca3e71819",
        billing:"ff2d3e3c4a55564f8ea3c212",
        inspection:"31dfe4f3d5a051603acbc509"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8113",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d13",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c213",
        inspection:"31dfe4f3d5a051603acbc510"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8114",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d14",
        employee:"b7f6b2cd41ebcf5cd4ca3e71821",
        billing:"ff2d3e3c4a55564f8ea3c214",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8115",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d15",
        employee:"b7f6b2cd41ebcf5cd4ca3e71822",
        billing:"ff2d3e3c4a55564f8ea3c215",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8116",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d16",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c216",
        inspection:"31dfe4f3d5a051603acbc511"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8117",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d17",
        employee:"b7f6b2cd41ebcf5cd4ca3e71816",
        billing:"ff2d3e3c4a55564f8ea3c217",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8118",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d18",
        employee:"b7f6b2cd41ebcf5cd4ca3e71817",
        billing:"ff2d3e3c4a55564f8ea3c218",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8119",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat",
        status:"Em execução", 
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d00",
        employee:"b7f6b2cd41ebcf5cd4ca3e71818",
        billing:"ff2d3e3c4a55564f8ea3c219",
        inspection:"31dfe4f3d5a051603acbc512"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8120",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d01",
        employee:"b7f6b2cd41ebcf5cd4ca3e71819",
        billing:"ff2d3e3c4a55564f8ea3c220",
        inspection:"31dfe4f3d5a051603acbc513"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8121",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d02",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c221",
        inspection:"31dfe4f3d5a051603acbc514"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8122",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d03",
        employee:"b7f6b2cd41ebcf5cd4ca3e71821",
        billing:"ff2d3e3c4a55564f8ea3c222",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8123",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d04",
        employee:"b7f6b2cd41ebcf5cd4ca3e71822",
        billing:"ff2d3e3c4a55564f8ea3c223",
        inspection:"31dfe4f3d5a051603acbc515"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8124",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d05",
        employee:"b7f6b2cd41ebcf5cd4ca3e71822",
        billing:"ff2d3e3c4a55564f8ea3c224",
        inspection:"31dfe4f3d5a051603acbc516"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8125",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d06",
        employee:"b7f6b2cd41ebcf5cd4ca3e71822",
        billing:"ff2d3e3c4a55564f8ea3c225",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8126",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d07",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c226",
        inspection:"31dfe4f3d5a051603acbc517"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8127",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d08",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c227",
        inspection:"31dfe4f3d5a051603acbc518"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8128",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d09",
        employee:"b7f6b2cd41ebcf5cd4ca3e71816",
        billing:"ff2d3e3c4a55564f8ea3c228",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8129",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d10",
        employee:"b7f6b2cd41ebcf5cd4ca3e71817",
        billing:"ff2d3e3c4a55564f8ea3c229",
        inspection:"31dfe4f3d5a051603acbc519"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8130",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d11",
        employee:"b7f6b2cd41ebcf5cd4ca3e71818",
        billing:"ff2d3e3c4a55564f8ea3c230",
        inspection:"31dfe4f3d5a051603acbc520"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8131",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d12",
        employee:"b7f6b2cd41ebcf5cd4ca3e71819",
        billing:"ff2d3e3c4a55564f8ea3c231",
        inspection:"31dfe4f3d5a051603acbc521"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8132",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d13",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c232",
        inspection:"31dfe4f3d5a051603acbc522"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8133",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d14",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c233",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8134",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d15",
        employee:"b7f6b2cd41ebcf5cd4ca3e71821",
        billing:"ff2d3e3c4a55564f8ea3c234",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8135",
        obligatoryInspection:"yes",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Finalizado",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d16",
        employee:"b7f6b2cd41ebcf5cd4ca3e71820",
        billing:"ff2d3e3c4a55564f8ea3c235",
        inspection:"31dfe4f3d5a051603acbc523"
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8136",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Corretivo",
        car:"b6c5e4f1a33a1d5f51bc3d17",
        employee:"b7f6b2cd41ebcf5cd4ca3e71821",
        billing:"ff2d3e3c4a55564f8ea3c236",
        inspection:""
    },
    {
        _id:"c68a4fe3cd6a2b5cc4ef8137",
        obligatoryInspection:"no",
        observations:"Lorem ipsum dolor sit amet consectetur.",
        createdAt:"2018-26-11 13:49:01.951367-05",
        updatedAt:"2019-01-02 15:54:59.035554-05",
        summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima commodi aliquam enim corrupti dolorem molestiae, voluptatem repudiandae sed laborum delectus corporis, doloribus inventore suscipit odio in animi earum soluta repellat", 
        status:"Em execução",
        type:"Preventivo",
        car:"b6c5e4f1a33a1d5f51bc3d18",
        employee:"b7f6b2cd41ebcf5cd4ca3e71815",
        billing:"ff2d3e3c4a55564f8ea3c237",
        inspection:""
    },
    , ];

function getServices(){
    return services;
};

function getServiceById(id){
    const formatedId = "c68a4fe3cd6a2b5cc4ef81" + formatId(id)
    return services.filter( service => service._id === formatedId);
};

function getServiceByStatus(status){
    return services.filter( service => service.status === status);
};

function getServiceByType(type){
    return services.filter( service => service.type === type);
};

function getServiceByCar(carId){
    const formatedCarId = "b6c5e4f1a33a1d5f51bc3d" + formatId(carId);
    return services.filter( service => service.car === formatedCarId);
};

function getServiceByEmployee(employeeId){
    const formatedEmployeeId = "b7f6b2cd41ebcf5cd4ca3e718" + employeeId;
    return services.filter( service => service.employee === formatedEmployeeId);
};

function getServiceByBilling(billingId){
    const formatedBillingId = "ff2d3e3c4a55564f8ea3c2" + formatId(billingId);
    return services.filter( service => service.billing === formatedBillingId);
};

function getServiceByInspection(inspectionId){
    const formatedInspectionId = "31dfe4f3d5a051603acbc5" + formatId(inspectionId);
    return services.filter( service => service.inspection === formatedInspectionId);
};


module.exports = {
    getServiceById,
    getServiceByStatus,
    getServiceByType,
    getServiceByCar,
    getServiceByEmployee,
    getServiceByBilling,
    getServiceByInspection,
    getServices
};