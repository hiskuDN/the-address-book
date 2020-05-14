import Axios from "axios";
import {baseURL, server_url} from "../_dbconfig/routes";

export function getCities() {
  return Axios.get(
    server_url + 'server/api/controllers/cities.php',
    {
      baseURL: baseURL,
      headers: {'Access-Control-Allow-Origin': '*'}
    }
  )
}