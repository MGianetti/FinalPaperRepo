import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class InspectionEntity extends Component {
    state = {
        dropDown: {
            items: [],
            helpText: "Busca inspeção",
            defaultText: "Buscar inspeção...",
            selected: ''
        },

        editingMode: false,
    };

    handleEdit = () => {
        const editingMode = true;
        this.setState({ editingMode });
    }

    handleModalClose = () => {
        const editingMode = false;
        this.setState({ editingMode });
    }

    handleDropMenuChange = event => {
        const dropDownName = event.target.name;
        let newDropDownState = this.state[dropDownName];
        newDropDownState['selected'] = event.target.value;
        this.setState({ [dropDownName]: newDropDownState});
    };

    render() { 
        return (
            <Typography> InspectionEntity </Typography>
        );
    };
};

export default InspectionEntity;