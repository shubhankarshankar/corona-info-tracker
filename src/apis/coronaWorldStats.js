import axios from "axios";

const APIkey = "6c36943c50mshb539329ca24290ap188a04jsn4320ae502b26";
const rapidapi = "coronavirus-monitor.p.rapidapi.com";

export default axios.create({
  baseURL:
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
  headers: {
    "x-rapidapi-host": rapidapi,
    "x-rapidapi-key": APIkey
  }
});
