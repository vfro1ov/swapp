import {omit} from 'lodash';

import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_TO_FAVORITES } from '@store/constants/actionTypes';

const initialState = {};

const favoritesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PERSON_TO_FAVORITES:
			return {
				...state,
				...action.payload,
			};
		case REMOVE_PERSON_TO_FAVORITES:
				return omit(state,[action.payload])
			
		default:
			return state;
	}
};
export default favoritesReducer;
