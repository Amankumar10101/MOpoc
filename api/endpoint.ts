import { baseURL } from './apiconstants';

// export const getUsersUrl = () => `${baseURL}/users`

export const Users = {
    activeUsers: 'fetchUser',
    cretae: 'createUser',
    validateUser: 'validateUser',
    entries : 'entries'
}

// const getUrl = (endpoint: string) => `${baseURL}/${endpoint}`;


// getUrl(Users.activeUsers)