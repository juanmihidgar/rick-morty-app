import Service from "./Service.js";

const temporalBaseUrl = "https://rickandmortyapi.com/api/";

const resource = "episode";

const get = () => {
  return Service.get(temporalBaseUrl + resource);
};
const getCharacterInfo = (id) => {
  return Service.get(`${temporalBaseUrl}${resource}/${id}`);
};

export default {
  get,
  getCharacterInfo,
};
