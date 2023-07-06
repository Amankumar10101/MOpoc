import jwt_decode from "jwt-decode";

import { getItemFromStorage } from "./storageUtils";

export function decodeToken(): any {
  const token : string  = getItemFromStorage("token");
  console.log("token", token)
  if (token) {
    const decoded = jwt_decode(token);

    return decoded;
    // console.log('decoded code', decoded)
  } else {
    return null;
  }
}