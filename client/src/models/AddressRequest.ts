import {Cities} from "./Cities";

export interface AddressRequest {
  firstName: string,
  lastName: string,
  email: string,
  street: string,
  zipCode: string,
  city: string
}