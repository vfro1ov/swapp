import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import rootReducer from './redusers/index';

export default createStore( rootReducer,
	composeWithDevTools(applyMiddleware(thunk)) );
