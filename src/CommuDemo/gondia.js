import React from 'react';

export default class Gondia extends React.Component {
    render() {
        return (
            <div>
                <button
                    style={{ backgroundColor: this.props.color }}

                >
                    Red
                </button>
                <button
                    style={{ backgroundColor: this.props.color }}
                    onClick={() => { this.props.changeColorBygondia('green') }}
                >
                    green
                </button>
            </div >
        );

    }
} 