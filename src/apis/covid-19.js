import axios from "axios";

const APIkey = "6c36943c50mshb539329ca24290ap188a04jsn4320ae502b26";
const rapidapi = "covid-193.p.rapidapi.com";

export default axios.create({
  baseURL: "https://covid-193.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": rapidapi,
    "x-rapidapi-key": APIkey
  }
});
