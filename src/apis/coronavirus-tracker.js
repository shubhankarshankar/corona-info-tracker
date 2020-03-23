import axios from "axios";

export default axios.create({
  baseURL: "https://coronavirus-tracker-api.herokuapp.com/v2/"
});
