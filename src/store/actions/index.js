import { ADD_PERSON_TO_FAVORITES, REMOVE_PERSON_TO_FAVORITES } from '@store/constants/actionTypes';

export const setPersonToFavorites = (person) => ({
	type: ADD_PERSON_TO_FAVORITES,
	payload: person,
});

export const removePersonToFavorites = (personId) => ({
	type: REMOVE_PERSON_TO_FAVORITES,
	payload: personId,
});
