import { SWAPI_PEOPLE ,SWAPI_BASE, HTTPS,GUIDE_IMG_PEOPLE,GUIDE_IMG_EXTENTION} from "../constants/api"

const getId = (url,category) => {
const id = url
.replace(HTTPS+SWAPI_BASE+category,'')
.replace(/\//g, '');

return id;
}

export const getPeopleId = url => getId(url,SWAPI_PEOPLE);

export const getPeopleImg = id => `${GUIDE_IMG_PEOPLE}/${id+GUIDE_IMG_EXTENTION}`;