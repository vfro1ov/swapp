import { SWAPI_BASE,SWAPI_SPECIES, HTTPS,GUIDE_IMG_EXTENTION,GUIDE__IMG_SPECIES} from "../constants/api"

const getId = (url,category) => {
const id = url
.replace(HTTPS+SWAPI_BASE+category,'')
.replace(/\//g, '');

return id;
}

export const getSpeciesId = url => getId(url,SWAPI_SPECIES);

export const getSpeciesImg = id => `${GUIDE__IMG_SPECIES}/${id+GUIDE_IMG_EXTENTION}`;