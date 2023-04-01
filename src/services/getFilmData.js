import { SWAPI_FILMS} from "@constants/api"
import { getId } from "./getId";

export const getFilmId = url => getId(url,SWAPI_FILMS);

// export const getFilmImg = id => `${GUIDE__IMG_SPECIES}/${id+GUIDE_IMG_EXTENTION}`;