import { SWAPI_PEOPLE ,GUIDE_IMG_PEOPLE,GUIDE_IMG_EXTENTION} from "@constants/api"
import { getId } from "./getId";

export const getPeopleId = url => getId(url,SWAPI_PEOPLE);
export const getPeopleImg = id => `${GUIDE_IMG_PEOPLE}/${id+GUIDE_IMG_EXTENTION}`;