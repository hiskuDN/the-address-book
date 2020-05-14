import Axios from "axios";
import {baseURL, server_url} from "../_dbconfig/routes";

export function exportJSON() {
  return Axios.get(
    server_url + 'server/api/controllers/exportJSON.php',
    {
      baseURL: baseURL,
      headers: {'Access-Control-Allow-Origin': '*'},
      responseType: "blob"
    }
  ).then((response: any) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'saveJSON.json')
    link.click()
  })
}

export function exportXML() {
  return Axios.get(
    server_url + 'server/api/controllers/exportXML.php',
    {
      baseURL: baseURL,
      headers: {'Access-Control-Allow-Origin': '*'},
      responseType: "blob"
    }
  ).then((response: any) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'saveXML.xml')
    link.click()
  })
}