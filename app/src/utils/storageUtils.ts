export const setItemInStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
}

export const getItemFromStorage = (key: string) => {
    return sessionStorage.getItem(key) || "";
}

