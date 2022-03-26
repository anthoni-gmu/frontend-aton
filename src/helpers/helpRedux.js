
export const getStoreLocal = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item);
    }
    return null;
}

export const removeStoreLocal = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.remove(item);
    }
    return null;
}


export const setStoreLocal = (item, payload) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.setItem(item, JSON.stringify(payload));
    }
    return null;
}


