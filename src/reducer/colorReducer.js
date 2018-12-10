import { combineReducers } from 'redux';

const colorReducer = (prevStore = { color: 'yellow' }, action) => {
    switch (action.type) {
        case 'CHANGE_ACTION':
            return Object.assign({}, prevStore, { color: action.payload });
        default:
            return prevStore;
    }
};

const reducers = combineReducers({
    colorReducer,
});

export default reducers;
