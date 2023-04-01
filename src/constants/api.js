export const HTTPS = 'https://';
export const HTTP = 'http://';


export const SWAPI_BASE = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_SPECIES = 'species';
export const SWAPI_PARAM_SEARCH = '/?search=';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_FILMS = 'films';

export const API_PEOPLE = HTTPS+SWAPI_BASE+SWAPI_PEOPLE+SWAPI_PARAM_PAGE
export const API_SPECIES = HTTPS+SWAPI_BASE+SWAPI_SPECIES+SWAPI_PARAM_PAGE
export const API_SEARCH = HTTPS+SWAPI_BASE+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH
export const API_PERSON = HTTPS+SWAPI_BASE+SWAPI_PEOPLE
export const API_FILMS = HTTPS+SWAPI_BASE+SWAPI_FILMS




const GUIDE_BASE_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
const GUIDE_SPECIES = 'species';
export const GUIDE_IMG_EXTENTION = '.jpg';
export const GUIDE_IMG_PEOPLE = GUIDE_BASE_IMG + GUIDE_PEOPLE;
export const GUIDE__IMG_SPECIES = GUIDE_BASE_IMG+ GUIDE_SPECIES;