import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CreateClient from './subComponents/createClient';
import SearchClient from './subComponents/searchClient';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Clients extends Component {
    state = { 
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render() {
        const { value } = this.state;
        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange} >
                        <Tab label="Criar"  />
                        <Tab label="Buscar" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>
                    <CreateClient/>
                </TabContainer>}
                {value === 1 && <TabContainer>
                    <SearchClient/>
                </TabContainer>}
            </div>
        );
    };
};

export default Clients;


/*Nome:'',
        CPF:'',
        Celular:'',
        Telefone:'',
        CEP:'',
        Rua:'',
        Numero:'',
        Bairro:'',
        Cidade:'',
        Estado:'',*/