import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CreateClient from './subComponents/createClient';
import SearchClient from './subComponents/searchClient';
import UiTabs from './../common/uiTabs';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

class Clients extends Component {
    state = { 
        tabs:[
            {0: "Criar"},
            {1: "Buscar"}
        ],
        tabSelected: 0
    };

    handleChange = (event, tabSelected) => {
        this.setState({ tabSelected });
    };
    
    render() {
        const { tabs, tabSelected } = this.state;
        return (
            <div>
                <UiTabs data={tabs} onChange={this.handleChange}/>
                <Grid container justify='center'>
                    {tabSelected === 0 && <Grid item>
                            <TabContainer>
                                <CreateClient/>
                            </TabContainer>
                        </Grid>
                    }
                    {tabSelected === 1 && <Grid item>
                            <TabContainer>
                                <SearchClient/>
                            </TabContainer>
                        </Grid>
                    }
                </Grid>
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