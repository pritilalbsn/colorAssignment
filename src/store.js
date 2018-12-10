import { createStore } from 'redux';

import reducer from './reducer/colorReducer';


const store = createStore(reducer);

export default store;