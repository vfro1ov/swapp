import { SWAPI_SPECIES, GUIDE_IMG_EXTENTION,GUIDE__IMG_SPECIES} from "@constants/api"
import { getId } from "./getId";

export const getSpeciesId = url => getId(url,SWAPI_SPECIES);
export const getSpeciesImg = id => `${GUIDE__IMG_SPECIES}/${id+GUIDE_IMG_EXTENTION}`;