import axios from "axios";

const baseUrl = "https://rickandmortyapi.com/api/";

const Service = axios.create({ baseUrl });

export default Service;
