import { SWAPI_PEOPLE ,SWAPI_BASE, HTTPS,GUIDE_IMG_PEOPLE,GUIDE_IMG_EXTENTION,SWAPI_PARAM_PAGE} from "@constants/api"

const getId = (url,category) => {
const id = url
.replace(HTTPS+SWAPI_BASE+category,'')
.replace(/\//g, '');

return id;
}

export const getPeoplePageId = url => {
	const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
	const id = url.slice(pos+SWAPI_PARAM_PAGE.length, url.length)
	console.log(id)
	return Number(id)
}
export const getPeopleId = url => getId(url,SWAPI_PEOPLE);

export const getPeopleImg = id => `${GUIDE_IMG_PEOPLE}/${id+GUIDE_IMG_EXTENTION}`;