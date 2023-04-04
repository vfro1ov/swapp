import {ADD_PERSON_TO_FAVORITES,REMOVE_PERSON_TO_FAVORITES} from '@store/constants/actionTypes'

export const setPersonToFavorites =()=> ({
	type: ADD_PERSON_TO_FAVORITES,
	payload: ''
} )

export const removePersonToFavorites =()=> ({
	type: REMOVE_PERSON_TO_FAVORITES,
	payload: ''
} )