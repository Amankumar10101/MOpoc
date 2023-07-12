import { baseURL } from './apiconstants';

// export const getUsersUrl = () => `${baseURL}/users`

export const Users = {
    activeUsers: 'fetchUser',
    cretae: 'createUser',
    signUp: 'auth/signup/PURCHASER',
    signIn : 'auth/signin'
}

// const getUrl = (endpoint: string) => `${baseURL}/${endpoint}`;


// getUrl(Users.activeUsers)