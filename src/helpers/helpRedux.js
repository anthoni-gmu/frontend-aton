
export const getStoreLocal = (item) => {
    if (typeof localStorage !== 'undefined') {
        return localStorage.getItem(item);
    }
    return null;
}