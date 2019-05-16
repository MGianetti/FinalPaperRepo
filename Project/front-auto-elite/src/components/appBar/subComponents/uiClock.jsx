import React, { Component } from 'react';

class UiClock extends Component {
    state = {now: new Date()}

    poolingClock = () => {
        this.setState({now: new Date()});
    }

    render() {
        const { now } = this.state;
        return (  
            <div>
                {now.getHours()}:{now.getMinutes()}
            </div>
        );
    };
};

export default UiClock;