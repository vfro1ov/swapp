import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import { setLocalStorage } from '@utils/localStorage';
import thunk from 'redux-thunk';
import rootReducer from './redusers/index';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
	setLocalStorage('store',store.getState().favoritesReducer)
});

export default store;
