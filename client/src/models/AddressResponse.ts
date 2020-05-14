import {Cities} from "./Cities";

export interface AddressResponse {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  street: string,
  zipCode: string,
  city: string
}