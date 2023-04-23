import { SWAPI_FILMS,GUIDE__IMG_FILMS,GUIDE_IMG_EXTENTION} from "@constants/api"
import { getId,getFilm } from "./getId";



export const getFilmId = url => getFilm(url,SWAPI_FILMS );

export const getFilmImg = id => `${GUIDE__IMG_FILMS}/${id+GUIDE_IMG_EXTENTION}`;