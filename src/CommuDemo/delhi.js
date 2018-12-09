import React from 'react';
import Mumbai from './mumbai';
import Raipur from './raipur';
import Banglore from './banglore';

export default class Delhi extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'red',
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(newColor) {
        this.setState({ color: 'green' })
        console.log(newColor);
    }

    render() {
        return (
            <div>
                <Mumbai color={this.state.color} handleColor={this.changeColor} />
                <Banglore />
                <Raipur />
            </div>
        );
    }

}