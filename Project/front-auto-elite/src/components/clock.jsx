import React, { Component } from 'react';

class ClockComponent extends Component {
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

export default ClockComponent;