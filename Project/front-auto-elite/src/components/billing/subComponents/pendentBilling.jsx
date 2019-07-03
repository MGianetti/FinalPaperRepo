import React, { Component } from 'react';
import {Grid, MenuItem} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import DropDown from '../../common/dropDown';
import SearchBar from '../../common/searchBar';
import BillingEntity from './billingEntity';
import UiList from '../../common/uiList'


class pendentBilling extends Component {
    state = {
        dropDown:{
            items: ["Nome Cliente", 'Carro', 'Serviço', 'Cód Orçamento', 'Valor'],
            helpText: "Digite a informação de busca",
            defaultText: "Buscar por...",
            selected: ''
        },
        searchField:'',
        searchedBillings:[{'1': <BillingEntity data={{date:"Vencido" , plate:"CBH-6554", name:"Gabriela Correia Santos", value:"R$596", remain:0}}/>},
                          {'2': <BillingEntity data={{date:"3 dias" , plate:"AOB-2190", name:"José Lima Alves", value:"R$923,50", remain:3}}/>},
                          {'3': <BillingEntity data={{date:"7 dias" , plate:"JUW-0295", name:"Diogo Costa Oliveira", value:"R$1000", remain:6}}/>},
                          {'4': <BillingEntity data={{date:"15 dias" , plate:"JYX-6432", name:"Victor Gomes Borges", value:"R$612", remain:15}}/>},
        ]
      }
    render() { 
        const { searchedBillings,searchField,dropDown } = this.state;
        return (
        <React.Fragment>  
            <Grid container justify='center' style={{paddingTop:25}}>
                <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                    <Grid container justify='center' style={{width:'100%'}}>
                        <Grid container style={{width:'70%', paddingBottom:20}} justify='center'>
                            <DropDown
                                data={{dropDown}}
                                onChange={this.handleDropMenuChange}
                                style={{width:"50%"}}
                            />
                            <Grid item justify='center' style={{paddingLeft:40}}>
                                <SearchBar 
                                    value={searchField} 
                                    onChange={this.handleSearchBarChange}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper elevation='5' style={{width:'90%', marginTop:15}}>
                    <Grid container justify='center'>
                        <Grid item style={{paddingTop:50}}>                                
                        <UiList
                                data={searchedBillings}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </React.Fragment> 
        );
    };
};

export default pendentBilling;