import Axios from "axios";
import {baseURL, server_url} from "../_dbconfig/routes";
import {AddressResponse} from "../models/AddressResponse";
import {AddressRequest} from "../models/AddressRequest";

export function getAllAddresses() {
  return Axios.get(
    server_url + 'server/api/controllers/address.php',
    {
      baseURL: baseURL,
      headers: {'Access-Control-Allow-Origin': '*'}
    }
  )
}

export async function createAddress(data: AddressRequest) {
  console.log('create address')
  await Axios.post(
    server_url + 'server/api/controllers/address.php',
    data,
    {
      baseURL: baseURL,
      headers: {'Access-Control-Allow-Origin': '*', 'content-type': 'application/x-www-form-urlencoded format'},

    }
  )
    .then((response) => {
      return response.data
    })
    .catch((err: any) => {
      return err
    })
}

export async function editAddress() {

}

export async function convertToJSON() {

}

export async function convertToXML() {

}