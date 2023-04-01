import { SWAPI_BASE, HTTPS} from "@constants/api"

export const getId = (url,category) => {
const id = url
.replace(HTTPS+SWAPI_BASE+category,'')
.replace(/\//g, '');

return id;
}