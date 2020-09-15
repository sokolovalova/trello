export const setToLocalStorage = async (key:string, data:any)=>{
    window.localStorage.setItem(key, data);
};

export const getLocalStorage = async (key:string)=>{
    window.localStorage.getItem(key);
};