const formatId = require('../../common/formatId');

const inspectionPhotos = [
    {
        _id:"9a3f2332eb1c1d3a5f4a4a00",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_100_localizacao_000.png",
        inspection:"31dfe4f3d5a051603acbc500",
        bucketLink:"https://picsum.photos/id/104/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a01",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_300_localizacao_000.png",
        inspection:"31dfe4f3d5a051603acbc501",
        bucketLink:"https://picsum.photos/id/114/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a02",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_200_localizacao_000.png",
        inspection:"31dfe4f3d5a051603acbc502",
        bucketLink:"https://picsum.photos/id/124/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a03",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_101_localizacao_001.png",
        inspection:"31dfe4f3d5a051603acbc503",
        bucketLink:"https://picsum.photos/id/134/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a04",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_301_localizacao_001.png",
        inspection:"31dfe4f3d5a051603acbc504",
        bucketLink:"https://picsum.photos/id/144/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a05",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_201_localizacao_001.png",
        inspection:"31dfe4f3d5a051603acbc505",
        bucketLink:"https://picsum.photos/id/154/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a06",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_102_localizacao_002.png",
        inspection:"31dfe4f3d5a051603acbc506",
        bucketLink:"https://picsum.photos/id/164/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a07",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_302_localizacao_002.png",
        inspection:"31dfe4f3d5a051603acbc507",
        bucketLink:"https://picsum.photos/id/174/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a08",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_202_localizacao_002.png",
        inspection:"31dfe4f3d5a051603acbc508",
        bucketLink:"https://picsum.photos/id/184/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a09",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_103_localizacao_003.png",
        inspection:"31dfe4f3d5a051603acbc509",
        bucketLink:"https://picsum.photos/id/194/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a10",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_303_localizacao_003.png",
        inspection:"31dfe4f3d5a051603acbc510",
        bucketLink:"https://picsum.photos/id/204/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a11",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_203_localizacao_003.png",
        inspection:"31dfe4f3d5a051603acbc511",
        bucketLink:"https://picsum.photos/id/214/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a12",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_104_localizacao_004.png",
        inspection:"31dfe4f3d5a051603acbc512",
        bucketLink:"https://picsum.photos/id/224/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a13",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_304_localizacao_004.png",
        inspection:"31dfe4f3d5a051603acbc513",
        bucketLink:"https://picsum.photos/id/234/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a14",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_204_localizacao_004.png",
        inspection:"31dfe4f3d5a051603acbc514",
        bucketLink:"https://picsum.photos/id/244/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a15",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_105_localizacao_005.png",
        inspection:"31dfe4f3d5a051603acbc515",
        bucketLink:"https://picsum.photos/id/254/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a16",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_305_localizacao_005.png",
        inspection:"31dfe4f3d5a051603acbc516",
        bucketLink:"https://picsum.photos/id/264/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a17",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_205_localizacao_005.png",
        inspection:"31dfe4f3d5a051603acbc517",
        bucketLink:"https://picsum.photos/id/274/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a18",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_106_localizacao_006.png",
        inspection:"31dfe4f3d5a051603acbc518",
        bucketLink:"https://picsum.photos/id/284/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a19",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_306_localizacao_006.png",
        inspection:"31dfe4f3d5a051603acbc519",
        bucketLink:"https://picsum.photos/id/294/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a20",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_206_localizacao_006.png",
        inspection:"31dfe4f3d5a051603acbc520",
        bucketLink:"https://picsum.photos/id/304/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a21",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_107_localizacao_007.png",
        inspection:"31dfe4f3d5a051603acbc521",
        bucketLink:"https://picsum.photos/id/314/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a22",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_307_localizacao_007.png",
        inspection:"31dfe4f3d5a051603acbc522",
        bucketLink:"https://picsum.photos/id/324/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a23",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_207_localizacao_007.png",
        inspection:"31dfe4f3d5a051603acbc523",
        bucketLink:"https://picsum.photos/id/334/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a24",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_108_localizacao_008.png",
        inspection:"31dfe4f3d5a051603acbc523",
        bucketLink:"https://picsum.photos/id/344/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a25",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_308_localizacao_008.png",
        inspection:"31dfe4f3d5a051603acbc523",
        bucketLink:"https://picsum.photos/id/354/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a26",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_208_localizacao_008.png",
        inspection:"31dfe4f3d5a051603acbc522",
        bucketLink:"https://picsum.photos/id/364/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a27",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_109_localizacao_009.png",
        inspection:"31dfe4f3d5a051603acbc521",
        bucketLink:"https://picsum.photos/id/374/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a28",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_309_localizacao_009.png",
        inspection:"31dfe4f3d5a051603acbc520",
        bucketLink:"https://picsum.photos/id/384/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a29",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_209_localizacao_009.png",
        inspection:"31dfe4f3d5a051603acbc519",
        bucketLink:"https://picsum.photos/id/394/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a30",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_110_localizacao_010.png",
        inspection:"31dfe4f3d5a051603acbc518",
        bucketLink:"https://picsum.photos/id/404/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a31",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_310_localizacao_010.png",
        inspection:"31dfe4f3d5a051603acbc517",
        bucketLink:"https://picsum.photos/id/414/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a32",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_210_localizacao_010.png",
        inspection:"31dfe4f3d5a051603acbc516",
        bucketLink:"https://picsum.photos/id/424/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a33",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_111_localizacao_011.png",
        inspection:"31dfe4f3d5a051603acbc515",
        bucketLink:"https://picsum.photos/id/434/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a34",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_311_localizacao_011.png",
        inspection:"31dfe4f3d5a051603acbc514",
        bucketLink:"https://picsum.photos/id/444/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a35",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_211_localizacao_011.png",
        inspection:"31dfe4f3d5a051603acbc513",
        bucketLink:"https://picsum.photos/id/454/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a36",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_112_localizacao_012.png",
        inspection:"31dfe4f3d5a051603acbc512",
        bucketLink:"https://picsum.photos/id/464/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a37",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_312_localizacao_012.png",
        inspection:"31dfe4f3d5a051603acbc511",
        bucketLink:"https://picsum.photos/id/474/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a38",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_212_localizacao_012.png",
        inspection:"31dfe4f3d5a051603acbc510",
        bucketLink:"https://picsum.photos/id/484/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a39",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_113_localizacao_013.png",
        inspection:"31dfe4f3d5a051603acbc509",
        bucketLink:"https://picsum.photos/id/494/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a40",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_313_localizacao_013.png",
        inspection:"31dfe4f3d5a051603acbc508",
        bucketLink:"https://picsum.photos/id/504/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a41",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_213_localizacao_013.png",
        inspection:"31dfe4f3d5a051603acbc507",
        bucketLink:"https://picsum.photos/id/514/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a42",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_114_localizacao_014.png",
        inspection:"31dfe4f3d5a051603acbc506",
        bucketLink:"https://picsum.photos/id/524/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a43",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_314_localizacao_014.png",
        inspection:"31dfe4f3d5a051603acbc505",
        bucketLink:"https://picsum.photos/id/534/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a44",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_214_localizacao_014.png",
        inspection:"31dfe4f3d5a051603acbc504",
        bucketLink:"https://picsum.photos/id/544/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a45",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_115_localizacao_015.png",
        inspection:"31dfe4f3d5a051603acbc503",
        bucketLink:"https://picsum.photos/id/554/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a46",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_315_localizacao_015.png",
        inspection:"31dfe4f3d5a051603acbc502",
        bucketLink:"https://picsum.photos/id/564/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a47",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_215_localizacao_015.png",
        inspection:"31dfe4f3d5a051603acbc501",
        bucketLink:"https://picsum.photos/id/574/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a48",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_116_localizacao_016.png",
        inspection:"31dfe4f3d5a051603acbc500",
        bucketLink:"https://picsum.photos/id/584/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a49",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_316_localizacao_016.png",
        inspection:"31dfe4f3d5a051603acbc501",
        bucketLink:"https://picsum.photos/id/594/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a50",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_216_localizacao_016.png",
        inspection:"31dfe4f3d5a051603acbc502",
        bucketLink:"https://picsum.photos/id/604/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a51",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_117_localizacao_017.png",
        inspection:"31dfe4f3d5a051603acbc503",
        bucketLink:"https://picsum.photos/id/614/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a52",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_317_localizacao_017.png",
        inspection:"31dfe4f3d5a051603acbc504",
        bucketLink:"https://picsum.photos/id/624/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a53",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_217_localizacao_017.png",
        inspection:"31dfe4f3d5a051603acbc505",
        bucketLink:"https://picsum.photos/id/634/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a54",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_118_localizacao_018.png",
        inspection:"31dfe4f3d5a051603acbc506",
        bucketLink:"https://picsum.photos/id/644/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a55",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_318_localizacao_018.png",
        inspection:"31dfe4f3d5a051603acbc507",
        bucketLink:"https://picsum.photos/id/654/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a56",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_218_localizacao_018.png",
        inspection:"31dfe4f3d5a051603acbc508",
        bucketLink:"https://picsum.photos/id/664/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a57",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_119_localizacao_019.png",
        inspection:"31dfe4f3d5a051603acbc509",
        bucketLink:"https://picsum.photos/id/674/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a58",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_319_localizacao_019.png",
        inspection:"31dfe4f3d5a051603acbc510",
        bucketLink:"https://picsum.photos/id/684/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a59",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_219_localizacao_019.png",
        inspection:"31dfe4f3d5a051603acbc511",
        bucketLink:"https://picsum.photos/id/694/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a60",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_120_localizacao_020.png",
        inspection:"31dfe4f3d5a051603acbc512",
        bucketLink:"https://picsum.photos/id/704/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a61",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_320_localizacao_020.png",
        inspection:"31dfe4f3d5a051603acbc513",
        bucketLink:"https://picsum.photos/id/714/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a62",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_220_localizacao_020.png",
        inspection:"31dfe4f3d5a051603acbc514",
        bucketLink:"https://picsum.photos/id/724/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a63",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_121_localizacao_021.png",
        inspection:"31dfe4f3d5a051603acbc515",
        bucketLink:"https://picsum.photos/id/734/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a64",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_321_localizacao_021.png",
        inspection:"31dfe4f3d5a051603acbc516",
        bucketLink:"https://picsum.photos/id/744/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a65",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_221_localizacao_021.png",
        inspection:"31dfe4f3d5a051603acbc517",
        bucketLink:"https://picsum.photos/id/754/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a66",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_122_localizacao_022.png",
        inspection:"31dfe4f3d5a051603acbc518",
        bucketLink:"https://picsum.photos/id/764/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a67",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_322_localizacao_022.png",
        inspection:"31dfe4f3d5a051603acbc519",
        bucketLink:"https://picsum.photos/id/774/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a68",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_222_localizacao_022.png",
        inspection:"31dfe4f3d5a051603acbc520",
        bucketLink:"https://picsum.photos/id/784/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a69",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_123_localizacao_023.png",
        inspection:"31dfe4f3d5a051603acbc521",
        bucketLink:"https://picsum.photos/id/794/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a70",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_323_localizacao_023.png",
        inspection:"31dfe4f3d5a051603acbc522",
        bucketLink:"https://picsum.photos/id/804/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a71",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_223_localizacao_023.png",
        inspection:"31dfe4f3d5a051603acbc523",
        bucketLink:"https://picsum.photos/id/814/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a72",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_124_localizacao_024.png",
        inspection:"31dfe4f3d5a051603acbc523",
        bucketLink:"https://picsum.photos/id/824/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a73",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_324_localizacao_024.png",
        inspection:"31dfe4f3d5a051603acbc522",
        bucketLink:"https://picsum.photos/id/834/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a74",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_224_localizacao_024.png",
        inspection:"31dfe4f3d5a051603acbc521",
        bucketLink:"https://picsum.photos/id/844/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a75",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_125_localizacao_025.png",
        inspection:"31dfe4f3d5a051603acbc520",
        bucketLink:"https://picsum.photos/id/854/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a76",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_325_localizacao_025.png",
        inspection:"31dfe4f3d5a051603acbc519",
        bucketLink:"https://picsum.photos/id/864/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a77",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_225_localizacao_025.png",
        inspection:"31dfe4f3d5a051603acbc518",
        bucketLink:"https://picsum.photos/id/874/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a78",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Amassado_126_localizacao_026.png",
        inspection:"31dfe4f3d5a051603acbc517",
        bucketLink:"https://picsum.photos/id/884/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a79",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Risco_326_localizacao_026.png",
        inspection:"31dfe4f3d5a051603acbc516",
        bucketLink:"https://picsum.photos/id/894/200/200"
    },
    {
        _id:"9a3f2332eb1c1d3a5f4a4a80",
        createdAt:"2019-01-23 09:47:07.128766-05",
        updatedAt:"",
        name:"Rachadura_226_localizacao_026.png",
        inspection:"31dfe4f3d5a051603acbc515",
        bucketLink:"https://picsum.photos/id/904/200/200"
    },
];

function getInspectionPhotos(){
    return inspectionPhotos;
};

function getInspectionPhotoById(id){
    const formatedId = "9a3f2332eb1c1d3a5f4a4a" + formatId(id);
    return inspectionPhotos.filter( photo => photo._id === formatedId);
};

function getInspectionPhotoByInspectionId(inspectionId){
    const formatedInspectionId = "31dfe4f3d5a051603acbc5" + formatId(inspectionId);
    return inspectionPhotos.filter( photo => photo.inspection === formatedInspectionId);
};


module.exports = {
    getInspectionPhotoById,
    getInspectionPhotoByInspectionId,
    getInspectionPhotos
};