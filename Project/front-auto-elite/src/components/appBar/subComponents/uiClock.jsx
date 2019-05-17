import React, { Component } from 'react';
import Clock from 'react-live-clock';
class UiClock extends Component {

    render() {
        return (  
            <React.Fragment>
                <Clock format="HH:mm" ticking={true} interval={1000} />
            </React.Fragment>
        );
    };
};

export default UiClock;