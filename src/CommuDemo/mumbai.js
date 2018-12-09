import React from 'react';
import Gondia from './gondia';

export default class Mumbai extends React.Component {
    render() {
        return (
            <div>
                <Gondia color={this.props.color} changeColorBygondia={this.props.handleColor} />
            </div>
        );

    }
} 