import { getItemFromStorage } from "../utils/storageUtils";
import { decodeToken } from "../utils/tokenDecode";

export function getUserIdFromToken() {
   
    if (getItemFromStorage('token')) {
        console.log('flow is here')
        console.log('user id',decodeToken().user_id) 
    } else {
        return null;
    }
}


// console.log(username)

export const Users = {
    activeUsers: 'fetchUser',
    cretae: 'createUser',
    signUp: 'auth/signup',
    signIn : 'auth/signin',
    updateProfile: `auth/updatesignup/${getUserIdFromToken()}`
 
}
