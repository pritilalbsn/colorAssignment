import React from 'react';
import { connect } from 'react-redux';

class Gondia extends React.Component {
    render() {
        return (
            <div>
                <button
                    style={{ backgroundColor: this.props.color }}
                    onClick={() => { this.props.changeColorBygondia('red') }}

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
const mapStateToProps = (store) => {
    return {
        color: store.colorReducer.color,
    }
};

const dispatchToProps = (dispatch) => ({
    changeColorBygondia: (color) => { dispatch({ type: 'CHANGE_ACTION', payload: color }) },
});

export default connect(mapStateToProps, dispatchToProps)(Gondia);
