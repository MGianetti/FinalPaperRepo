const formatId = require("../../common/formatId");

const budgets = [
    {
        _id:"c3a2e3c3d1f25848a89dcc00",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:675.00,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc01",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:161.01,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc02",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:842.02,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc03",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:363.03,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc04",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:50.04,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc05",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:455.05,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc06",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:766.06,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc07",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:377.07,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc08",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:108.08,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc09",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:999.09,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc10",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:110.10,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc11",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:811.11,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc12",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:2912.12,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc13",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:603.13,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc14",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:104.14,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc15",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:505.15,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc16",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:616.16,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc17",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:707.17,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc18",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:818.18,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc19",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:919.19,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc20",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:120.20,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc21",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:121.21,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc22",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:202.22,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc23",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:3000.23,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc24",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:404.24,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc25",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:505.25,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc26",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:626.26,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc27",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:777.27,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc28",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:808.28,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc29",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:92.29,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc30",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:1030.30,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc31",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:1031.31,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc32",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:232.32,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc33",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:303.33,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc34",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:434.34,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc35",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:555.35,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc36",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:606.36,
    },
    {
        _id:"c3a2e3c3d1f25848a89dcc37",
        createdAt:"2019-05-08 14:29:52.793137-05",
        updatedAt:"2019-06-08 13:49:01.793137-05",
        laborCost:737.37,
    },
];

function getBudgets(){
    return budgets;
};

function getBudgetById(id){
    const formatedId = "c3a2e3c3d1f25848a89dcc" + formatId(id);
    return budgets.filter( budget => budget._id === formatedId);
};

function getBudgetByCost(cost){
    return budgets.filter( budget => budget.laborCost >= cost);
};

module.exports = { 
    getBudgets,
    getBudgetById,
    getBudgetByCost
};